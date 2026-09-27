"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import { projectRowVariant, tagRevealVariant } from "@/lib/motion";

export interface ProjectData {
  number: string;
  title: string;
  category: string;
  description: string;
  metrics: string[];
  tags: string[];
  liveUrl: string;
  sourceUrl: string;
}

interface ProjectRowProps {
  project: ProjectData;
  index: number;
}

export default function ProjectRow({ project, index }: ProjectRowProps) {
  return (
    <motion.div
      variants={projectRowVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={index}
      style={{
        paddingTop: "48px",
        paddingBottom: "48px",
        borderBottom: "1px solid var(--border-hairline)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "24px",
          alignItems: "start",
        }}
      >
        {/* Number & Category */}
        <div
          style={{ gridColumn: "span 12" }}
          className="project-index-col"
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "var(--accent-amber)",
              }}
            >
              {project.number}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <div
          style={{ gridColumn: "span 12" }}
          className="project-content-col"
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "var(--text-primary)",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              lineHeight: 1.68,
              color: "var(--text-dim)",
              maxWidth: "680px",
              marginBottom: "20px",
            }}
          >
            {project.description}
          </p>

          {/* Key Metrics / Invariants */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            {project.metrics.map((metric) => (
              <span
                key={metric}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--accent-amber)",
                  backgroundColor: "var(--accent-amber-subtle)",
                  border: "1px solid rgba(216, 169, 78, 0.2)",
                  padding: "3px 8px",
                  borderRadius: "3px",
                }}
              >
                {metric}
              </span>
            ))}
          </div>

          {/* Nested Staggered Tech Tags */}
          <motion.div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              marginBottom: "28px",
            }}
          >
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                variants={tagRevealVariant}
                className="tech-tag"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Action Links with Magnetic Hover */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Magnetic maxDistance={6}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  borderBottom: "1px solid var(--accent-amber)",
                  paddingBottom: "2px",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-amber)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                data-cursor="hover"
              >
                <span>Live System</span>
                <span style={{ fontSize: "0.85rem" }}>↗</span>
              </a>
            </Magnetic>

            <Magnetic maxDistance={6}>
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  color: "var(--text-muted)",
                  borderBottom: "1px solid var(--border-hairline)",
                  paddingBottom: "2px",
                  transition: "color 0.2s ease, border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--text-primary)";
                  e.currentTarget.style.borderColor = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.borderColor = "var(--border-hairline)";
                }}
                data-cursor="hover"
              >
                <span>Source Code</span>
                <span style={{ fontSize: "0.85rem" }}>↗</span>
              </a>
            </Magnetic>
          </div>
        </div>

      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .project-index-col {
            grid-column: span 3 !important;
          }
          .project-content-col {
            grid-column: span 9 !important;
          }
        }
      `}</style>
    </motion.div>
  );
}
