"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE, lineRevealVariant } from "@/lib/motion";

const HEADLINE_LINES = [
  "Full-Stack AI Engineer",
  "Architecting production-grade",
  "intelligent systems end-to-end.",
];

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
        staggerChildren: 0.08,
        delayChildren: 0.45,
      },
    },
  };

  // Meta row fades in right after the 3 headline lines finish revealing
  // 0.45s initial + (3 * 0.08s) + 0.3s = ~0.95s delay
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
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "120px",
        paddingBottom: "80px",
        position: "relative",
      }}
      className="hairline-bottom"
    >
      <div className="portfolio-container" style={{ width: "100%" }}>
        
        {/* Subtle sub-label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.35, ease: EASE }}
          style={{ marginBottom: "24px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--accent-amber)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {"// Systems & Applied AI"}
          </span>
        </motion.div>

        {/* Parallax-wrapped Headline Lines */}
        <motion.div style={{ y: yOffset }}>
          <motion.h1
            variants={headlineContainerVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 6.5vw, 5.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.08,
              color: "var(--text-primary)",
              marginBottom: "48px",
            }}
          >
            {HEADLINE_LINES.map((line, idx) => (
              <span
                key={idx}
                style={{
                  display: "block",
                  overflow: "hidden",
                }}
              >
                <motion.span
                  variants={lineRevealVariant}
                  style={{
                    display: "block",
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h1>
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
    </section>
  );
}
