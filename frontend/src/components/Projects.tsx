import type { Project } from "@/lib/api";
import Reveal from "./Reveal";

const companyIcon: Record<string, string> = {
  Olyv: "🛂",
  ClearTax: "💳",
};

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" style={{ padding: "96px 0" }}>
      <div className="container-x">
        <Reveal>
          <div style={{ marginBottom: 48 }}>
            <div className="sec-kicker">04 — What I&apos;ve built</div>
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
                    <span style={{ fontSize: "1.8rem" }}>{companyIcon[p.company] ?? "🧩"}</span>
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
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
