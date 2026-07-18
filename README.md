# Portfolio — Full-Stack

A full-stack personal portfolio & blog. React frontend, Spring Boot backend, PostgreSQL, Redis — built to be production-shaped and horizontally scalable.

**Author:** Shyam Tiwari · Backend Software Engineer (SDE-II @ Olyv, ex-ClearTax, IIT Roorkee)

---

## Architecture

```
  React / Next.js frontend ──HTTPS/REST──▶ Spring Boot API ──▶ PostgreSQL
   (Vercel · global CDN)                    (Render)           (Neon)
        │                                       │
   Admin panel (JWT)                            └──▶ Redis (Upstash)
   Blog · Projects · Contact                         views · likes · cache
```

- **Frontend** is static/SSG where possible → served from a CDN, fast and cheap to scale.
- **Backend** is stateless (JWT, no server sessions) → scales horizontally behind a load balancer.
- **Redis** absorbs read-heavy traffic (post lists, view counts) with atomic counters.
- **PostgreSQL** holds durable content; full-text search via `tsvector`.

## Tech stack

| Layer | Tech |
|---|---|
| Frontend | Next.js 16, React 19, TypeScript, Tailwind CSS |
| Backend | Spring Boot 4, Java 21, Maven |
| Database | PostgreSQL (Neon) |
| Cache | Redis (Upstash) |
| Auth | JWT (Spring Security) |
| Hosting | Vercel (frontend) · Render (backend) |

## Repo layout

```
portfolio-fullstack/
├── frontend/   # Next.js + Tailwind (React)
└── backend/    # Spring Boot REST API (Java 21)
```

## API (planned)

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| GET | `/api/posts` | public | List posts (paginated, Redis-cached) |
| GET | `/api/posts/{slug}` | public | One post (+ Redis view count) |
| POST | `/api/posts/{slug}/like` | public | Like (Redis atomic counter) |
| GET | `/api/projects` | public | List projects |
| GET | `/api/search?q=` | public | Full-text search |
| POST | `/api/contact` | public | Save message + email |
| POST | `/api/auth/login` | public | Admin login → JWT |
| POST/PUT/DELETE | `/api/posts`, `/api/projects` | JWT | Admin CRUD |

## Local development

**Backend** (needs JDK 21):
```bash
cd backend
JAVA_HOME=/opt/homebrew/opt/openjdk@21 ./mvnw spring-boot:run
# → http://localhost:8080
```

**Frontend** (needs Node 20+):
```bash
cd frontend
npm install
npm run dev
# → http://localhost:3000
```

## Build roadmap

- [x] **Phase 0** — Tooling + monorepo scaffold
- [x] **Phase 1** — Spring Boot API skeleton, live on Render → https://portfolio-api-7cmx.onrender.com
- [ ] **Phase 2** — Next.js frontend, live on Vercel
- [ ] **Phase 3** — PostgreSQL + JPA persistence
- [ ] **Phase 4** — Admin panel + JWT auth
- [ ] **Phase 5** — Redis + contact form + search
- [ ] **Phase 6** — Polish, SEO, custom domain, first blog post
