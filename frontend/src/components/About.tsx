import Reveal from "./Reveal";

const qualities = [
  { icon: "🧠", title: "Systems thinker", desc: "The right pattern — Strategy, Factory, Template Method — so systems stay extensible, not clever." },
  { icon: "🛡️", title: "Reliability-obsessed", desc: "Redis distributed locks, idempotency, AES-encrypted metadata — edge cases handled before they page me." },
  { icon: "🚀", title: "Ownership-driven", desc: "I've taken products from a blank page to production, owning design docs, LLDs and delivery." },
  { icon: "🔍", title: "Deep debugger", desc: "Structured error attribution and full-stack observability (Grafana, Prometheus, Coralogix)." },
];

const stats = [
  { num: "4+", lbl: "Years of experience" },
  { num: "500K", lbl: "Requests/hour served" },
  { num: "3 cos", lbl: "Olyv · ClearTax · SMS" },
  { num: "IIT", lbl: "Roorkee, B.Tech" },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "96px 0" }}>
      <div className="container-x">
        <Reveal>
          <div style={{ marginBottom: 48 }}>
            <div className="sec-kicker">01 — Who I am</div>
            <h2 className="sec-title">About me</h2>
          </div>
        </Reveal>
        <div
          style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "start" }}
          className="about-grid"
        >
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <p style={{ color: "var(--muted)", fontSize: "1.05rem" }}>
                I&apos;m a backend engineer with 4+ years of experience building the systems that
                power fintech products — lending platforms, KYC pipelines, repayment engines and
                supply-chain tooling.
              </p>
              <p style={{ color: "var(--muted)", fontSize: "1.05rem" }}>
                Currently an SDE-II at Olyv, where I built a high-throughput KYC data validation
                service handling 500K requests/hour with a pluggable, lender-configurable design.
                Before that, at ClearTax, I led the end-to-end build of a financing product and its
                repayment module.
              </p>
              <p style={{ color: "var(--muted)", fontSize: "1.05rem" }}>
                I studied B.Tech at IIT Roorkee and cracked JEE with an All-India Rank of 3133
                (Mains). The same appetite for hard problems now goes into distributed systems.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {qualities.map((q) => (
                <div key={q.title} className="card" style={{ padding: "16px 18px" }}>
                  <h4 style={{ fontSize: "1rem", marginBottom: 4 }}>
                    <span style={{ marginRight: 8 }}>{q.icon}</span>
                    {q.title}
                  </h4>
                  <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{q.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginTop: 52 }}
            className="stats-grid"
          >
            {stats.map((s) => (
              <div key={s.lbl} className="card" style={{ textAlign: "center", padding: "26px 14px" }}>
                <div className="accent-text" style={{ fontSize: "2rem", fontWeight: 800 }}>
                  {s.num}
                </div>
                <div style={{ color: "var(--muted)", fontSize: "0.82rem", marginTop: 4 }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
