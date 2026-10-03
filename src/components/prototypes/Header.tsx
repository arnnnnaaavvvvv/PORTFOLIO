"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("work");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Scroll-spy IntersectionObserver
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-25% 0px -60% 0px",
      threshold: 0,
    };

    const sectionElements = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      Boolean
    ) as HTMLElement[];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: 64,
        backgroundColor: scrolled ? "rgba(13, 17, 23, 0.95)" : "rgba(13, 17, 23, 0.85)",
        borderBottom: "1px solid var(--border-hairline)",
        backdropFilter: "blur(10px)",
        transition: "background-color 0.25s ease",
      }}
    >
      <div
        className="portfolio-container"
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Name / Brand Identity */}
        <Magnetic maxDistance={4}>
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "var(--text-primary)",
                letterSpacing: "0.02em",
              }}
            >
              Arnav Singh
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--text-muted)",
              }}
            >
              / AI Engineer
            </span>
          </Link>
        </Magnetic>

        {/* Scroll-Spy Navigation with shared layoutId animated underline */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Magnetic key={item.id} maxDistance={5}>
                <a
                  href={`#${item.id}`}
                  style={{
                    position: "relative",
                    display: "inline-block",
                    padding: "6px 0",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    letterSpacing: "0.04em",
                    color: isActive ? "var(--text-primary)" : "var(--text-dim)",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--text-dim)";
                  }}
                >
                  {item.label}

                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        backgroundColor: "var(--accent-amber)",
                        borderRadius: 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              </Magnetic>
            );
          })}
        </nav>

        {/* Right CTA / Connect Link */}
        <div>
          <Magnetic maxDistance={6}>
            <a
              href="mailto:arnav152007@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 14px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--text-primary)",
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border-hairline)",
                borderRadius: 4,
                transition: "border-color 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-amber)";
                e.currentTarget.style.color = "var(--accent-amber)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-hairline)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
            >
              <span>Say Hello</span>
              <span style={{ fontSize: "0.85rem", lineHeight: 1 }}>↗</span>
            </a>
          </Magnetic>
        </div>
      </div>
    </header>
  );
}
