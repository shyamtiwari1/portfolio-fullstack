import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getPost } from "@/lib/api";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: post ? `${post.title} — Shyam Tiwari` : "Post — Shyam Tiwari",
    description: post?.summary,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main style={{ paddingTop: 120, minHeight: "80vh" }}>
        <article className="container-x" style={{ maxWidth: 760 }}>
          <Link href="/blog" style={{ color: "var(--accent)", fontSize: "0.9rem", fontWeight: 600 }}>
            ← All posts
          </Link>
          <div className="mono" style={{ fontSize: "0.8rem", color: "var(--faint)", margin: "18px 0 6px" }}>
            {post.publishedAt} · {post.tags.join(" · ")}
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, letterSpacing: "-1px", marginBottom: 8 }}>
            {post.title}
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "1.1rem", marginBottom: 28 }}>{post.summary}</p>
          <div className="prose">
            <ReactMarkdown>{post.contentMd}</ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
