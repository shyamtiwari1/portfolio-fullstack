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
                    "High-Throughput KYC Validation Service",
                    "A pluggable validation engine serving 500K req/hour. Lender-specific rules are fully configurable — new lending partners onboard with zero code changes, all behind one clean processing pipeline.",
                    List.of("Java", "Spring Boot", "Redis", "Design Patterns"),
                    "Olyv", null, null, true),
            new Project(2L,
                    "Concurrency-Safe Onboarding",
                    "Eliminated duplicate lender-loan mappings under concurrent load using Redis distributed locks and idempotent processing, with AES-encrypted metadata and structured error attribution for cross-service debugging.",
                    List.of("Redis Locks", "Idempotency", "AES"),
                    "Olyv", null, null, true),
            new Project(3L,
                    "Financing Product & Repayment Engine",
                    "Led an embedded-financing product from a blank page to production, then independently built its repayment module — performance-tuned and designed to scale with the lending book.",
                    List.of("Java", "Play", "PostgreSQL", "Kafka"),
                    "ClearTax", null, null, true),
            new Project(4L,
                    "Supply-Chain Reports & Insights",
                    "Built the Reports & Insights segment of ClearTax's Supply Chain product using multiple Temporal child workflows for reliable, scalable, long-running task execution — with full observability baked in.",
                    List.of("Temporal", "Grafana", "Prometheus"),
                    "ClearTax", null, null, true)
    );

    private final List<Post> posts = List.of(
            new Post(1L,
                    "designing-a-lender-configurable-kyc-engine",
                    "Designing a Lender-Configurable KYC Engine for 500K req/hour",
                    "How Strategy, Factory and Template Method patterns let new lending partners onboard without a single code change.",
                    """
                    # Designing a Lender-Configurable KYC Engine

                    When every lending partner wants slightly different KYC rules, you have two options:
                    fork the code per lender (a maintenance nightmare), or make the rules *data*.

                    We chose the second. This post walks through the design...

                    _(Full post coming soon — this is placeholder content for Phase 1.)_
                    """,
                    List.of("Java", "Spring Boot", "Architecture", "Design Patterns"),
                    LocalDate.of(2026, 7, 18), 0, 0),
            new Post(2L,
                    "redis-distributed-locks-in-practice",
                    "Redis Distributed Locks in Practice",
                    "Preventing duplicate work under concurrent requests with idempotency and distributed locks.",
                    """
                    # Redis Distributed Locks in Practice

                    Race conditions in onboarding workflows are subtle: two requests arrive at the same
                    millisecond, both check "does a mapping exist?", both see "no", and both create one.

                    Here's how we made it safe...

                    _(Full post coming soon — this is placeholder content for Phase 1.)_
                    """,
                    List.of("Redis", "Concurrency", "Backend"),
                    LocalDate.of(2026, 7, 18), 0, 0)
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
