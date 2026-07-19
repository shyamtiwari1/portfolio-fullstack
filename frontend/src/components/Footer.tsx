import Socials from "./Socials";

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
      <div className="container-x" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <div className="mono">
          shyam<span style={{ color: "var(--accent)" }}>.</span>tiwari
        </div>
        <Socials size={20} gap={16} />
        <div>Designed &amp; built by Shyam Tiwari · Bengaluru, India</div>
      </div>
    </footer>
  );
}
