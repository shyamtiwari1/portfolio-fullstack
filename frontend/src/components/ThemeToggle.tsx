"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "dark");
  }, []);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle light/dark theme"
      title="Toggle theme"
      style={{
        background: "var(--bg-soft)",
        border: "1px solid var(--border)",
        borderRadius: 10,
        width: 38,
        height: 38,
        fontSize: "1.05rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {theme === "light" ? "☀️" : "🌙"}
    </button>
  );
}
