package com.shyam.portfolio.service;

import com.shyam.portfolio.model.Post;
import com.shyam.portfolio.model.Project;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

/**
 * Phase 1: in-memory content so the API is deployable without a database yet.
 * Phase 3 replaces this with JPA repositories over PostgreSQL — the controllers
 * won't change, only this data source does.
 */
@Service
public class ContentService {

    private final List<Project> projects = List.of(
            new Project(1L,
                    "High-Throughput KYC Platform",
                    "Designed a configurable validation engine so lending partners onboard on their own policies without touching the shared pipeline, then hardened the onboarding workflow to stay correct under heavy concurrent load.",
                    List.of("Java", "Spring Boot", "Redis", "Design Patterns"),
                    "Olyv", null, null, true),
            new Project(2L,
                    "Financing Product & Repayment Engine",
                    "Owned an embedded-financing product end to end, from design through production, then built the repayment module underneath it — tuned for scale as the lending book grew.",
                    List.of("Java", "Spring Boot", "PostgreSQL", "Kafka"),
                    "ClearTax", null, null, true),
            new Project(3L,
                    "Supply-Chain Reports & Insights",
                    "Built the reporting layer for a supply-chain product on reliable, long-running workflows — designed so a report either completes cleanly or safely retries, never half-finishes.",
                    List.of("Temporal", "Grafana", "Prometheus"),
                    "ClearTax", null, null, true),
            new Project(4L,
                    "This Portfolio",
                    "The site you're on right now: a Next.js frontend on Vercel talking to this Spring Boot API on Render. Open source — the projects above are proprietary employer work, this one you can actually read.",
                    List.of("Next.js", "React", "TypeScript", "Spring Boot", "Java"),
                    "Personal",
                    "https://github.com/shyamtiwari1/portfolio-fullstack",
                    "https://shyamtiwari.vercel.app", true)
    );

    private final List<Post> posts = List.of(
            new Post(1L,
                    "designing-a-lender-configurable-kyc-engine",
                    "Designing a Lender-Configurable KYC Engine for 500K req/hour",
                    "How Strategy, Factory and Template Method patterns let new lending partners onboard without a single code change.",
                    """
                    # Designing a Lender-Configurable KYC Engine

                    When every lending partner wants slightly different KYC rules — a different
                    document set, a different score threshold, a different order of checks — you
                    have two options: fork the validation code per lender, or make the rules *data*
                    that a shared pipeline interprets. Forking is a maintenance nightmare: every bug
                    fix has to be repeated N times, and N only grows. So the engine is built around
                    the second option, using three patterns that keep the shared pipeline honest.

                    ## Template Method: one pipeline, many lenders

                    Every request — regardless of lender — goes through the same fixed sequence:
                    fetch config → validate document set → run field-level checks → aggregate a
                    decision → emit an audit trail. That sequence lives in one place. What changes
                    per lender is *which checks run and with what parameters*, not the shape of the
                    pipeline itself. That constraint is what makes the system auditable: you can
                    reason about "what happens to a request" once, independent of which lender sent it.

                    ## Strategy: rules as swappable behavior

                    Each validation step (PAN format, address-proof freshness, income-document
                    cross-checks, and so on) is implemented as a `Strategy` behind a common
                    interface. A lender's configuration is just a list of which strategies apply and
                    in what order — no branching on lender ID buried inside business logic. Adding a
                    check for one lender means writing one new strategy class and registering it in
                    config; it can't accidentally fire for a lender that didn't ask for it.

                    ## Factory: resolving config to behavior at request time

                    A `Factory` reads the lender's stored configuration and assembles the concrete
                    list of strategy instances for that request. This is the seam between "data"
                    (lender config, stored and editable without a deploy) and "code" (the strategy
                    implementations). Onboarding a new lending partner becomes a config change plus,
                    at most, a small number of net-new strategies — never a rewrite of the pipeline.

                    ## Why this mattered at 500K requests/hour

                    At that volume, the expensive failure mode isn't CPU — it's a change to one
                    lender's rules accidentally breaking another's. Because strategies are isolated
                    and the pipeline shape is fixed, a config change is scoped to exactly the lender
                    it targets. That isolation is what let new lenders onboard with zero code changes,
                    and let existing ones ship rule changes without a full regression pass on the
                    whole engine.

                    The tradeoff worth naming: this only pays off once you have enough lenders that
                    the fork-per-partner cost would already hurt. For one or two lenders, a shared
                    pipeline with config-driven strategies is over-engineering. It became worth it
                    somewhere around the third or fourth partner, when "just special-case it" stopped
                    being a one-line change.
                    """,
                    List.of("Java", "Spring Boot", "Architecture", "Design Patterns"),
                    LocalDate.of(2026, 7, 18), 0, 0),
            new Post(2L,
                    "redis-distributed-locks-in-practice",
                    "Redis Distributed Locks in Practice",
                    "Preventing duplicate work under concurrent requests with idempotency and distributed locks.",
                    """
                    # Redis Distributed Locks in Practice

                    Race conditions in onboarding workflows are subtle: two requests for the same
                    lender-loan pair arrive within a few milliseconds of each other, both check "does
                    a mapping already exist?", both see "no", and both proceed to create one. Now
                    there are two records for what should be a single onboarding, and every downstream
                    system that assumed uniqueness is quietly wrong.

                    ## Why an in-process lock doesn't help

                    A `synchronized` block or an in-memory mutex only protects against concurrency
                    *within one instance*. The service runs behind a load balancer across multiple
                    instances, so the two racing requests can easily land on two different processes
                    that have never heard of each other. The lock has to live somewhere shared —
                    Redis, in this case, acting as the single source of truth for "is this key
                    currently being worked on."

                    ## The lock: acquire, do the work, release — safely

                    The pattern is `SET key value NX PX <ttl>`: set the key only if it doesn't already
                    exist (`NX`), with an expiry (`PX`) so a crashed holder can't wedge the lock
                    forever. The value is a random token unique to that attempt, and release is a
                    check-then-delete done atomically via a small Lua script — so a process can only
                    release a lock it actually holds, not one that expired and was re-acquired by
                    someone else in the meantime. Skipping either of those two details (the TTL, or
                    the token check on release) is where most "Redis lock" implementations quietly
                    become unsafe.

                    ## Idempotency: the lock's necessary partner

                    A lock alone isn't enough, because a client can time out and retry — the retry
                    isn't a race, it's the same logical request arriving twice, sequentially. So every
                    write path is keyed by an idempotency key (lender ID + loan ID), and a repeat
                    request for a key that already succeeded returns the original result instead of
                    redoing the work. The lock stops *concurrent* duplication; idempotency stops
                    *sequential* duplication. Neither one substitutes for the other.

                    ## What this bought in practice

                    With both in place, duplicate lender-loan mappings under concurrent load stopped
                    happening, without needing a database-level unique constraint to be the last line
                    of defense (though one still exists, because defense in depth is cheap insurance
                    against a bug in the lock path itself). The cost is a small amount of added
                    latency per request for the lock round-trip — worth it once "duplicate records
                    that need manual cleanup" was a recurring on-call page, not worth it for endpoints
                    that were never actually racing in the first place.
                    """,
                    List.of("Redis", "Concurrency", "Backend"),
                    LocalDate.of(2026, 7, 25), 0, 0)
    );

    public List<Project> allProjects() {
        return projects;
    }

    public List<Post> allPosts() {
        return posts;
    }

    public Optional<Post> postBySlug(String slug) {
        return posts.stream().filter(p -> p.slug().equals(slug)).findFirst();
    }
}
