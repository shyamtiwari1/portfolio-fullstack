import type { Project } from "@/lib/api";
import Reveal from "./Reveal";
import Icon, { type IconName } from "./Icon";

const companyIcon: Record<string, IconName> = {
  Olyv: "shield",
  ClearTax: "card",
  Personal: "user",
};

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" style={{ padding: "96px 0" }}>
      <div className="container-x">
        <Reveal>
          <div style={{ marginBottom: 48 }}>
            <div className="sec-kicker">03 — What I&apos;ve built</div>
            <h2 className="sec-title">Featured work</h2>
            <p className="mono" style={{ color: "var(--faint)", fontSize: "0.8rem", marginTop: 8 }}>
              ↳ fetched live from the Spring Boot API
            </p>
          </div>
        </Reveal>

        {projects.length === 0 ? (
          <p style={{ color: "var(--muted)" }}>
            Projects are loading from the API (the free backend may be waking up — refresh in ~30s).
          </p>
        ) : (
          <div
            className="proj-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 22 }}
          >
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={Math.min(i, 4) * 50}>
                <div className="card" style={{ padding: 28, height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                    <span
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: "rgba(124, 92, 255, 0.12)",
                        color: "var(--accent)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon name={companyIcon[p.company] ?? "briefcase"} size={19} />
                    </span>
                    <span className="mono" style={{ fontSize: "0.72rem", color: "var(--faint)", border: "1px solid var(--border)", padding: "3px 8px", borderRadius: 6 }}>
                      {p.company}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.2rem", marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: "0.94rem", marginBottom: 18, flexGrow: 1 }}>
                    {p.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {p.techStack.map((t) => (
                      <span
                        key={t}
                        className="mono"
                        style={{ fontSize: "0.74rem", color: "var(--accent-2)", background: "rgba(34,211,238,0.08)", padding: "3px 9px", borderRadius: 6 }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {(p.repoUrl || p.liveUrl) && (
                    <div style={{ display: "flex", gap: 16, marginTop: 18, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
                      {p.repoUrl && (
                        <a
                          href={p.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mono"
                          style={{ color: "var(--text)", fontSize: "0.85rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6 }}
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                          </svg>
                          Code
                        </a>
                      )}
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mono"
                          style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6 }}
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <path d="M15 3h6v6" />
                            <path d="M10 14 21 3" />
                          </svg>
                          Live
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
