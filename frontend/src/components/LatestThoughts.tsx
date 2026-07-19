import { Tweet } from "react-tweet";
import Reveal from "./Reveal";

// Hand-picked tweet IDs to feature. Add more IDs here as you post.
const TWEET_IDS = ["2078700437847548183"];

export default function LatestThoughts() {
  return (
    <section id="thoughts" style={{ padding: "96px 0" }}>
      <div className="container-x">
        <Reveal>
          <div style={{ marginBottom: 40 }}>
            <div className="sec-kicker">05 — On X</div>
            <h2 className="sec-title">Latest thoughts</h2>
            <p className="mono" style={{ color: "var(--faint)", fontSize: "0.8rem", marginTop: 8 }}>
              ↳ live from{" "}
              <a href="https://x.com/__madhuryaaa" target="_blank" style={{ color: "var(--accent)" }}>
                @__madhuryaaa
              </a>
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div
            data-theme="dark"
            style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center" }}
          >
            {TWEET_IDS.map((id) => (
              <div key={id} style={{ maxWidth: 420, width: "100%" }}>
                <Tweet id={id} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
