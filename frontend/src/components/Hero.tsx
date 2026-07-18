import Reveal from "./Reveal";

export default function Hero() {
  return (
    <header
      id="home"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 66 }}
    >
      <div className="container-x">
        <Reveal>
          <div
            className="mono"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: "0.85rem",
              color: "var(--muted)",
              border: "1px solid var(--border)",
              background: "var(--bg-soft)",
              padding: "6px 14px",
              borderRadius: 999,
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 10px #22c55e",
              }}
            />
            Available for backend / platform roles
          </div>
        </Reveal>
        <Reveal delay={60}>
          <h1
            style={{
              fontSize: "clamp(2.6rem, 7vw, 4.6rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              marginBottom: 20,
            }}
          >
            Hi, I&apos;m <span className="accent-text">Shyam Tiwari</span>.
            <br />I build systems that scale.
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p
            style={{
              fontSize: "clamp(1.15rem, 3vw, 1.5rem)",
              fontWeight: 600,
              color: "var(--muted)",
              marginBottom: 22,
            }}
          >
            Backend Software Engineer · SDE-II @ Olyv · ex-ClearTax · IIT Roorkee
          </p>
        </Reveal>
        <Reveal delay={180}>
          <p style={{ fontSize: "1.1rem", color: "var(--muted)", maxWidth: 620, marginBottom: 34 }}>
            I design and build high-throughput, reliable distributed systems — the kind that
            quietly process hundreds of thousands of requests an hour without breaking. Deep in
            Java &amp; Spring Boot, event-driven architecture, and clean, pattern-driven design.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#projects" className="btn btn-primary">
              View my work →
            </a>
            <a
              href="https://www.linkedin.com/in/shyam-tiwari-b8018a173"
              target="_blank"
              className="btn btn-ghost"
            >
              in · LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
