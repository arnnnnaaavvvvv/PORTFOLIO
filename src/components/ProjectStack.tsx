"use client";

import { motion } from "framer-motion";

interface Project {
  number: string;
  title: string;
  category: string;
  summary: string;
  metrics: string[];
  techStack: string[];
  liveUrl: string;
  sourceUrl: string;
  specUrl: string;
  visualSnippet: {
    title: string;
    lang: string;
    codeLines: { line: string; color?: string }[];
  };
}

export default function ProjectStack() {
  const projects: Project[] = [
    {
      number: "01",
      title: "CLUDE — Autonomous Production Incident Root-Cause Engine",
      category: "Causal AI & Developer Infrastructure",
      summary:
        "Pinpoints the exact commit that broke production with causal AI reasoning and onboards engineers to unfamiliar codebases in minutes. Evaluates semantic causality across structural git diffs to correlate multiline stack traces (Python, Node.js/TS, Go, Java, Rust) against commit history in < 8s.",
      metrics: [
        "< 8s Mean Time to Cause",
        "Tree-sitter AST Syntax Chunks",
        "pgvector HNSW Search",
        "Calibrated Confidence Scores",
      ],
      techStack: [
        "FastAPI",
        "Next.js 14",
        "PostgreSQL 16",
        "pgvector HNSW",
        "Claude 3.5 Sonnet",
        "Tree-sitter",
        "Redis",
        "Docker",
      ],
      liveUrl: "https://frontend-mu-roan-llgeruknl5.vercel.app",
      sourceUrl: "https://github.com/arnnnnaaavvvvv/CLUDE",
      specUrl: "https://github.com/arnnnnaaavvvvv/CLUDE/blob/main/ARCHITECTURE.md",
      visualSnippet: {
        title: "root_cause_evaluator.py",
        lang: "Python / AST",
        codeLines: [
          { line: "@engine.correlate(incident_trace, repo_ast)", color: "#38bdf8" },
          { line: "def evaluate_causal_chain(diff_stream):", color: "#f2f0ea" },
          { line: "    ast_nodes = tree_sitter.parse_syntax_chunks(diff_stream)", color: "#9aa4b2" },
          { line: "    embeddings = pgvector.query_hnsw(ast_nodes, top_k=5)", color: "#9aa4b2" },
          { line: "    causal_report = llm_reasoning_gate(embeddings, confidence_threshold=0.92)", color: "#d8a94e" },
          { line: "    return VerifiedRootCause(commit='7b81c2e', p_value=0.014)", color: "#10b981" },
        ],
      },
    },
    {
      number: "02",
      title: "IGNITE — Pan-India Dynamic Tourist Safety & Smart Route Engine",
      category: "Geospatial Data & Real-Time Resiliency",
      summary:
        "Pan-India tourist safety routing and itinerary engine covering all 28 States & 8 Union Territories. Fuses live IMD meteorological data, 6 environmental natural zones, Acute Mountain Sickness (AMS) hypoxia altitude risk scoring, and autonomous hazard rerouting into an explainable, deterministic risk-scored engine.",
      metrics: [
        "All 28 States & 8 UTs Covered",
        "Sub-100ms Reroute Polyline",
        "Live IMD Sensor Fusion",
        "Offline-First GIS Tile Engine",
      ],
      techStack: [
        "FastAPI",
        "React 19 + Vite",
        "Leaflet.js Offline GIS",
        "Deterministic Risk AST",
        "WebSocket Live Mesh",
        "PostGIS",
        "Tailwind CSS",
      ],
      liveUrl: "https://ignite-lemon-nu.vercel.app/",
      sourceUrl: "https://github.com/arnnnnaaavvvvv/IGNITE",
      specUrl: "https://github.com/arnnnnaaavvvvv/IGNITE/blob/main/ARCHITECTURE.md",
      visualSnippet: {
        title: "spatial_risk_calculator.ts",
        lang: "TypeScript / GIS",
        codeLines: [
          { line: "export async function computeTerrainRisk(routePolyline: Coordinate[]): Promise<RiskScore> {", color: "#38bdf8" },
          { line: "  const imdWeather = await fetchMeteorologicalRadar(routePolyline);", color: "#9aa4b2" },
          { line: "  const hypoxiaCurve = calculateAMSHypoxiaIndex(routePolyline.elevationProfile);", color: "#9aa4b2" },
          { line: "  const hazardZones = spatialQueryOverpassBypass(imdWeather, hypoxiaCurve);", color: "#d8a94e" },
          { line: "  return { status: 'SAFE_BYPASS_ENGAGED', latencyMs: 64, rerouteTriggered: true };", color: "#10b981" },
          { line: "}", color: "#f2f0ea" },
        ],
      },
    },
    {
      number: "03",
      title: "SIRUS — Enterprise Multi-Tenant Quantitative Engine & Trading Platform",
      category: "High-Throughput Distributed Systems",
      summary:
        "High-throughput systematic algorithmic trading SaaS with Direct Market Access (Zerodha Kite, Alpaca, KuCoin, Interactive Brokers, AngelOne). Features sub-100ms vectorized NumPy/Pandas strategy backtesting processing 540,000 ticks/sec, an AES-256 envelope-encrypted Demat key vault, and real-time Redis Streams event bus.",
      metrics: [
        "540,000 Ticks / Second Backtester",
        "AES-256 Demat Envelope Vault",
        "Sub-100ms DMA Order Routing",
        "Zero-Allocation Redis Streams",
      ],
      techStack: [
        "Next.js 14",
        "Three.js Particles",
        "FastAPI",
        "Redis Streams",
        "Vectorized Backtester",
        "AES-256 Encryption",
        "Docker",
      ],
      liveUrl: "https://web-frontend-three-gamma.vercel.app/",
      sourceUrl: "https://github.com/arnnnnaaavvvvv/SIRUS",
      specUrl: "https://github.com/arnnnnaaavvvvv/SIRUS/blob/main/ARCHITECTURE.md",
      visualSnippet: {
        title: "vectorized_engine.py",
        lang: "Python / NumPy DMA",
        codeLines: [
          { line: "@numba.jit(nopython=True, parallel=True)", color: "#38bdf8" },
          { line: "def execute_vectorized_backtest(ticks_matrix, signal_vectors):", color: "#f2f0ea" },
          { line: "    # 540,000 ticks/sec vectorized parallel pass", color: "#647082" },
          { line: "    returns = np.diff(ticks_matrix) * signal_vectors[:-1]", color: "#9aa4b2" },
          { line: "    sharpe_ratio = np.mean(returns) / np.std(returns) * np.sqrt(252)", color: "#d8a94e" },
          { line: "    return ExecutionMetrics(sharpe=2.84, max_drawdown=0.038, latency_p99=82ms)", color: "#10b981" },
        ],
      },
    },
    {
      number: "04",
      title: "AI Developer Copilot & Career Intelligence Platform",
      category: "Dense Vector Search & Talent Intelligence",
      summary:
        "Full-stack talent intelligence engine parsing resumes, job descriptions, and public profile data (GitHub & LinkedIn) to power semantic ATS scoring, vector-based skill gap identification, salary regression predictions, and mock interview question generation using dense vector embeddings.",
      metrics: [
        "Dense Embedding Vector Search",
        "Automated Resume AST Parsing",
        "Skill-Gap Regression Model",
        "Qdrant Similarity Cluster",
      ],
      techStack: [
        "Next.js 14",
        "TypeScript",
        "Qdrant Vector DB",
        "FastAPI Microservice",
        "RAG Pipeline",
        "Tailwind CSS",
      ],
      liveUrl: "https://rlg-platform.vercel.app/",
      sourceUrl: "https://github.com/arnnnnaaavvvvv/AI-Developer-Copilot-Career-Intelligence-Platform",
      specUrl: "https://github.com/arnnnnaaavvvvv/AI-Developer-Copilot-Career-Intelligence-Platform/blob/main/ARCHITECTURE.md",
      visualSnippet: {
        title: "rag_skill_matcher.ts",
        lang: "TypeScript / Qdrant",
        codeLines: [
          { line: "const candidateVector = await generateDenseEmbedding(resumeParsedAST);", color: "#38bdf8" },
          { line: "const similarityCluster = await qdrantClient.search('job_postings', {", color: "#9aa4b2" },
          { line: "  vector: candidateVector,", color: "#9aa4b2" },
          { line: "  filter: { must: [{ key: 'level', match: { value: 'Systems Engineer' } }] },", color: "#d8a94e" },
          { line: "});", color: "#9aa4b2" },
          { line: "return calculateWeightedFit(similarityCluster, { confidenceFloor: 0.94 });", color: "#10b981" },
        ],
      },
    },
  ];

  return (
    <section id="projects" style={{ padding: "100px 0", position: "relative" }}>
      <div className="mxd-container">
        
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "56px",
            borderBottom: "1px solid var(--border-hairline)",
            paddingBottom: "24px",
            gap: "20px",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                color: "var(--accent-amber)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              / 01 Selected Systems
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3.8rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginTop: "8px",
              }}
            >
              Featured Engineering Works
            </h2>
          </div>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.82rem",
              color: "var(--text-dim)",
              maxWidth: "420px",
              lineHeight: 1.5,
            }}
          >
            A curated selection of high-throughput production systems, causal AI diagnostic tools, and distributed geospatial routing engines.
          </p>
        </div>

        {/* Stack Cards Collection */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {projects.map((proj) => (
            <motion.div
              key={proj.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border-hairline)",
                borderRadius: "20px",
                overflow: "hidden",
                transition: "border-color var(--duration-medium) var(--ease-quint)",
              }}
              className="project-card"
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-amber)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-hairline)")}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(12, 1fr)",
                }}
              >
                {/* Left Side: Metadata & Project Narrative */}
                <div
                  style={{
                    gridColumn: "span 12",
                    padding: "36px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  className="project-info-col"
                >
                  <div>
                    {/* Index & Category */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "16px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: "var(--accent-amber)",
                        }}
                      >
                        [ {proj.number} ]
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {proj.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        color: "var(--text-primary)",
                        marginBottom: "16px",
                        lineHeight: 1.2,
                      }}
                    >
                      {proj.title}
                    </h3>

                    {/* Summary */}
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.95rem",
                        lineHeight: 1.65,
                        color: "var(--text-dim)",
                        marginBottom: "24px",
                      }}
                    >
                      {proj.summary}
                    </p>

                    {/* Key Technical Metric Pills */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                        marginBottom: "24px",
                      }}
                    >
                      {proj.metrics.map((metric) => (
                        <span
                          key={metric}
                          style={{
                            padding: "4px 10px",
                            borderRadius: "6px",
                            backgroundColor: "rgba(216, 169, 78, 0.08)",
                            border: "1px solid rgba(216, 169, 78, 0.2)",
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.7rem",
                            color: "var(--accent-amber)",
                            fontWeight: 500,
                          }}
                        >
                          ✓ {metric}
                        </span>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                        marginBottom: "32px",
                      }}
                    >
                      {proj.techStack.map((tech) => (
                        <span key={tech} className="tag-pill" style={{ fontSize: "0.7rem", padding: "4px 10px" }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions / Links */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "14px",
                      alignItems: "center",
                      paddingTop: "20px",
                      borderTop: "1px solid var(--border-hairline)",
                    }}
                  >
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-solid-amber"
                      data-cursor-text="Launch"
                    >
                      <span>Live Demo</span>
                      <svg width="12" height="12" viewBox="0 0 18 18" fill="currentColor">
                        <path d="M18,0v14.4h-3.6V7.2h-3.6V3.6H3.6V0H18z M7.2,10.8h3.6V7.2H7.2V10.8z M3.6,14.4h3.6v-3.6H3.6V14.4z M0,18h3.6v-3.6H0V18z" />
                      </svg>
                    </a>

                    <a
                      href={proj.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-mxd"
                      data-cursor-text="Source"
                    >
                      <span>GitHub Repo</span>
                      <i>
                        <svg width="11" height="11" viewBox="0 0 18 18" fill="currentColor">
                          <path d="M18,0v14.4h-3.6V7.2h-3.6V3.6H3.6V0H18z M7.2,10.8h3.6V7.2H7.2V10.8z M3.6,14.4h3.6v-3.6H3.6V14.4z M0,18h3.6v-3.6H0V18z" />
                        </svg>
                      </i>
                    </a>

                    <a
                      href={proj.specUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.78rem",
                        color: "var(--text-muted)",
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                        marginLeft: "4px",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
                    >
                      Architecture Spec →
                    </a>
                  </div>
                </div>

                {/* Right Side: Interactive Visual Code Terminal */}
                <div
                  style={{
                    gridColumn: "span 12",
                    backgroundColor: "#0a0d12",
                    borderLeft: "1px solid var(--border-hairline)",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  className="project-code-col"
                >
                  <div
                    style={{
                      borderRadius: "12px",
                      border: "1px solid var(--border-hairline)",
                      backgroundColor: "rgba(13, 17, 23, 0.9)",
                      padding: "18px",
                    }}
                  >
                    {/* Terminal Window Header */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingBottom: "12px",
                        marginBottom: "14px",
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
                            fontSize: "0.7rem",
                            color: "var(--text-muted)",
                            marginLeft: "10px",
                          }}
                        >
                          {proj.visualSnippet.title}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.68rem",
                          color: "var(--accent-amber)",
                        }}
                      >
                        {proj.visualSnippet.lang}
                      </span>
                    </div>

                    {/* Code Lines */}
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.78rem",
                        lineHeight: 1.7,
                        overflowX: "auto",
                      }}
                    >
                      {proj.visualSnippet.codeLines.map((cl, cIdx) => (
                        <div key={cIdx} style={{ display: "flex", gap: "14px" }}>
                          <span style={{ color: "var(--text-muted)", width: "16px", textAlign: "right", userSelect: "none" }}>
                            {cIdx + 1}
                          </span>
                          <span style={{ color: cl.color || "var(--text-dim)", whiteSpace: "pre" }}>
                            {cl.line}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .project-info-col {
            grid-column: span 7 !important;
          }
          .project-code-col {
            grid-column: span 5 !important;
            border-left: 1px solid var(--border-hairline) !important;
            border-top: none !important;
          }
        }
        @media (max-width: 991px) {
          .project-code-col {
            border-top: 1px solid var(--border-hairline) !important;
            border-left: none !important;
          }
        }
      `}</style>
    </section>
  );
}
