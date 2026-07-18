import Reveal from "./Reveal";

const groups = [
  { icon: "⚙️", title: "Languages", items: ["Java", "Python", "SQL"] },
  { icon: "🧩", title: "Frameworks", items: ["Spring Boot", "Play", "Django"] },
  { icon: "🔄", title: "Distributed & Async", items: ["Kafka", "Temporal", "Redis"] },
  { icon: "🗄️", title: "Data Stores", items: ["PostgreSQL", "MongoDB", "Redis"] },
  { icon: "☁️", title: "Cloud & Infra", items: ["AWS", "Docker"] },
  { icon: "📊", title: "Observability", items: ["Grafana", "Prometheus", "Coralogix"] },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "96px 0" }}>
      <div className="container-x">
        <Reveal>
          <div style={{ marginBottom: 48 }}>
            <div className="sec-kicker">02 — My toolkit</div>
            <h2 className="sec-title">Skills &amp; technologies</h2>
          </div>
        </Reveal>
        <div
          className="skills-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
        >
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={Math.min(i, 4) * 50}>
              <div className="card" style={{ padding: 26 }}>
                <h3 style={{ fontSize: "1.05rem", marginBottom: 16 }}>
                  <span style={{ marginRight: 10, fontSize: "1.3rem" }}>{g.icon}</span>
                  {g.title}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {g.items.map((it) => (
                    <span key={it} className="chip">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
