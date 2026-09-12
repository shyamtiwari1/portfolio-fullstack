import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Reveal from "./Reveal";

const NOW_PHOTO_PATH = "/now-photo.jpeg";
const hasNowPhoto = fs.existsSync(path.join(process.cwd(), "public", NOW_PHOTO_PATH));

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
        <div
          className="now-grid"
          style={{
            display: "grid",
            gridTemplateColumns: hasNowPhoto ? "auto 1fr" : "1fr",
            gap: 32,
            alignItems: "start",
          }}
        >
          {hasNowPhoto && (
            <Reveal delay={20}>
              <Image
                src={NOW_PHOTO_PATH}
                alt="Shyam Tiwari"
                width={160}
                height={160}
                style={{
                  width: 160,
                  height: 160,
                  borderRadius: 16,
                  objectFit: "cover",
                  border: "1px solid var(--border)",
                }}
              />
            </Reveal>
          )}
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
      </div>
    </section>
  );
}
