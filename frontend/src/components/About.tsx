import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Reveal from "./Reveal";
import Icon, { type IconName } from "./Icon";

const PHOTO_PATH = "/profile.jpeg";
const hasPhoto = fs.existsSync(path.join(process.cwd(), "public", PHOTO_PATH));

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
              {hasPhoto && (
                <Image
                  src={PHOTO_PATH}
                  alt="Shyam Tiwari"
                  width={120}
                  height={120}
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "1px solid var(--border)",
                    marginBottom: 8,
                  }}
                />
              )}
              <p style={{ color: "var(--muted)", fontSize: "1.05rem" }}>
                I&apos;ve always been more interested in why something works than in getting it
                done the fastest way — the instinct that pushed me to an All-India Rank of 3133 in
                JEE Mains, and later pulled me sideways out of a Civil Engineering degree into
                software. I don&apos;t mind taking the long way round if it means actually
                understanding the thing.
              </p>
              <p style={{ color: "var(--muted)", fontSize: "1.05rem" }}>
                I&apos;m patient with hard problems and impatient with sloppy ones — I&apos;d
                rather lose a day getting a design right than ship something I&apos;ll have to
                apologize for later. Ownership isn&apos;t a checkbox for me; if my name&apos;s on
                it, I want to be the one who understands it best.
              </p>
              <p style={{ color: "var(--muted)", fontSize: "1.05rem" }}>
                Outside of it, I&apos;m chasing the same kind of improvement everywhere else — a
                barbell, a road trip, a new song to learn. Four years in, that&apos;s still the
                throughline: build things, get a little better at them, repeat.
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
