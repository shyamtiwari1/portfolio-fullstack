import Reveal from "./Reveal";

type Entry = {
  kind: "education" | "work";
  heading: string;
  org: string;
  date: string;
  summary?: string;
};

const timeline: Entry[] = [
  {
    kind: "work",
    heading: "SDE-II",
    org: "Olyv India",
    date: "Sep 2025 — Present",
    summary: "Built a KYC validation platform handling 500K+ requests/hour at <50ms P99 — Java, Spring Boot, Redis.",
  },
  {
    kind: "work",
    heading: "SDE-II, Backend",
    org: "ClearTax",
    date: "Jul 2024 — Aug 2025",
    summary: "Cut production diagnosis time 92% with full-stack observability — Grafana, Prometheus, Coralogix.",
  },
  {
    kind: "work",
    heading: "SDE-I, Backend",
    org: "ClearTax",
    date: "Jul 2022 — Jun 2024",
    summary: "Took a financing product to $2M+ ARR and built its repayment engine — Java, Spring Boot, PostgreSQL.",
  },
  { kind: "education", heading: "B.Tech, Civil Engineering", org: "IIT Roorkee", date: "Jul 2018 — Apr 2022" },
  { kind: "education", heading: "Higher Secondary", org: "Gayatri Vidya Mandir, Charnal, Sehore", date: "2015 — 2017" },
  { kind: "education", heading: "Schooling", org: "Kendriya Vidyalaya, Sehore", date: "2005 — 2015" },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "96px 0" }}>
      <div className="container-x">
        <Reveal>
          <div style={{ marginBottom: 24 }}>
            <div className="sec-kicker">02 — Where I&apos;ve been</div>
            <h2 className="sec-title">Experience</h2>
          </div>
        </Reveal>
        <Reveal delay={40}>
          <div style={{ position: "relative", paddingLeft: 20, maxWidth: 680 }}>
            <div
              style={{
                position: "absolute",
                left: 4,
                top: 5,
                bottom: 5,
                width: 1,
                background: "var(--border)",
              }}
            />
            {timeline.map((e) => (
              <div
                key={e.heading + e.date}
                className="journey-row"
                style={{ position: "relative", padding: "7px 12px 7px 0" }}
              >
                <span
                  className="journey-dot"
                  style={{
                    position: "absolute",
                    left: -20,
                    top: e.summary ? 14 : "50%",
                    width: 9,
                    height: 9,
                    borderRadius: "50%",
                    background: e.kind === "education" ? "var(--accent-2)" : "var(--accent)",
                  }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 6 }}>
                  <span style={{ fontSize: "0.92rem" }}>
                    {e.heading} ·{" "}
                    <span style={{ color: e.kind === "education" ? "var(--accent-2)" : "var(--accent)" }}>
                      {e.org}
                    </span>
                  </span>
                  <span className="mono" style={{ fontSize: "0.76rem", color: "var(--faint)" }}>
                    {e.date}
                  </span>
                </div>
                {e.summary && (
                  <div style={{ fontSize: "0.82rem", color: "var(--muted)", marginTop: 4 }}>{e.summary}</div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
