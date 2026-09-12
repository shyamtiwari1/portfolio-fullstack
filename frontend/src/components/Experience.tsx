import Reveal from "./Reveal";

type Entry = {
  kind: "education" | "work";
  heading: string;
  org: string;
  date: string;
};

const timeline: Entry[] = [
  { kind: "work", heading: "SDE-II", org: "Olyv India", date: "Sep 2025 — Present" },
  { kind: "work", heading: "SDE-II, Backend", org: "ClearTax", date: "Jul 2024 — Aug 2025" },
  { kind: "work", heading: "SDE-I, Backend", org: "ClearTax", date: "Jul 2022 — Jun 2024" },
  { kind: "education", heading: "B.Tech, Civil Engineering", org: "IIT Roorkee", date: "Jul 2018 — Apr 2022" },
  { kind: "education", heading: "Higher Secondary", org: "Gayatri Vidya Mandir, Charnal, Sehore", date: "2015 — 2017" },
  { kind: "education", heading: "Schooling", org: "Kendriya Vidyalaya, Sehore", date: "2005 — 2015" },
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
              <div style={{ position: "relative", marginBottom: i === timeline.length - 1 ? 0 : 18 }}>
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
                <div className="card" style={{ padding: "18px 24px" }}>
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
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
