import Reveal from "./Reveal";
import Icon, { type IconName } from "./Icon";

const qualities: { icon: IconName; title: string }[] = [
  { icon: "network", title: "Systems thinker" },
  { icon: "shield", title: "Reliability-obsessed" },
  { icon: "trending-up", title: "Ownership-driven" },
  { icon: "search", title: "Deep debugger" },
];

const stats = [
  { num: "4+", lbl: "Years of experience" },
  { num: "500K", lbl: "Requests/hour served" },
  { num: "2 cos", lbl: "Olyv · ClearTax" },
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
                I studied B.Tech in Civil Engineering at IIT Roorkee (2018–2022) — the same
                appetite for hard problems that got me an All-India Rank of 3133 in JEE Mains.
                After graduating, I pivoted into software engineering, and that appetite now goes
                into distributed systems.
              </p>
              <p style={{ color: "var(--muted)", fontSize: "1.05rem" }}>
                I started at ClearTax in 2022 — first leading the end-to-end build of a financing
                product and its repayment module, then moving into observability and workflow
                orchestration for the Supply Chain team. Since September 2025, I&apos;ve been an
                SDE-II at Olyv, building the KYC validation platform that lending partners onboard
                onto.
              </p>
              <p style={{ color: "var(--muted)", fontSize: "1.05rem" }}>
                What hasn&apos;t changed across either company: I care about systems that stay
                correct under load, and code that the next engineer can actually reason about.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {qualities.map((q) => (
                <div
                  key={q.title}
                  className="card"
                  style={{ padding: "16px 18px", display: "flex", alignItems: "center", gap: 12 }}
                >
                  <span
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 9,
                      background: "rgba(124, 92, 255, 0.12)",
                      color: "var(--accent)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon name={q.icon} size={17} />
                  </span>
                  <h4 style={{ fontSize: "1rem", margin: 0 }}>{q.title}</h4>
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
