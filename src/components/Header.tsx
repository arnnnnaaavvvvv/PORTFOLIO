"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [logoText, setLogoText] = useState("ARNAV SINGH");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrambleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#@*&";
  const originalText = "ARNAV SINGH";

  const handleMouseEnter = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setLogoText((prev) =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return scrambleCharacters[Math.floor(Math.random() * scrambleCharacters.length)];
          })
          .join("")
      );

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, 25);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "68px",
        backgroundColor: scrolled ? "rgba(13, 17, 23, 0.95)" : "rgba(13, 17, 23, 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border-hairline)",
        transition: "all var(--duration-medium) var(--ease-quint)",
      }}
    >
      <div
        className="mxd-container"
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand Monogram + Scramble Logo */}
        <Link
          href="/"
          onMouseEnter={handleMouseEnter}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            textDecoration: "none",
          }}
          data-cursor-text="Home"
        >
          {/* Azurio-style geometric logo glyph */}
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border-hairline)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--accent-amber)",
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "-0.05em",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 20L12 4L20 20M7 14H17" />
            </svg>
          </div>

          <div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.95rem",
                letterSpacing: "0.06em",
                color: "var(--text-primary)",
                display: "block",
              }}
            >
              {logoText}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.05em",
                color: "var(--text-muted)",
                display: "block",
                textTransform: "uppercase",
              }}
            >
              Full-Stack AI Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "28px",
          }}
          className="desktop-nav"
        >
          <a
            href="#projects"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "var(--text-dim)",
              transition: "color var(--duration-micro) var(--ease-micro)",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent-amber)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-dim)")}
          >
            / 01 Works
          </a>
          <a
            href="#about"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "var(--text-dim)",
              transition: "color var(--duration-micro) var(--ease-micro)",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent-amber)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-dim)")}
          >
            / 02 About
          </a>
          <a
            href="#process"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "var(--text-dim)",
              transition: "color var(--duration-micro) var(--ease-micro)",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent-amber)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-dim)")}
          >
            / 03 Process
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "var(--text-dim)",
              transition: "color var(--duration-micro) var(--ease-micro)",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent-amber)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-dim)")}
          >
            / 04 Contact
          </a>
        </nav>

        {/* Right Controls: Availability Badge + Say Hello CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {/* Status Badge */}
          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "100px",
              backgroundColor: "rgba(16, 185, 129, 0.08)",
              border: "1px solid rgba(16, 185, 129, 0.25)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.74rem",
              color: "var(--text-primary)",
            }}
            className="status-badge"
          >
            <span className="live-pulse" />
            <span>Open to High-Signal Roles</span>
          </div>

          {/* Say Hello Button */}
          <a
            href="#contact"
            className="btn-mxd"
            data-cursor-text="Say Hello"
          >
            <span>Say Hello</span>
            <i>
              <svg width="12" height="12" viewBox="0 0 18 18" fill="currentColor">
                <path d="M18,0v14.4h-3.6V7.2h-3.6V3.6H3.6V0H18z M7.2,10.8h3.6V7.2H7.2V10.8z M3.6,14.4h3.6v-3.6H3.6V14.4z M0,18h3.6v-3.6H0V18z" />
              </svg>
            </i>
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .status-badge {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}
