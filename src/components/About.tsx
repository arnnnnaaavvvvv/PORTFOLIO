"use client";

import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/motion";

export default function About() {
  const stackItems = [
    "BACKEND: FASTAPI / SPRING BOOT / REDIS STREAMS / PYTHON / JAVA",
    "DATA: POSTGRESQL 16 / PGVECTOR HNSW / POSTGIS / QDRANT",
    "AI & ML: TREE-SITTER AST / CAUSAL REASONING / CLAUDE 3.5 / EMBEDDINGS",
    "FRONTEND: NEXT.JS 14 / REACT 19 / TYPESCRIPT / THREE.JS / LEAFLET",
    "INFRASTRUCTURE: DOCKER / KUBERNETES / CI-CD / LINUX",
  ];

  // Duplicated once for pure CSS seamless loop
  const marqueeList = [...stackItems, ...stackItems];

  return (
    <section
      id="about"
      className="section-pad hairline-bottom"
      style={{ position: "relative" }}
    >
      <div className="portfolio-container">
        
        {/* Section Label */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ marginBottom: "28px" }}
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
            {"// 02 Background & Core Stack"}
          </span>
        </motion.div>

        {/* Narrative Split */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "36px",
            marginBottom: "56px",
          }}
        >
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ gridColumn: "span 12" }}
            className="about-headline-col"
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.8vw, 2.8rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.22,
                color: "var(--text-primary)",
              }}
            >
              Building inspectable, deterministic systems with verified correctness over opaque outputs.
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.1}
            style={{ gridColumn: "span 12" }}
            className="about-body-col"
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                lineHeight: 1.72,
                color: "var(--text-dim)",
                marginBottom: "20px",
              }}
            >
              I am a Computer Science undergraduate (B.Tech CSE @ Chandigarh University) specializing in concurrent backend architectures, distributed geospatial routing, and explainable AI pipelines.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                lineHeight: 1.72,
                color: "var(--text-dim)",
              }}
            >
              My work centers on bridging probabilistic neural models with deterministic programmatic verification—using Tree-sitter AST syntax chunking, HNSW vector search, and rule-based risk evaluators to guarantee safe, deterministic performance in production environments.
            </p>
          </motion.div>
        </div>

      </div>

      {/* Pure CSS Continuous Stack Marquee */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          backgroundColor: "var(--bg-secondary)",
          borderTop: "1px solid var(--border-hairline)",
          borderBottom: "1px solid var(--border-hairline)",
          padding: "16px 0",
          userSelect: "none",
        }}
        data-cursor="hover"
      >
        <div className="marquee-container">
          {marqueeList.map((item, index) => (
            <div
              key={index}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "28px",
                paddingRight: "28px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  color: "var(--text-primary)",
                  letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                }}
              >
                {item}
              </span>
              <span style={{ color: "var(--accent-amber)", fontFamily: "var(--font-mono)" }}>
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .about-headline-col {
            grid-column: span 6 !important;
          }
          .about-body-col {
            grid-column: span 6 !important;
          }
        }
      `}</style>
    </section>
  );
}
