# Portfolio Project — Context / Handoff

_Paste this into a new session to resume. Last updated: 2026-07-19._

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
- **Fixed text** (hero, about, skills, experience, socials): `frontend/src/components/*.tsx`
- **Projects & blog posts** (API data, currently hardcoded): `backend/src/main/java/com/shyam/portfolio/service/ContentService.java`
- **SEO/metadata + OG image:** `frontend/src/app/layout.tsx` + `frontend/public/og-image.png`
- **Featured tweets:** `frontend/src/components/LatestThoughts.tsx` (add tweet IDs to the array)

## How to deploy after edits
**Frontend** (from `~/portfolio-fullstack/frontend`):
```
vercel --prod --yes --scope shyam-portfolio2 \
  -b NEXT_PUBLIC_API_BASE=https://portfolio-api-7cmx.onrender.com \
  -e NEXT_PUBLIC_API_BASE=https://portfolio-api-7cmx.onrender.com
# then re-point the clean URL to the new deployment:
vercel alias set <new-deployment-url> shyamtiwari.vercel.app --scope shyam-portfolio2
```
**Backend:** `cd ~/portfolio-fullstack && git add -A && git commit -m .. && git push` → Render auto-rebuilds.

## Env / tooling gotchas
- Git identity is PERSONAL: `shyamtiwari1 <shyamtiwari025@gmail.com>` — NOT company `shyam-olyv`.
- JDK 21 is keg-only at `/opt/homebrew/opt/openjdk@21/bin/java`. Default `java` is still Java 8 — to run the jar you MUST call the JDK21 binary directly (`JAVA_HOME` alone is not enough).
- Node 26, Maven 3.9. `gh` CLI authed as shyamtiwari1. Vercel CLI authed as `shyamtiwari025-1658`, team `shyam-portfolio2`.
- Vercel project id `prj_zIMoFzpXqzkvKVmC3dV3DVHwwxZ1`, team `team_EU4ZRKS2JSyqIhybdBRU5O5P` (project name `frontend`).
- Free tiers: Render backend SLEEPS after 15 min idle (~30s cold start) — normal.

## Done so far
- Phase 0 ✅ tooling + monorepo scaffold
- Phase 1 ✅ Spring Boot API (projects/posts/health, in-memory) live on Render (Docker + render.yaml)
- Phase 2 ✅ Next.js frontend live on Vercel, consumes the API
- Extras ✅ clean URL alias, social buttons (LinkedIn/GitHub/X @__madhuryaaa/Instagram/email),
  embedded tweet (react-tweet), full SEO (OG + Twitter cards) + branded og-image.png,
  fixed experience-date overlap (SDE-I Jul2022–Jun2024, SDE-II Jul2024–Aug2025).

## Remaining roadmap
- Phase 3 — PostgreSQL (Neon) + JPA persistence (replace hardcoded ContentService)
- Phase 4 — Admin panel + JWT auth (write posts from a UI)
- Phase 5 — Redis (Upstash) view counts/likes + contact form (save+email) + full-text search
- Phase 6 — polish, custom domain, more blog posts

## Known cleanup TODOs (harmless, do anytime)
- Delete stray Vercel project `portfolio-fullstack1` + auto-created PRIVATE repo `portfolio-fullstack1`
  (an earlier vercel.com/new flow created these; the working setup is the CLI-deployed `frontend` project).
- Fix overlapping experience dates on the STATIC site (`~/portfolio/index.html`) and in the résumé PDF
  (`~/Downloads/Shyam_Tiwari.pdf`, edit in Overleaf/source) — same Apr2024/Jul2024 overlap.
