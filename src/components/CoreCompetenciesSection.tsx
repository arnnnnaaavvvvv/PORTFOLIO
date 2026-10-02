"use client";

import React from "react";

interface CompetencyItem {
  label: string;
  detail: string;
  icon: React.ReactNode;
}

interface CompetencyCardData {
  number: string;
  title: string;
  subtitle: string;
  accentColor: string;
  cardClass: string;
  iconBadgeClass: string;
  headerIcon: React.ReactNode;
  illustrationSrc: string;
  illustrationAlt: string;
  items: CompetencyItem[];
}

const COMPETENCY_CARDS: CompetencyCardData[] = [
  {
    number: "01",
    title: "Full-Stack & Systems Engineering",
    subtitle: "Building scalable, real-time and production-grade web systems from frontend to backend.",
    accentColor: "#f97316",
    cardClass: "competency-card--fullstack",
    iconBadgeClass: "competency-icon-badge--orange",
    illustrationSrc: "/img/competencies/laptop_3d.png",
    illustrationAlt: "Full-Stack & Systems Engineering Laptop",
    headerIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    items: [
      {
        label: "Frontend Architecture",
        detail: "React 19, Next.js 14 (App Router), Vite, Tailwind CSS, Leaflet.js, Three.js, Monaco Diff Viewer",
        icon: (
          <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
            <ellipse cx="16" cy="16" rx="4" ry="11" stroke="#06b6d4" strokeWidth="1.8" transform="rotate(30 16 16)" />
            <ellipse cx="16" cy="16" rx="4" ry="11" stroke="#06b6d4" strokeWidth="1.8" transform="rotate(90 16 16)" />
            <ellipse cx="16" cy="16" rx="4" ry="11" stroke="#06b6d4" strokeWidth="1.8" transform="rotate(150 16 16)" />
            <circle cx="16" cy="16" r="2.2" fill="#06b6d4" />
          </svg>
        ),
      },
      {
        label: "Backend Services",
        detail: "FastAPI (Python), Next.js API Routes, Node.js, REST APIs, WebSocket APIs",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        ),
      },
      {
        label: "Event-Driven Systems",
        detail: "WebSockets, Server-Sent Events (SSE), Redis Streams, Celery task queues",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        ),
      },
      {
        label: "Data & Analytical Pipelines",
        detail: "NumPy, Pandas, vectorized processing, asynchronous task execution",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        ),
      },
    ],
  },
  {
    number: "02",
    title: "Applied AI & Deep Learning Systems",
    subtitle: "Building intelligent systems with LLMs, RAG, and deep learning for real-world applications.",
    accentColor: "#8b5cf6",
    cardClass: "competency-card--ai",
    iconBadgeClass: "competency-icon-badge--purple",
    illustrationSrc: "/img/competencies/brain_3d.png",
    illustrationAlt: "Applied AI & Deep Learning Neural Brain",
    headerIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="16" x2="8.01" y2="16" strokeWidth="3" />
        <line x1="16" y1="16" x2="16.01" y2="16" strokeWidth="3" />
      </svg>
    ),
    items: [
      {
        label: "Causal Reasoning & ASTs",
        detail: "Tree-sitter AST analysis, semantic git diff causality, structured context understanding",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="6" r="3" />
            <circle cx="18" cy="18" r="3" />
            <circle cx="18" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <line x1="6" y1="9" x2="18" y2="15" />
            <line x1="9" y1="6" x2="15" y2="18" />
          </svg>
        ),
      },
      {
        label: "Vector Search & RAG",
        detail: "PostgreSQL + pgvector, Qdrant, HNSW indexing, semantic embeddings, retrieval pipelines",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        ),
      },
      {
        label: "Model Orchestration",
        detail: "Claude API, OpenAI (GPT-4o / 4o mini), tool calling, structured agents, evaluation pipelines",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3a9 9 0 0 1 9 9 9 9 0 0 1-9 9" />
            <path d="M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5" />
            <circle cx="12" cy="12" r="1.5" fill="#a855f7" />
          </svg>
        ),
      },
      {
        label: "Deep Learning & Biosignals",
        detail: "PyTorch, TensorFlow, signal processing (EEG/ECG/EDA), time-series analysis",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d946ef" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        ),
      },
    ],
  },
  {
    number: "03",
    title: "Geospatial Telemetry & Real-Time Routing",
    subtitle: "Working with spatial data, real-time streams and environmental telemetry for safety & decision systems.",
    accentColor: "#10b981",
    cardClass: "competency-card--geospatial",
    iconBadgeClass: "competency-icon-badge--green",
    illustrationSrc: "/img/competencies/globe_3d.png",
    illustrationAlt: "Geospatial Telemetry Globe",
    headerIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
      </svg>
    ),
    items: [
      {
        label: "Spatial & Stream Databases",
        detail: "PostgreSQL, PostGIS, TimescaleDB, Redis Streams for real-time data",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="8" ry="2.5" />
            <path d="M4 5v6c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5" />
            <path d="M4 11v6c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-6" />
          </svg>
        ),
      },
      {
        label: "GIS & Path Optimization",
        detail: "Shapely, Overpass OSM API, dynamic polyline calculation, Leaflet.js",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        ),
      },
      {
        label: "Environmental Fusion",
        detail: "Live IMD meteorological data, terrain analysis, multi-zone risk classification",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#047857" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
        ),
      },
      {
        label: "Physiological Risk Modeling",
        detail: "Acute Mountain Sickness (AMS), altitude & hypoxia analysis",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
          </svg>
        ),
      },
    ],
  },
  {
    number: "04",
    title: "Infrastructure, Security & Reliability",
    subtitle: "Building secure, scalable and reliable systems for production deployment.",
    accentColor: "#3b82f6",
    cardClass: "competency-card--infra",
    iconBadgeClass: "competency-icon-badge--blue",
    illustrationSrc: "/img/competencies/cloud_security_3d.png",
    illustrationAlt: "Cloud Security and Reliability",
    headerIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
      </svg>
    ),
    items: [
      {
        label: "Containers & Orchestration",
        detail: "Docker, Docker Compose, multi-container services, isolated worker architecture",
        icon: (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="#2563eb">
            <path d="M13.98 8.01H12V6.03h1.98v1.98zm-2.28 0H9.72V6.03h1.98v1.98zm-2.28 0H7.44V6.03h1.98v1.98zm4.56 2.28H12V8.31h1.98v1.98zm-2.28 0H9.72V8.31h1.98v1.98zm-2.28 0H7.44V8.31h1.98v1.98zm-2.28 0H2.88V8.31h1.98v1.98zm9.12-4.56H12V3.75h1.98v1.98zm6.81 7.23c-.39-.24-1.29-.42-2.13-.24-.24-.48-.69-.87-1.23-1.02-.15-.03-.3-.06-.48-.06-.72 0-1.41.36-1.8.96-.33-.09-.69-.15-1.05-.15H1.47c-.27 0-.51.12-.69.3-.18.18-.3.42-.3.69v3.06c0 1.23.42 2.37 1.17 3.3 1.05 1.26 2.58 2.07 4.38 2.22 5.07.45 9.78-.63 12.87-4.29.09-.12.18-.21.24-.33 1.17-.42 2.04-1.32 2.34-2.43.09-.33.09-.69-.03-1-.12-.42-.36-.78-.72-1.02z" />
          </svg>
        ),
      },
      {
        label: "CI/CD & Deployment",
        detail: "GitHub Actions, automated testing & linting, Vercel production deployment",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#1e293b">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        ),
      },
      {
        label: "Security & Access Control",
        detail: "JWT, OAuth 2.0, Firebase Admin SDK, role-based access, encryption best practices",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <circle cx="12" cy="11" r="2" />
            <path d="M12 13v3" />
          </svg>
        ),
      },
      {
        label: "Monitoring & Reliability",
        detail: "Logging, error tracking, performance profiling, system health checks",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
            <path d="m6 10 3-3 3 4 4-5" />
          </svg>
        ),
      },
    ],
  },
];

