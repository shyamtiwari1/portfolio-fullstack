# Portfolio Project — Context / Handoff

_Paste this into a new session to resume. Last updated: 2026-09-13._

## What this is
Shyam Tiwari's personal portfolio. Goal: modern, recruiter-facing, public, uses trending tech.
Two portfolios exist:

1. **Static (simple, live):** single `index.html`, no build.
   - Code: `~/portfolio/`  · Repo: `github.com/shyamtiwari1/shyamtiwari1.github.io`
   - Live: **https://shyamtiwari1.github.io**
   - Features: dark/light toggle, English/Hindi (हिं/EN) i18n, photo, résumé PDF.
   - Update loop: edit `index.html` → `cd ~/portfolio && git add -A && git commit -m .. && git push` → live ~1 min.

2. **Full-stack (main project, live):** Next.js + Spring Boot. This is the primary one.
   - Code: `~/portfolio-fullstack/` (monorepo: `frontend/` + `backend/`)
   - Repo: `github.com/shyamtiwari1/portfolio-fullstack` (public)
   - **Frontend live:** https://shyamtiwari.vercel.app  (Next.js 16 / React 19 / TS / Tailwind on Vercel)
   - **Backend live:**  https://portfolio-api-7cmx.onrender.com  (Spring Boot 4 / Java 21 on Render, Docker)

## Architecture
```
Browser → Vercel (Next.js frontend) → Render (Spring Boot API) → [Phase 3: PostgreSQL + Redis]
```
Frontend fetches projects/posts from the API. `/`, `/blog`, `/blog/[slug]`.

## Where content lives (how to edit)
- **Page section order** (Hero → About → Experience → Projects → Skills → Writing → Now):
  `frontend/src/app/page.tsx`. Section numbering ("01 —", "02 —" kickers) is hand-coded per
  component — renumber manually in each component if you reorder again.
- **Fixed text** (hero, about, skills, experience, socials, "Now"): `frontend/src/components/*.tsx`
- **Photos**: `frontend/public/hero-photo.jpeg` (Hero, top), `frontend/public/profile.jpeg`
  (About), `frontend/public/now-photo.jpeg` (Now section). All three exist and render
  unconditionally — an earlier "render only if file exists" version (via `fs.existsSync`
  against `public/`) was removed because that check is unreliable on Vercel's serverless
  runtime (see tooling gotchas below). To swap a photo, just replace the file at the same
  path/name. To add a new optional photo slot elsewhere, don't reintroduce the
  `fs.existsSync` pattern — commit the file and render it unconditionally instead.
- **Icons**: a small hand-drawn SVG set in `frontend/src/components/Icon.tsx` (no emoji, no
  external icon library) — used across About/Skills/Projects.
- **Projects & blog posts** (API data, currently hardcoded): `backend/src/main/java/com/shyam/portfolio/service/ContentService.java`
- **SEO/metadata + OG image:** `frontend/src/app/layout.tsx` + `frontend/public/og-image.png`
- **Featured tweets:** `frontend/src/components/LatestThoughts.tsx` (add tweet IDs to the array)

