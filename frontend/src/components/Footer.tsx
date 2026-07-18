export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "32px 0",
        textAlign: "center",
        color: "var(--faint)",
        fontSize: "0.88rem",
      }}
    >
      <div className="container-x">
        <div className="mono" style={{ marginBottom: 8 }}>
          shyam<span style={{ color: "var(--accent)" }}>.</span>tiwari
        </div>
        <div>
          Designed &amp; built by Shyam Tiwari · Bengaluru, India ·{" "}
          <a href="mailto:shyamtiwari025@gmail.com" style={{ color: "var(--accent)" }}>
            shyamtiwari025@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
