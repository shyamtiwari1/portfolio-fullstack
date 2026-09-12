import Reveal from "./Reveal";

const coreStack = ["Java", "Spring Boot", "Kafka", "Redis", "PostgreSQL", "AWS"];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "96px 0" }}>
      <div className="container-x">
        <Reveal>
          <div style={{ marginBottom: 32 }}>
            <div className="sec-kicker">04 — My toolkit</div>
            <h2 className="sec-title">Core stack</h2>
          </div>
        </Reveal>
        <Reveal delay={60}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {coreStack.map((s) => (
              <span
                key={s}
                className="mono"
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "var(--text)",
                  background: "var(--bg-soft)",
                  border: "1px solid var(--border)",
                  padding: "10px 18px",
                  borderRadius: 10,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
