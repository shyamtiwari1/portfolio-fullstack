import Image from "next/image";
import Reveal from "./Reveal";
import Socials from "./Socials";

const HERO_PHOTO_PATH = "/hero-photo.jpeg";

export default function Hero() {
  return (
    <header
      id="home"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 66 }}
    >
      <div className="container-x">
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr auto",
            gap: 48,
            alignItems: "center",
          }}
        >
        <div>
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
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.3rem)",
              fontWeight: 600,
              color: "var(--text)",
              marginBottom: 6,
            }}
          >
            Building things, chasing new experiences, getting a little better every day.
          </p>
          <p
            className="mono"
            style={{ fontSize: "1rem", color: "var(--accent-2)", marginBottom: 34, letterSpacing: "0.3px" }}
          >
            Code • Music • Gym • Roads • Repeat.
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
        <Reveal delay={300}>
          <div style={{ marginTop: 36 }}>
            <Socials />
          </div>
        </Reveal>
        </div>
        <Reveal delay={60}>
          <Image
            src={HERO_PHOTO_PATH}
            alt="Shyam Tiwari"
            width={280}
            height={280}
            style={{
              width: 280,
              height: 280,
              borderRadius: 24,
              objectFit: "cover",
              border: "1px solid var(--border)",
            }}
            priority
            unoptimized
          />
        </Reveal>
        </div>
      </div>
    </header>
  );
}
