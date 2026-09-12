import Reveal from "./Reveal";

type Entry = {
  kind: "education" | "work";
  heading: string;
  org: string;
  date: string;
  points: string[];
};

const timeline: Entry[] = [
  {
    kind: "work",
    heading: "SDE-II",
    org: "Olyv India",
    date: "Sep 2025 — Present",
    points: [
      "Designed & built a high-throughput KYC data validation service processing 500K requests/hour, enabling lender-specific validation policies with zero code changes.",
      "Architected a pluggable validation framework using Strategy, Factory & Template Method patterns over a common processing pipeline.",
      "Solved race conditions in lender-loan onboarding with Redis distributed locks and idempotent processing.",
      "Implemented AES-encrypted metadata handling & structured error attribution across multi-service KYC workflows.",
    ],
  },
  {
    kind: "work",
    heading: "SDE-II, Backend",
    org: "ClearTax",
    date: "Jul 2024 — Aug 2025",
    points: [
      "Built customer-centric features across the Supply Chain suite, authoring detailed LLDs and design docs.",
      "Implemented end-to-end observability across microservices (Grafana, Prometheus, Coralogix), cutting diagnosis time.",
      "Engineered the Reports & Insights segment using multiple Temporal child workflows for scalable execution.",
    ],
  },
  {
    kind: "work",
    heading: "SDE-I, Backend",
    org: "ClearTax",
    date: "Jul 2022 — Jun 2024",
    points: [
      "Led end-to-end development of the company's financing product from concept to production.",
      "Independently built the repayment module with a focus on performance and scalable design.",
      "Engineered a mock-server system to simulate third-party integrations in staging.",
    ],
  },
  {
    kind: "education",
    heading: "B.Tech, Computer Science",
    org: "IIT Roorkee",
    date: "Jul 2018 — Apr 2022",
    points: [
      "AIR 3133 in JEE Mains and AIR 4293 in JEE Advanced (2018).",
      "Co-head, Child Rights and You (CRY) — IIT Roorkee chapter · Cell Secretary, Administration, NSS IIT Roorkee.",
    ],
  },
  {
    kind: "education",
    heading: "Higher Secondary",
    org: "Gayatri Vidya Mandir, Charnal, Sehore",
    date: "2015 — 2017",
    points: [],
  },
  {
    kind: "education",
    heading: "Schooling",
    org: "Kendriya Vidyalaya, Sehore",
    date: "2005 — 2015",
    points: [],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "96px 0" }}>
      <div className="container-x">
        <Reveal>
          <div style={{ marginBottom: 48 }}>
            <div className="sec-kicker">03 — Where I&apos;ve been</div>
            <h2 className="sec-title">My journey</h2>
          </div>
        </Reveal>
        <div style={{ position: "relative", paddingLeft: 28 }}>
          <div
            style={{
              position: "absolute",
              left: 6,
              top: 8,
              bottom: 8,
              width: 2,
              background: "var(--border)",
            }}
          />
          {timeline.map((e, i) => (
            <Reveal key={e.heading + e.date}>
              <div style={{ position: "relative", marginBottom: i === timeline.length - 1 ? 0 : 32 }}>
                <span
                  style={{
                    position: "absolute",
                    left: -28,
                    top: 6,
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: e.kind === "education" ? "var(--accent-2)" : "var(--accent)",
                    boxShadow: "0 0 0 4px var(--bg)",
                  }}
                />
                <div className="card" style={{ padding: 24 }}>
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
                      {e.heading} ·{" "}
                      <span style={{ color: e.kind === "education" ? "var(--accent-2)" : "var(--accent)" }}>
                        {e.org}
                      </span>
                    </div>
                    <span className="mono" style={{ fontSize: "0.82rem", color: "var(--faint)" }}>
                      {e.date}
                    </span>
                  </div>
                  {e.points.length > 0 && (
                    <ul style={{ listStyle: "none", marginTop: 14, display: "flex", flexDirection: "column", gap: 9 }}>
                      {e.points.map((p, i2) => (
                        <li key={i2} style={{ color: "var(--muted)", paddingLeft: 22, position: "relative", fontSize: "0.98rem" }}>
                          <span style={{ position: "absolute", left: 0, color: "var(--accent-2)" }}>▹</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
