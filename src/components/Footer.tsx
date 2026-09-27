"use client";

import Magnetic from "@/components/Magnetic";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        paddingTop: "48px",
        paddingBottom: "48px",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      <div
        className="portfolio-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          fontFamily: "var(--font-mono)",
          fontSize: "0.78rem",
          color: "var(--text-muted)",
        }}
      >
        <div>
          <span>© 2026 Arnav Singh · Full-Stack AI Engineer</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Magnetic maxDistance={4}>
            <a
              href="https://github.com/arnnnnaaavvvvv"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-dim)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-amber)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
              data-cursor="hover"
            >
              GitHub ↗
            </a>
          </Magnetic>

          <Magnetic maxDistance={4}>
            <a
              href="https://www.linkedin.com/in/arnav-singh-986722252"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-dim)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-amber)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
              data-cursor="hover"
            >
              LinkedIn ↗
            </a>
          </Magnetic>

          <Magnetic maxDistance={4}>
            <button
              onClick={scrollToTop}
              style={{
                color: "var(--text-dim)",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-amber)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
              data-cursor="hover"
            >
              <span>Back to Top</span>
              <span>↑</span>
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
