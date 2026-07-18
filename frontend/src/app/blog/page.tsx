import Link from "next/link";
import { getPosts } from "@/lib/api";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Blog — Shyam Tiwari",
  description: "Notes on backend engineering, distributed systems and fintech.",
};

export default async function BlogIndex() {
  const posts = await getPosts();
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 120, minHeight: "80vh" }}>
        <div className="container-x">
          <div className="sec-kicker">✎ Writing</div>
          <h1 className="sec-title" style={{ marginBottom: 40 }}>
            Blog
          </h1>

          {posts.length === 0 ? (
            <p style={{ color: "var(--muted)" }}>
              Posts are loading from the API (the free backend may be waking up — refresh in ~30s).
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {posts.map((p, i) => (
                <Reveal key={p.id} delay={Math.min(i, 4) * 50}>
                  <Link href={`/blog/${p.slug}`}>
                    <article className="card" style={{ padding: 26 }}>
                      <div className="mono" style={{ fontSize: "0.78rem", color: "var(--faint)", marginBottom: 8 }}>
                        {p.publishedAt} · {p.tags.join(" · ")}
                      </div>
                      <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: 8 }}>{p.title}</h2>
                      <p style={{ color: "var(--muted)", fontSize: "0.96rem" }}>{p.summary}</p>
                      <div style={{ color: "var(--accent)", marginTop: 12, fontWeight: 600, fontSize: "0.9rem" }}>
                        Read →
                      </div>
                    </article>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
