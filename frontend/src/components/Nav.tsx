"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: "blur(14px)",
        background: scrolled || open ? "var(--nav-bg-scrolled)" : "var(--nav-bg)",
        borderBottom: `1px solid ${scrolled || open ? "var(--border)" : "transparent"}`,
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <div
        className="container-x"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 66,
        }}
      >
        <Link
          href="/"
          className="mono"
          style={{ fontWeight: 500, fontSize: "1.05rem" }}
          onClick={() => setOpen(false)}
        >
          shyam<span style={{ color: "var(--accent)" }}>.</span>tiwari
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div className="nav-links" style={{ display: "flex", gap: 26 }}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{ color: "var(--muted)", fontSize: "0.92rem", fontWeight: 500 }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
          <button
            className="nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            style={{
              display: "none",
              background: "var(--bg-soft)",
              border: "1px solid var(--border)",
              borderRadius: 10,
              width: 38,
              height: 38,
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M6 6 18 18 M6 18 18 6" />
              ) : (
                <path d="M4 7h16 M4 12h16 M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className="mobile-menu"
        style={{
          maxHeight: open ? 320 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          borderTop: open ? "1px solid var(--border)" : "none",
        }}
      >
        <div className="container-x" style={{ display: "flex", flexDirection: "column", padding: "8px 24px 20px" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                color: "var(--text)",
                fontSize: "1rem",
                fontWeight: 600,
                padding: "13px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
