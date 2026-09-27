import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectRow, { ProjectData } from "@/components/ProjectRow";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const PROJECTS: ProjectData[] = [
  {
    number: "01",
    title: "CLUDE — Autonomous Production Incident Root-Cause Engine",
    category: "Causal AI & Developer Infrastructure",
    description:
      "Pinpoints the exact commit that broke production with causal AI reasoning and onboards engineers to unfamiliar codebases in minutes. Evaluates semantic causality across structural git diffs to correlate multiline stack traces (Python, Node.js/TS, Go, Java, Rust) against commit history in < 8s.",
    metrics: [
      "< 8s Mean Time to Cause",
      "Tree-sitter AST Syntax Chunks",
      "pgvector HNSW Search",
      "Calibrated Confidence Scores",
    ],
    tags: [
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
  },
  {
    number: "02",
    title: "IGNITE — Pan-India Dynamic Tourist Safety & Smart Route Engine",
    category: "Geospatial Data & Real-Time Resiliency",
    description:
      "Pan-India tourist safety routing and itinerary engine covering all 28 States & 8 Union Territories. Fuses live IMD meteorological data, 6 environmental natural zones, Acute Mountain Sickness (AMS) hypoxia altitude risk scoring, and autonomous hazard rerouting into an explainable, deterministic risk-scored engine.",
    metrics: [
      "All 28 States & 8 UTs Covered",
      "Sub-100ms Reroute Polyline",
      "Live IMD Sensor Fusion",
      "Offline-First GIS Tile Engine",
    ],
    tags: [
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
  },
  {
    number: "03",
    title: "SIRUS — Enterprise Multi-Tenant Quantitative Engine & Trading Platform",
    category: "High-Throughput Distributed Systems",
    description:
      "High-throughput systematic algorithmic trading SaaS with Direct Market Access (Zerodha Kite, Alpaca, KuCoin, Interactive Brokers, AngelOne). Features sub-100ms vectorized NumPy/Pandas strategy backtesting processing 540,000 ticks/sec, an AES-256 envelope-encrypted Demat key vault, and real-time Redis Streams event bus.",
    metrics: [
      "540,000 Ticks / Second Backtester",
      "AES-256 Demat Envelope Vault",
      "Sub-100ms DMA Order Routing",
      "Zero-Allocation Redis Streams",
    ],
    tags: [
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
  },
];

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section with Scoped Parallax */}
        <Hero />

        {/* Selected Works (x3 ProjectRow instances) */}
        <section
          id="work"
          className="section-pad hairline-bottom"
          style={{ position: "relative" }}
        >
          <div className="portfolio-container">
            <div style={{ marginBottom: "32px" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "var(--accent-amber)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {"// 01 Selected Systems"}
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 3.8vw, 2.8rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "var(--text-primary)",
                  marginTop: "8px",
                }}
              >
                Production Systems & Engineering Engines
              </h2>
            </div>

            {/* Project Rows */}
            <div>
              {PROJECTS.map((project, index) => (
                <ProjectRow
                  key={project.number}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Section with Stack Marquee */}
        <About />

        {/* Direct Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
