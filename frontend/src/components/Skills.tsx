import Reveal from "./Reveal";
import Icon, { type IconName } from "./Icon";

const groups: { icon: IconName; title: string; items: string[] }[] = [
  { icon: "code", title: "Languages", items: ["Java", "Python", "SQL"] },
  { icon: "layers", title: "Frameworks", items: ["Spring Boot", "Play", "Django"] },
  { icon: "swap", title: "Distributed & Async", items: ["Kafka", "Temporal", "Redis"] },
  { icon: "database", title: "Data Stores", items: ["PostgreSQL", "MongoDB", "Redis"] },
  { icon: "cloud", title: "Cloud & Infra", items: ["AWS", "GCP", "Docker"] },
  { icon: "bar-chart", title: "Observability", items: ["Grafana", "Prometheus", "Coralogix", "OpenSearch", "Kibana"] },
];

function SkillCard({ group: g }: { group: (typeof groups)[number] }) {
  return (
    <div className="card" style={{ padding: 26 }}>
      <h3 style={{ fontSize: "1.05rem", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
        <span
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: "rgba(34, 211, 238, 0.12)",
            color: "var(--accent-2)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon name={g.icon} size={16} />
        </span>
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
  );
}

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
          {groups.slice(0, 3).map((g, i) => (
            <Reveal key={g.title} delay={i * 50}>
              <SkillCard group={g} />
            </Reveal>
          ))}
        </div>
        <div
          className="skills-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, marginTop: 20 }}
        >
          {groups.slice(3, 5).map((g, i) => (
            <Reveal key={g.title} delay={i * 50}>
              <SkillCard group={g} />
            </Reveal>
          ))}
        </div>
        <div style={{ marginTop: 20 }}>
          <Reveal>
            <SkillCard group={groups[5]} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
