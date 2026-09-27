"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const competenciesCol1 = [
    "Distributed Systems",
    "Causal AI Reasoning",
    "Tree-sitter AST",
    "PostgreSQL + pgvector",
    "Redis Streams & Mesh",
  ];

  const competenciesCol2 = [
    "FastAPI & Spring Boot",
    "Next.js 14 & React 19",
    "PostGIS Geospatial",
    "Docker & Kubernetes",
    "Vectorized Backtesting",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        paddingTop: "108px",
        paddingBottom: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        borderBottom: "1px solid var(--border-hairline)",
      }}
      className="bg-grid-subtle"
    >
      <div className="mxd-container" style={{ width: "100%", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        
        {/* Top Group: Technical Tags, Contact Badges, and Featured System Callout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "28px",
            alignItems: "start",
            paddingTop: "24px",
          }}
        >
          {/* Columns 1 & 2: Specialization Tags */}
          <div
            style={{
              gridColumn: "span 12",
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
            }}
            className="hero-top-left"
          >
            {/* Column 1 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {"// Core Focus"}
              </span>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                {competenciesCol1.map((tag) => (
                  <motion.li key={tag} variants={itemVariants}>
                    <span className="tag-pill" data-cursor-text="Skill">{tag}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {"// Tech Stack"}
              </span>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                {competenciesCol2.map((tag) => (
                  <motion.li key={tag} variants={itemVariants}>
                    <span className="tag-pill" data-cursor-text="Skill">{tag}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Direct Connect Badges */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {"// Direct Connect"}
              </span>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                <motion.li variants={itemVariants}>
                  <a
                    href="mailto:arnav152007@gmail.com"
                    className="tag-pill active"
                    data-cursor-text="Email"
                  >
                    ✉ arnav152007@gmail.com
                  </a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <a
                    href="tel:+918423622491"
                    className="tag-pill"
                    data-cursor-text="Call"
                  >
                    ☎ +91 8423622491
                  </a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <a
                    href="https://github.com/arnnnnaaavvvvv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tag-pill"
                    data-cursor-text="GitHub"
                  >
                    ↗ github/arnnnnaaavvvvv
                  </a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <a
                    href="https://www.linkedin.com/in/arnav-singh-986722252"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tag-pill"
                    data-cursor-text="LinkedIn"
                  >
                    ↗ linkedin/in/arnav-singh
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>

          {/* Right Column: Featured System Card (Mock CLI / Incident Engine preview) */}
          <motion.div
            variants={itemVariants}
            style={{
              gridColumn: "span 12",
              marginTop: "16px",
            }}
            className="hero-featured-card"
          >
            <div
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border-hairline)",
                borderRadius: "16px",
                padding: "20px 24px",
                position: "relative",
                overflow: "hidden",
                maxWidth: "460px",
                marginLeft: "auto",
              }}
              data-cursor-text="Featured"
            >
              {/* Card top banner */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                  paddingBottom: "10px",
                  borderBottom: "1px solid var(--border-hairline)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff5f56" }} />
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ffbd2e" }} />
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#27c93f" }} />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      color: "var(--text-muted)",
                      marginLeft: "8px",
                    }}
                  >
                    clude-engine::v2.4
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "var(--accent-amber)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  [ACTIVE SYSTEM]
                </span>
              </div>

              {/* Terminal Code snippet representation */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.76rem",
                  lineHeight: 1.6,
                  color: "var(--text-dim)",
                }}
              >
                <p style={{ color: "#38bdf8" }}>$ clude evaluate --incident=INC-9042</p>
                <p style={{ color: "var(--text-muted)" }}>[+] Parsing AST structural diff via Tree-sitter...</p>
                <p style={{ color: "var(--text-muted)" }}>[+] Correlating stack trace across 4,200 commits...</p>
                <p style={{ color: "var(--accent-amber)" }}>
                  → Root Cause Found: commit <span style={{ color: "#fff" }}>7b81c2e</span> (96.4% confidence)
                </p>
              </div>

              <div
                style={{
                  marginTop: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--text-primary)",
                    fontWeight: 600,
                  }}
                >
                  CLUDE Intelligence
                </span>
                <a
                  href="#projects"
                  className="btn-mxd"
                  style={{ padding: "6px 14px", fontSize: "0.72rem" }}
                  data-cursor-text="Explore"
                >
                  <span>Explore Case</span>
                  <i>
                    <svg width="10" height="10" viewBox="0 0 18 18" fill="currentColor">
                      <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Group: Grand Display Typographic Header */}
        <div style={{ marginTop: "60px", marginBottom: "20px" }}>
          {/* Subtitle statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: "18px",
              gap: "16px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                color: "var(--accent-amber)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              / Full-Stack AI Engineer · Systems Architect
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                color: "var(--text-dim)",
                maxWidth: "580px",
                lineHeight: 1.6,
              }}
            >
              Architecting high-throughput, explainable intelligent platforms & distributed engines where verifiable correctness and deterministic safety take precedence over hallucination.
            </p>
          </motion.div>

          {/* Colossal Lettering: ARNAV SINGH */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3.4rem, 11vw, 10.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                color: "var(--text-primary)",
                textTransform: "uppercase",
                userSelect: "none",
                transition: "color 0.3s ease",
                margin: 0,
              }}
              className="hero-display-title"
              data-cursor-text="Arnav Singh"
            >
              ARNAV SINGH
            </h1>
          </motion.div>
        </div>

      </div>

      <style jsx>{`
        .hero-display-title:hover {
          color: var(--accent-amber);
        }
        @media (min-width: 992px) {
          .hero-top-left {
            grid-column: span 7 !important;
          }
          .hero-featured-card {
            grid-column: span 5 !important;
            margin-top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
