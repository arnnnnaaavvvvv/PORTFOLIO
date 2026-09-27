"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE, lineRevealVariant } from "@/lib/motion";

const NAME_LINES = ["ARNAV", "SINGH"];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
  }, []);

  // Parallax scoped strictly to the hero container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Moves headline up slightly slower than scroll speed (40-60px subtle offset)
  const headlineParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yOffset = prefersReduced ? 0 : headlineParallax;

  // Stagger container for lines: starts at 0.45s (after the 400-500ms page-load transition)
  const headlineContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.45,
      },
    },
  };

  // Meta row & CTA fade in right after headline
  const metaRowVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: prefersReduced ? 0 : 0.95,
        ease: EASE,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "100px",
        paddingBottom: "60px",
        position: "relative",
        overflow: "hidden",
      }}
      className="hairline-bottom hero-custom-section"
    >
      <div className="portfolio-container" style={{ width: "100%", position: "relative" }}>
        
        {/* Subtle sub-label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.35, ease: EASE }}
          style={{ marginBottom: "16px", textAlign: "center" }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--accent-amber)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {"// Systems & Applied AI"}
          </span>
        </motion.div>

        {/* 1. Centered Stacked Name Stage */}
        <div
          className="hero-center-stage"
          style={{
            position: "relative",
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          {/* Parallax-wrapped Centered Headline: ARNAV / SINGH */}
          <motion.div
            style={{
              y: yOffset,
              position: "relative",
              zIndex: 2,
              pointerEvents: "none",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.h1
              variants={headlineContainerVariants}
              initial="hidden"
              animate="visible"
              style={{
                fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
                fontSize: "clamp(3.5rem, 13vw, 10rem)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                lineHeight: 0.92,
                color: "var(--ink, var(--text-primary))",
                margin: 0,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              {NAME_LINES.map((line, idx) => (
                <span
                  key={idx}
                  style={{
                    display: "block",
                    overflow: "hidden",
                    textAlign: "center",
                  }}
                >
                  <motion.span
                    variants={lineRevealVariant}
                    style={{
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </motion.h1>
          </motion.div>
        </div>

        {/* 2. "SELECTED WORKS" button: Standalone pill positioned below stacked name */}
        <motion.div
          variants={metaRowVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "36px",
            marginBottom: "40px",
            position: "relative",
            zIndex: 3,
          }}
        >
          <a
            href="#work"
            className="selected-works-pill-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 28px",
              borderRadius: "9999px",
              backgroundColor: "var(--text-primary)",
              color: "var(--bg-primary)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
              e.currentTarget.style.boxShadow = "0 14px 32px rgba(0, 0, 0, 0.28)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.2)";
            }}
          >
            <span>SELECTED WORKS</span>
            <svg width="14" height="14" viewBox="0 0 18 18" fill="currentColor">
              <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
            </svg>
          </a>
        </motion.div>

        {/* Meta Row: Fades in after headline without parallax */}
        <motion.div
          variants={metaRowVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
            paddingTop: "32px",
            borderTop: "1px solid var(--border-hairline)",
            position: "relative",
            zIndex: 3,
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Location
            </span>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.92rem",
                color: "var(--text-primary)",
              }}
            >
              India (Open Worldwide)
            </p>
          </div>

          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Core Focus
            </span>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.92rem",
                color: "var(--text-primary)",
              }}
            >
              Causal AI & High-Throughput Engines
            </p>
          </div>

          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Currently
            </span>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.92rem",
                color: "var(--text-primary)",
              }}
            >
              B.Tech CSE @ Chandigarh University
            </p>
          </div>

          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Contact
            </span>
            <a
              href="mailto:arnav152007@gmail.com"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.92rem",
                color: "var(--accent-amber)",
                textDecoration: "none",
              }}
            >
              arnav152007@gmail.com
            </a>
          </div>
        </motion.div>

      </div>

      {/* 4. Responsive CSS for mobile under 640px */}
      <style jsx>{`
        @media (max-width: 640px) {
          .hero-behind-photo-wrap {
            width: clamp(140px, 45vw, 210px) !important;
            top: 50% !important;
          }
          .hero-center-stage {
            min-height: 50vh !important;
          }
        }
      `}</style>
    </section>
  );
}
