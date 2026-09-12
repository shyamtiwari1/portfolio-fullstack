import Reveal from "./Reveal";

const points = [
  "Currently digging into event-driven patterns beyond request/response — event sourcing, CQRS, the places where \"just add a queue\" stops being enough.",
  "Off-hours: music, the gym, and long rides — same discipline that keeps a system running keeps a routine running.",
  "A quiet philosophy: build the thing you'd want to inherit — legible, boring where it should be, and easy to delete.",
];

export default function Now() {
  return (
    <section id="now" style={{ padding: "96px 0" }}>
      <div className="container-x">
        <Reveal>
          <div style={{ marginBottom: 28 }}>
            <div className="sec-kicker">06 — Beyond work</div>
            <h2 className="sec-title">Now</h2>
          </div>
        </Reveal>
        <Reveal delay={40}>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, maxWidth: 680 }}>
            {points.map((p, i) => (
              <li key={i} style={{ color: "var(--muted)", paddingLeft: 22, position: "relative", fontSize: "1rem" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--accent-2)" }}>▹</span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
