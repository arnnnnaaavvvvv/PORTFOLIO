"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const prefersReduced = shouldReduceMotion;

  // Meta row & CTA fade in
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
        backgroundColor: "#f2f0ea",
      }}
      className="hairline-bottom hero-custom-section hero"
    >
      <div className="portfolio-container" style={{ width: "100%", position: "relative" }}>
        
        {/* Subtle sub-label */}
        {/* 1. Centered Hero Name Image */}
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
          <motion.div
            className="hero-image-wrap"
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: EASE }}
          >
            <img
              src="/hero-name.png"
              alt="Arnav Singh — Full-Stack AI Developer"
              className="hero-image"
            />
          </motion.div>
        </div>

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
