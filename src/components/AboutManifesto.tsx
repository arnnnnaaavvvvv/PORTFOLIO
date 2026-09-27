"use client";

import { motion } from "framer-motion";

export default function AboutManifesto() {
  const competencies = [
    {
      domain: "Backend & Distributed Systems",
      points: [
        "FastAPI (Python 3.11+), Spring Boot (Java), Express.js",
        "Redis Pub/Sub, Redis Streams, Celery Task Queues",
        "PostgreSQL 16, TimescaleDB, PostGIS geospatial indexing",
        "Sub-100ms vectorized execution & zero-allocation DMA pipelines",
      ],
    },
    {
      domain: "Applied AI & Deterministic Reasoning",
      points: [
        "Tree-sitter AST syntax chunking & semantic git diff correlation",
        "pgvector (HNSW index) & Qdrant dense vector embedding retrieval",
        "Claude 3.5 Sonnet / GPT-4o causal reasoning orchestration",
        "Multi-factor rule-based risk AST evaluators for safe outputs",
      ],
    },
    {
      domain: "Frontend Architecture & GIS",
      points: [
        "Next.js 14 (App Router), React 19, Vite, TypeScript",
        "Offline-first Leaflet.js GIS mapping & Overpass OSM routing",
        "Three.js particle shaders & hardware-accelerated kinetic motion",
        "Custom design tokens (Obsidian, Hairline Slate, Amber Gold)",
      ],
    },
    {
      domain: "Infrastructure & Security",
      points: [
        "Docker & multi-container Docker Compose architectures",
        "Kubernetes deployment manifests & zero-downtime rolling upgrades",
        "AES-256 envelope vault encryption & OAuth 2.0 / JWT auth",
        "GitHub Actions multi-stage CI/CD pipelines & automated test suites",
      ],
    },
  ];

  const githubBadges = [
    { name: "Pull Shark", tier: "Bronze x2", icon: "🦈" },
    { name: "Pair Extraordinaire", tier: "Verified", icon: "👥" },
    { name: "Quickdraw", tier: "Verified", icon: "⚡" },
    { name: "YOLO", tier: "Verified", icon: "🎯" },
  ];

  return (
    <section id="about" style={{ padding: "110px 0", borderTop: "1px solid var(--border-hairline)", position: "relative" }}>
      <div className="mxd-container">
        
        {/* Top Tag & Header */}
        <div style={{ marginBottom: "40px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "var(--accent-amber)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            / 02 About & Philosophy
          </span>
        </div>

        {/* Large Manifesto Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
          style={{ marginBottom: "70px" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3.8vw, 3.4rem)",
              fontWeight: 600,
              lineHeight: 1.25,
              letterSpacing: "-0.025em",
              color: "var(--text-primary)",
              maxWidth: "1100px",
            }}
          >
            I am a Computer Science undergraduate at{" "}
            <span style={{ color: "var(--accent-amber)" }}>Chandigarh University</span> engineering high-throughput,{" "}
            <span style={{ color: "var(--accent-amber)" }}>deterministic AI systems</span> and distributed platforms where inspectability, correctness, and safety take precedence over opaque black-box outputs.
          </h2>
        </motion.div>

        {/* Split Grid: Detailed Narrative vs Competencies */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "48px",
          }}
        >
          {/* Left Column: Background & Engineering Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            style={{ gridColumn: "span 12" }}
            className="manifesto-left-col"
          >
            <div
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border-hairline)",
                borderRadius: "16px",
                padding: "36px",
                marginBottom: "28px",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  color: "var(--accent-amber)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "18px",
                }}
              >
                {"// Academic & Systems Background"}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "var(--text-primary)",
                  marginBottom: "18px",
                }}
              >
                Currently pursuing a <strong>Bachelor of Technology in Computer Science & Engineering (B.Tech CSE)</strong> at Chandigarh University, India. My focus spans low-latency backend engines, distributed geospatial data topologies, and neural-symbolic systems.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  color: "var(--text-dim)",
                }}
              >
                Rather than treating generative models as oracle black-boxes, I construct rigorous validation scaffolding around LLMs—utilizing <strong>Tree-sitter AST syntax chunking</strong>, vector indexes with cosine / HNSW metrics, and deterministic rule-based verification ASTs to ensure zero hallucination in critical developer workflows and algorithmic execution.
              </p>
            </div>

            {/* GitHub Achievements Box */}
            <div
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border-hairline)",
                borderRadius: "16px",
                padding: "28px 36px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.74rem",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                {"// GitHub Official Achievements"}
              </span>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                  gap: "14px",
                }}
              >
                {githubBadges.map((badge) => (
                  <div
                    key={badge.name}
                    style={{
                      padding: "12px",
                      borderRadius: "10px",
                      backgroundColor: "var(--bg-primary)",
                      border: "1px solid var(--border-hairline)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: "6px",
                    }}
                  >
                    <span style={{ fontSize: "1.4rem" }}>{badge.icon}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-primary)" }}>
                      {badge.name}
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--accent-amber)" }}>
                      {badge.tier}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Core Competency Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            style={{ gridColumn: "span 12" }}
            className="manifesto-right-col"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {competencies.map((comp) => (
                <div
                  key={comp.domain}
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border-hairline)",
                    borderRadius: "16px",
                    padding: "24px 28px",
                    transition: "border-color 0.25s ease",
                  }}
                  className="interactive-card"
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-amber)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-hairline)")}
                >
                  <h4
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "var(--accent-amber)",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      marginBottom: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span>⚡</span> {comp.domain}
                  </h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {comp.points.map((p, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.86rem",
                          lineHeight: 1.5,
                          color: "var(--text-dim)",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                        }}
                      >
                        <span style={{ color: "var(--accent-amber)", fontSize: "0.8rem", marginTop: "2px" }}>▸</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .manifesto-left-col {
            grid-column: span 6 !important;
          }
          .manifesto-right-col {
            grid-column: span 6 !important;
          }
        }
      `}</style>
    </section>
  );
}