export default function CoreCompetenciesSection() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [touchStartX, setTouchStartX] = React.useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swipe left -> next card
        setActiveTab((prev) => (prev + 1) % COMPETENCY_CARDS.length);
      } else {
        // Swipe right -> prev card
        setActiveTab((prev) => (prev - 1 + COMPETENCY_CARDS.length) % COMPETENCY_CARDS.length);
      }
    }
    setTouchStartX(null);
  };

  const activeCard = COMPETENCY_CARDS[activeTab];

  return (
    <div className="competencies-showcase-wrapper" id="competencies">
      {/* Decorative silky warm champagne wave ribbons on sides matching theme */}
      <div className="skills-decor-ribbon skills-decor-ribbon-left" aria-hidden="true">
        <svg viewBox="0 0 320 800" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="compSilk1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d8b991" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#f3e7d5" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#e3c6a4" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="compSilk2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#edd8be" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#dfbd96" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#edd8be" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M-40 -40 C120 180, 180 340, 20 620 C-40 720, -10 780, -40 840 L-60 840 L-60 -40 Z" fill="url(#compSilk1)" filter="blur(16px)" />
          <path d="M-20 -20 C80 140, 140 280, 40 500 C-30 650, 20 750, -20 820" stroke="url(#compSilk2)" strokeWidth="42" strokeLinecap="round" opacity="0.5" filter="blur(20px)" />
        </svg>
      </div>
      <div className="skills-decor-ribbon skills-decor-ribbon-right" aria-hidden="true">
        <svg viewBox="0 0 320 800" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="compSilkR1" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d8b991" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#f3e7d5" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#e3c6a4" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="compSilkR2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#edd8be" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#dfbd96" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#edd8be" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M360 -40 C200 180, 140 340, 300 620 C360 720, 330 780, 360 840 L380 840 L380 -40 Z" fill="url(#compSilkR1)" filter="blur(16px)" />
          <path d="M340 -20 C240 140, 180 280, 280 500 C350 650, 300 750, 340 820" stroke="url(#compSilkR2)" strokeWidth="42" strokeLinecap="round" opacity="0.5" filter="blur(20px)" />
        </svg>
      </div>

      <div className="competencies-showcase-container">
        {/* Main Header */}
        <div className="competencies-header-center">
          <div className="competencies-title-row">
            <h2 className="competencies-main-title">CORE COMPETENCIES</h2>
            <div className="skills-title-squares" aria-hidden="true">
              <span className="skills-sq" />
              <span className="skills-sq" />
              <span className="skills-sq" />
              <span className="skills-sq" />
            </div>
          </div>
          <p className="competencies-subheading-lead">WHAT I BUILD &amp; ENGINEER</p>
          <div className="competencies-hairline-row">
            <span className="competencies-hairline-left" />
            <span className="competencies-hairline-text">TECHNICAL DEPTH ACROSS MULTIPLE DOMAINS</span>
            <span className="competencies-hairline-right" />
          </div>
        </div>

        {/* Mobile Tab Selector (Visible only on mobile <= 900px) */}
        <div className="competencies-mobile-tabs" role="tablist" aria-label="Competency Domains">
          {COMPETENCY_CARDS.map((card, idx) => (
            <button
              key={card.number}
              type="button"
              role="tab"
              aria-selected={activeTab === idx}
              onClick={() => setActiveTab(idx)}
              className={`competencies-mobile-tab-btn ${activeTab === idx ? "is-active" : ""}`}
            >
              <span className="mobile-tab-num">{card.number}</span>
              <span className="mobile-tab-label">
                {idx === 0 ? "Systems" : idx === 1 ? "AI & ML" : idx === 2 ? "Geospatial" : "Infra"}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile Single Card View (Swipeable, visible only on <= 900px) */}
        <div
          className="competencies-mobile-card-wrapper"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className={`competency-card ${activeCard.cardClass} competency-card--mobile`}>
            {/* Card Header */}
            <div className="competency-card-header">
              <div className="competency-card-header-left">
                <div className="competency-card-tag-row">
                  <span className="competency-number-pill">{activeCard.number} / 04</span>
                </div>
                <div className="competency-title-group">
                  <div className={`competency-icon-badge ${activeCard.iconBadgeClass}`}>
                    {activeCard.headerIcon}
                  </div>
                  <div className="competency-title-text-wrap">
                    <h3 className="competency-card-title">{activeCard.title}</h3>
                    <p className="competency-card-subtitle">{activeCard.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* 3D Graphic */}
              <div className="competency-card-illustration-wrap">
                <img
                  src={activeCard.illustrationSrc}
                  alt={activeCard.illustrationAlt}
                  className="competency-card-illustration-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Card Body - 4 Feature Rows */}
            <div className="competency-items-list">
              {activeCard.items.map((item, idx) => (
                <div key={idx} className="competency-item-row">
                  <div className="competency-item-icon-box">{item.icon}</div>
                  <div className="competency-item-text">
                    <span className="competency-item-label">{item.label}:</span>{" "}
                    <span className="competency-item-detail">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Carousel Indicators & Controls */}
          <div className="competencies-mobile-controls">
            <button
              type="button"
              className="competencies-mobile-arrow"
              onClick={() => setActiveTab((prev) => (prev - 1 + COMPETENCY_CARDS.length) % COMPETENCY_CARDS.length)}
              aria-label="Previous Competency"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <div className="competencies-mobile-dots">
              {COMPETENCY_CARDS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`competencies-dot ${activeTab === idx ? "is-active" : ""}`}
                  aria-label={`Jump to Competency ${idx + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              className="competencies-mobile-arrow"
              onClick={() => setActiveTab((prev) => (prev + 1) % COMPETENCY_CARDS.length)}
              aria-label="Next Competency"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop 2x2 Competencies Grid (Visible only on > 900px) */}
        <div className="competencies-grid competencies-grid--desktop">
          {COMPETENCY_CARDS.map((card) => (
            <div key={card.number} className={`competency-card ${card.cardClass}`}>
              {/* Card Header */}
              <div className="competency-card-header">
                <div className="competency-card-header-left">
                  <div className="competency-card-tag-row">
                    <span className="competency-number-pill">{card.number}</span>
                  </div>
                  <div className="competency-title-group">
                    <div className={`competency-icon-badge ${card.iconBadgeClass}`}>
                      {card.headerIcon}
                    </div>
                    <div className="competency-title-text-wrap">
                      <h3 className="competency-card-title">{card.title}</h3>
                      <p className="competency-card-subtitle">{card.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* 3D Graphic */}
                <div className="competency-card-illustration-wrap">
                  <img
                    src={card.illustrationSrc}
                    alt={card.illustrationAlt}
                    className="competency-card-illustration-img"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Card Body - 4 Feature Rows */}
              <div className="competency-items-list">
                {card.items.map((item, idx) => (
                  <div key={idx} className="competency-item-row">
                    <div className="competency-item-icon-box">{item.icon}</div>
                    <div className="competency-item-text">
                      <span className="competency-item-label">{item.label}:</span>{" "}
                      <span className="competency-item-detail">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
