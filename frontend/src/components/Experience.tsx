import Reveal from "./Reveal";

const jobs = [
  {
    role: "SDE-II",
    company: "Olyv India",
    date: "Sep 2025 — Present",
    points: [
      "Designed & built a high-throughput KYC data validation service processing 500K requests/hour, enabling lender-specific validation policies with zero code changes.",
      "Architected a pluggable validation framework using Strategy, Factory & Template Method patterns over a common processing pipeline.",
      "Solved race conditions in lender-loan onboarding with Redis distributed locks and idempotent processing.",
      "Implemented AES-encrypted metadata handling & structured error attribution across multi-service KYC workflows.",
    ],
  },
  {
    role: "SDE-II, Backend",
    company: "ClearTax",
    date: "Apr 2024 — Aug 2025",
    points: [
      "Built customer-centric features across the Supply Chain suite, authoring detailed LLDs and design docs.",
      "Implemented end-to-end observability across microservices (Grafana, Prometheus, Coralogix), cutting diagnosis time.",
      "Engineered the Reports & Insights segment using multiple Temporal child workflows for scalable execution.",
    ],
  },
  {
    role: "SDE-I, Backend",
    company: "ClearTax",
    date: "Jul 2022 — Jul 2024",
    points: [
      "Led end-to-end development of the company's financing product from concept to production.",
      "Independently built the repayment module with a focus on performance and scalable design.",
      "Engineered a mock-server system to simulate third-party integrations in staging.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "School of Market Studies",
    date: "May 2021 — Jul 2021",
    points: [
      "Built a full-stack stock-analysis platform in Django (MVT), tested across 500+ stocks with integrated algorithms.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "96px 0" }}>
      <div className="container-x">
        <Reveal>
          <div style={{ marginBottom: 48 }}>
            <div className="sec-kicker">03 — Where I&apos;ve worked</div>
            <h2 className="sec-title">Experience</h2>
          </div>
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {jobs.map((j) => (
            <Reveal key={j.role + j.date}>
              <div
                className="card"
                style={{ padding: 24, borderLeft: "3px solid var(--accent)" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 6,
                    alignItems: "baseline",
                  }}
                >
                  <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>
                    {j.role} ·{" "}
                    <span style={{ color: "var(--accent)" }}>{j.company}</span>
                  </div>
                  <span className="mono" style={{ fontSize: "0.82rem", color: "var(--faint)" }}>
                    {j.date}
                  </span>
                </div>
                <ul style={{ listStyle: "none", marginTop: 14, display: "flex", flexDirection: "column", gap: 9 }}>
                  {j.points.map((p, i) => (
                    <li key={i} style={{ color: "var(--muted)", paddingLeft: 22, position: "relative", fontSize: "0.98rem" }}>
                      <span style={{ position: "absolute", left: 0, color: "var(--accent-2)" }}>▹</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