## How to deploy after edits
**Frontend** (from the frontend dir — see "Local clone location" below, it's NOT `~/portfolio-fullstack`):
```
npx vercel --prod --yes --scope shyam-portfolio2 \
  -b NEXT_PUBLIC_API_BASE=https://portfolio-api-7cmx.onrender.com \
  -e NEXT_PUBLIC_API_BASE=https://portfolio-api-7cmx.onrender.com
```
**⚠️ CRITICAL — the alias does NOT auto-update.** `shyamtiwari.vercel.app` does not
automatically track each new `--prod` deploy on this project. Every single deploy, you
MUST follow up with (using the "Production" URL the command above just printed):
```
npx vercel alias set <the-Production-url-just-printed> shyamtiwari.vercel.app --scope shyam-portfolio2
```
Skipping this step is the single most common failure mode: the deploy succeeds, the build
is correct, but `shyamtiwari.vercel.app` keeps showing an older build and it looks like
nothing happened. If a change "isn't showing up" after deploying, check the unique
per-deployment URL the command printed FIRST before assuming the code is wrong — if it
shows correctly there, it's an alias problem, not a code problem.

(Fixing this properly, not yet done: connect the `frontend` Vercel project to the GitHub
repo via the dashboard's "Connect Git Repository" button, Root Directory = `frontend`.
That would make both deploy AND the alias update automatically on every push to `main`,
same as the backend already does on Render. Low priority, but would end this manual dance.)

**Backend:** `git add -A && git commit -m .. && git push` → Render auto-rebuilds from `main`.

## Env / tooling gotchas
- Git identity is PERSONAL: `shyamtiwari1 <shyamtiwari025@gmail.com>` — NOT company `shyam-olyv`.
- JDK 21 is keg-only at `/opt/homebrew/opt/openjdk@21/bin/java`. Default `java` is still Java 8 — to run the jar you MUST call the JDK21 binary directly (`JAVA_HOME` alone is not enough).
- Node 26, Maven 3.9. `gh` CLI authed as shyamtiwari1. Vercel CLI authed as `shyamtiwari025-1658`, team `shyam-portfolio2`.
- Vercel project id `prj_zIMoFzpXqzkvKVmC3dV3DVHwwxZ1`, team `team_EU4ZRKS2JSyqIhybdBRU5O5P` (project name `frontend`).
  **There is also a decoy project called `portfolio-fullstack`** (created by an accidental
  `vercel --prod` run from the repo root instead of `frontend/`, back on 2026-09-12) — it's
  now Git-connected to the main repo and will auto-deploy on every push, wasting build
  minutes. It is NOT the live site. Safe to disconnect/delete; see cleanup TODOs below.
- **Local clone location is inconsistent with these docs**: on this Mac it actually lives at
  `~/Library/portfolio-fullstack/` (nested under `Library`, from an earlier accidental
  `git clone` run while cwd was `~/Library`), NOT `~/portfolio-fullstack/` as older notes
  say. It's a perfectly valid, correctly-synced clone — just check `pwd` before assuming
  the path, or run `find ~ -maxdepth 3 -iname portfolio-fullstack -type d 2>/dev/null` to
  locate it if a session starts confused about this again.
- **Vercel CLI may not be installed at all** on a fresh terminal/shell — `npm`/`npx`/`node`
  can all be missing too. Fix in order: `brew install node` (Homebrew is already present
  for the JDK), then `npx vercel <command>` (npx installs vercel on first use, no need for
  a separate global install).
- **`next/image` optimization silently fails on this Vercel deployment** — likely the
  `sharp` native dependency's install script gets skipped (`npm warn install-scripts...
  sharp@... not yet covered by allowScripts`). Symptom: an `<Image>` for a real,
  reachable static file (confirmed directly loadable at its own URL) simply doesn't
  render at all in production — not even a broken-image box — while working perfectly in
  every local build. Fix: add the `unoptimized` prop to any `next/image` `<Image>` that
  points at a local `public/` file. All three photo components (Hero, About, Now) already
  have this.
- Free tiers: Render backend SLEEPS after 15 min idle (~30s cold start) — normal.

## Done so far
- Phase 0 ✅ tooling + monorepo scaffold
- Phase 1 ✅ Spring Boot API (projects/posts/health, in-memory) live on Render (Docker + render.yaml)
- Phase 2 ✅ Next.js frontend live on Vercel, consumes the API
- Extras ✅ clean URL alias, social buttons (LinkedIn/GitHub/X @__madhuryaaa/Instagram/email),
  embedded tweet (react-tweet), full SEO (OG + Twitter cards) + branded og-image.png,
  fixed experience-date overlap (SDE-I Jul2022–Jun2024, SDE-II Jul2024–Aug2025).
- **2026-09-13 overhaul** (large Claude Code session, ~15 commits across 5 PRs) ✅:
  - Real icons (Icon.tsx) replacing emoji-as-icons everywhere; working mobile hamburger
    nav; real blog posts replacing "coming soon" placeholders; corrected degree/pivot story
    (B.Tech is Civil Engineering, not CS; pivoted to software engineering after graduating,
    not "backend engineering").
  - Page reordered to Hero → About → Experience → Projects → Skills → Writing → Now.
  - Experience rebuilt as a compact LinkedIn-style timeline (no boxes, dot+line, hover-grow)
    covering Kendriya Vidyalaya → Gayatri Vidya Mandir, Charnal → IIT Roorkee → ClearTax ×2 →
    Olyv, each work entry with one terse outcome+tech line (not the old multi-bullet
    mechanism explanations that duplicated Projects).
  - About rewritten around character (curiosity, standards, the personal throughline) rather
    than restating the career history now owned by Experience.
  - Skills collapsed to a single "Core stack" row (Java, Spring Boot, Kafka, Redis,
    PostgreSQL, AWS) instead of 6 categorized tag-cards.
  - Projects: merged the two Olyv cards into one case study, rewrote all descriptions to read
    as solved engineering problems (not internal metrics, not duplicating Experience); added
    a 5th "This Portfolio" card with real Code/Live links (the only project that has them —
    the employer projects are proprietary).
  - New "Now" section (06 — Beyond work): placeholder copy on what he's exploring / an
    off-hours interest / an engineering-philosophy line — **still needs Shyam's own review**,
    it's inferred/drafted, not confirmed fact.
  - Added photos (Hero/About/Now) — see tooling gotchas above for the saga of why this took
    5 iterations (wrong extension → runtime fs check unreliable on Vercel → next/image
    optimization failing silently → alias not auto-updating).

## Remaining roadmap
- Phase 3 — PostgreSQL (Neon) + JPA persistence (replace hardcoded ContentService)
- Phase 4 — Admin panel + JWT auth (write posts from a UI)
- Phase 5 — Redis (Upstash) view counts/likes + contact form (save+email) + full-text search
- Phase 6 — polish, custom domain, more blog posts

## Known cleanup TODOs (harmless, do anytime)
- Delete stray Vercel project `portfolio-fullstack1` + auto-created PRIVATE repo `portfolio-fullstack1`
  (an earlier vercel.com/new flow created these; the working setup is the CLI-deployed `frontend` project).
- **New (2026-09-13): delete/disconnect the stray Vercel project `portfolio-fullstack`**
  (different from `portfolio-fullstack1` above) — created by an accidental `vercel --prod`
  run from the repo root, is now Git-connected to the main repo and will silently
  auto-deploy (and burn build minutes) on every future push. Not the live site; safe to
  remove the Git connection or delete the project entirely.
- Set up proper Git integration on the real `frontend` Vercel project (Settings → Connect
  Git Repository, Root Directory = `frontend`) so deploy + the `shyamtiwari.vercel.app`
  alias both update automatically on push to `main` — ends the manual `vercel --prod` +
  `vercel alias set` dance documented above.
- Review/personalize the "Now" section copy (`frontend/src/components/Now.tsx`) — it's
  Claude-drafted placeholder text about what Shyam is exploring / off-hours interests /
  philosophy, not confirmed by him.
- Fix overlapping experience dates on the STATIC site (`~/portfolio/index.html`) and in the résumé PDF
  (`~/Downloads/Shyam_Tiwari.pdf`, edit in Overleaf/source) — same Apr2024/Jul2024 overlap.
