"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ProcessSticky() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "System Architecture & Formal Specification",
      subtitle: "Deterministic Modeling over Heuristics",
      description:
        "Every project begins with rigorous domain decomposition: defining invariant safety boundaries, choosing optimal data structures (spatial indexes, vector embeddings, high-throughput caches), and formalizing causal flows before writing a single line of application code.",
      artifacts: [
        "Causal dependency graphs & AST node schemata",
        "P99 latency & memory footprint bounds",
        "Geospatial and vector index benchmark baselines",
      ],
    },
    {
      number: "02",
      title: "Deterministic Engine & Low-Latency Core",
      subtitle: "Verified Syntax Trees & Concurrent Streams",
      description:
        "Building the execution layer with FastAPI, Next.js 14, and vectorized algorithms. Implementing Tree-sitter parsers for structural diff inspection, sub-100ms Redis Streams message queues, and AES-256 encrypted credential vaults with multi-layer defensive validation.",
      artifacts: [
        "Tree-sitter AST syntax chunking & HNSW vector search",
        "Numba/NumPy vectorized computation pipelines",
        "Zero-allocation streaming buffers and WebSocket mesh",
      ],
    },
    {
      number: "03",
      title: "Continuous Verification & Production Telemetry",
      subtitle: "Automated Correctness & Zero-Downtime Rollouts",
      description:
        "Packaging into isolated multi-container Docker Compose and Kubernetes networks. Establishing automated pytest validation suites, GitHub Actions CI/CD workflows, structured JSON observability, and production edge deployment on Vercel.",
      artifacts: [
        "Multi-stage Docker builds with minimal attack surface",
        "Automated regression suites & confidence calibration",
        "Real-time health check endpoints & telemetry feeds",
      ],
    },
  ];

  return (
    <section id="process" style={{ padding: "100px 0", borderTop: "1px solid var(--border-hairline)", position: "relative" }}>
      <div className="mxd-container">
        
        {/* Section Header */}
        <div style={{ marginBottom: "50px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "var(--accent-amber)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            / 03 Engineering Lifecycle
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginTop: "8px",
            }}
          >
            Engineering Process & Principles
          </h2>
        </div>

        {/* 3 Step Interactive Card Display */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "28px",
          }}
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              style={{
                gridColumn: "span 12",
                backgroundColor: activeStep === idx ? "var(--bg-card)" : "var(--bg-secondary)",
                border: activeStep === idx ? "1px solid var(--accent-amber)" : "1px solid var(--border-hairline)",
                borderRadius: "18px",
                padding: "36px 32px",
                cursor: "pointer",
                transition: "all var(--duration-medium) var(--ease-quint)",
              }}
              className="process-card"
              onClick={() => setActiveStep(idx)}
              data-cursor-text={`Step ${step.number}`}
            >
              {/* Step Top Bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: activeStep === idx ? "var(--accent-amber)" : "var(--text-muted)",
                  }}
                >
                  {step.number}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Phase 0{idx + 1}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "8px",
                }}
              >
                {step.title}
              </h3>

              {/* Subtitle */}
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  color: "var(--accent-amber)",
                  marginBottom: "16px",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                {`// ${step.subtitle}`}
              </p>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.92rem",
                  lineHeight: 1.65,
                  color: "var(--text-dim)",
                  marginBottom: "24px",
                }}
              >
                {step.description}
              </p>

              {/* Artifacts Checklist */}
              <div
                style={{
                  borderTop: "1px solid var(--border-hairline)",
                  paddingTop: "18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {step.artifacts.map((art, aIdx) => (
                  <div
                    key={aIdx}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.74rem",
                      color: "var(--text-muted)",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span style={{ color: "var(--accent-amber)" }}>✓</span>
                    <span>{art}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .process-card {
            grid-column: span 4 !important;
          }
        }
      `}</style>
    </section>
  );
}
