"use client";

import React from "react";
import ProjectTechStack, { TechItem } from "./ProjectTechStack";

export interface ProjectMobileCardProps {
  id: "neurosense" | "clude" | "ignite" | "sirus";
  tagNumber: string;
  tagCategory: string;
  brandName: string;
  brandIcon: React.ReactNode;
  titlePrimary: string;
  titleHighlight: string;
  description: string;
  liveDemoUrl: string;
  techItems: TechItem[];
  theme: "light" | "dark" | "emerald";
  metrics?: string[];
  actionLabel?: string;
}

const DEFAULT_METRICS: Record<string, string[]> = {
  neurosense: ["128Hz Raw EEG", "Biomarker ML", "Clinical Grade"],
  clude: ["Sub-sec AST Parse", "Git Blame AI", "Zero-Shot RCA"],
  ignite: ["IMD Radar Mesh", "28 States & 8 UTs", "AMS Hypoxia AI"],
  sirus: ["Sub-ms DMA", "Multi-Tenant Risk", "Vectorized Backtest"],
};

const DEFAULT_ACTIONS: Record<string, string> = {
  neurosense: "Explore Benchmark Cases",
  clude: "Launch Studio",
  ignite: "Open Radar Map",
  sirus: "Launch Terminal",
};

function renderProjectAtmosphere(id: "neurosense" | "clude" | "ignite" | "sirus") {
  if (id === "neurosense") {
    return (
      <div className="project-mobile-atmosphere project-mobile-atmosphere--neurosense" aria-hidden="true">
        <div className="atmosphere-radial-glow atmosphere-radial-glow--neurosense" />
        <svg viewBox="0 0 400 240" preserveAspectRatio="none" className="atmosphere-svg-bg">
          <defs>
            <linearGradient id="nsEegGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.08" />
              <stop offset="35%" stopColor="#0284c7" stopOpacity="0.32" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.55" />
              <stop offset="65%" stopColor="#0284c7" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          {/* Subtle clinical coordinate grid lines */}
          <line x1="0" y1="60" x2="400" y2="60" stroke="rgba(15, 23, 42, 0.035)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(15, 23, 42, 0.045)" strokeWidth="1" />
          <line x1="0" y1="180" x2="400" y2="180" stroke="rgba(15, 23, 42, 0.035)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="100" y1="0" x2="100" y2="240" stroke="rgba(15, 23, 42, 0.03)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="200" y1="0" x2="200" y2="240" stroke="rgba(15, 23, 42, 0.045)" strokeWidth="1" />
          <line x1="300" y1="0" x2="300" y2="240" stroke="rgba(15, 23, 42, 0.03)" strokeWidth="1" strokeDasharray="3 3" />

          {/* Dynamic clinical EEG biosignal pulse curve */}
          <path
            d="M0,120 L50,120 L65,110 L80,130 L95,120 L135,120 L150,70 L165,170 L180,45 L195,185 L210,95 L225,135 L240,120 L280,120 L295,112 L310,128 L325,120 L400,120"
            fill="none"
            stroke="url(#nsEegGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Smooth secondary harmonic wave */}
          <path
            d="M0,140 Q100,110 200,140 T400,140"
            fill="none"
            stroke="rgba(14, 165, 233, 0.14)"
            strokeWidth="1.2"
          />

          {/* Precision crosshair telemetry points */}
          <path d="M16,40 L28,40 M22,34 L22,46" stroke="rgba(15, 23, 42, 0.16)" strokeWidth="1.2" />
          <path d="M372,40 L384,40 M378,34 L378,46" stroke="rgba(15, 23, 42, 0.16)" strokeWidth="1.2" />
          <path d="M16,200 L28,200 M22,194 L22,206" stroke="rgba(15, 23, 42, 0.12)" strokeWidth="1.2" />
          <path d="M372,200 L384,200 M378,194 L378,206" stroke="rgba(15, 23, 42, 0.12)" strokeWidth="1.2" />
        </svg>
      </div>
    );
  }

  if (id === "clude") {
    return (
      <div className="project-mobile-atmosphere project-mobile-atmosphere--clude" aria-hidden="true">
        <div className="atmosphere-radial-glow atmosphere-radial-glow--clude" />
        <svg viewBox="0 0 400 240" preserveAspectRatio="none" className="atmosphere-svg-bg">
          {/* Concentric orbital radar rings (matching clude.png) */}
          <ellipse cx="200" cy="115" rx="170" ry="85" fill="none" stroke="rgba(96, 165, 250, 0.13)" strokeWidth="1" strokeDasharray="5 7" />
          <ellipse cx="200" cy="115" rx="115" ry="58" fill="none" stroke="rgba(96, 165, 250, 0.22)" strokeWidth="1.2" strokeDasharray="4 6" />
          <ellipse cx="200" cy="115" rx="55" ry="28" fill="none" stroke="rgba(96, 165, 250, 0.3)" strokeWidth="1" />

          {/* Connected AST graph nodes */}
          <line x1="70" y1="75" x2="135" y2="115" stroke="rgba(96, 165, 250, 0.22)" strokeWidth="1" />
          <line x1="135" y1="115" x2="200" y2="85" stroke="rgba(96, 165, 250, 0.28)" strokeWidth="1" />
          <line x1="200" y1="85" x2="265" y2="135" stroke="rgba(96, 165, 250, 0.28)" strokeWidth="1" />
          <line x1="265" y1="135" x2="330" y2="95" stroke="rgba(96, 165, 250, 0.22)" strokeWidth="1" />

          <circle cx="70" cy="75" r="3" fill="#60a5fa" opacity="0.65" />
          <circle cx="135" cy="115" r="3.5" fill="#93c5fd" opacity="0.8" />
          <circle cx="200" cy="85" r="4.5" fill="#3b82f6" opacity="0.95" />
          <circle cx="265" cy="135" r="3.5" fill="#93c5fd" opacity="0.8" />
          <circle cx="330" cy="95" r="3" fill="#60a5fa" opacity="0.65" />

          {/* Star coordinates */}
          <polygon points="100,50 102,54 106,56 102,58 100,62 98,58 94,56 98,54" fill="#93c5fd" opacity="0.6" />
          <polygon points="305,160 307,163 310,165 307,167 305,170 303,167 300,165 303,163" fill="#60a5fa" opacity="0.5" />
        </svg>
      </div>
    );
  }

  if (id === "ignite") {
    return (
      <div className="project-mobile-atmosphere project-mobile-atmosphere--ignite" aria-hidden="true">
        <div className="atmosphere-radial-glow atmosphere-radial-glow--ignite" />
        <svg viewBox="0 0 400 240" preserveAspectRatio="none" className="atmosphere-svg-bg">
          {/* Topographic elevation contours (matching ignite.png) */}
          <path d="M-20,40 Q100,15 200,55 T420,30" fill="none" stroke="rgba(52, 211, 153, 0.16)" strokeWidth="1.2" />
          <path d="M-20,80 Q110,45 210,95 T420,70" fill="none" stroke="rgba(52, 211, 153, 0.28)" strokeWidth="1.5" />
          <path d="M-20,125 Q90,160 200,115 T420,135" fill="none" stroke="rgba(52, 211, 153, 0.22)" strokeWidth="1.3" />
          <path d="M-20,170 Q130,135 230,175 T420,155" fill="none" stroke="rgba(52, 211, 153, 0.15)" strokeWidth="1.1" />

          {/* Radar waypoint beacons */}
          <circle cx="85" cy="85" r="3.5" fill="#34d399" />
          <circle cx="85" cy="85" r="9" fill="none" stroke="#34d399" strokeWidth="1" opacity="0.45" />
          <circle cx="85" cy="85" r="15" fill="none" stroke="#34d399" strokeWidth="0.8" opacity="0.22" strokeDasharray="2 3" />

          <circle cx="315" cy="115" r="3.5" fill="#34d399" />
          <circle cx="315" cy="115" r="9" fill="none" stroke="#34d399" strokeWidth="1" opacity="0.45" />

          <circle cx="195" cy="155" r="2.5" fill="#38bdf8" opacity="0.8" />
          <circle cx="195" cy="155" r="7" fill="none" stroke="#38bdf8" strokeWidth="0.8" opacity="0.3" />
        </svg>
      </div>
    );
  }

  // SIRUS
  return (
    <div className="project-mobile-atmosphere project-mobile-atmosphere--sirus" aria-hidden="true">
      <div className="atmosphere-radial-glow atmosphere-radial-glow--sirus" />
      <svg viewBox="0 0 400 240" preserveAspectRatio="none" className="atmosphere-svg-bg">
        <defs>
          <linearGradient id="sirusGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#34d399" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="sirusArea" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Quant trading grid */}
        <line x1="0" y1="70" x2="400" y2="70" stroke="rgba(16, 185, 129, 0.08)" strokeWidth="1" strokeDasharray="4 6" />
        <line x1="0" y1="130" x2="400" y2="130" stroke="rgba(16, 185, 129, 0.12)" strokeWidth="1" />
        <line x1="0" y1="190" x2="400" y2="190" stroke="rgba(16, 185, 129, 0.08)" strokeWidth="1" strokeDasharray="4 6" />
        <line x1="120" y1="0" x2="120" y2="240" stroke="rgba(16, 185, 129, 0.07)" strokeWidth="1" strokeDasharray="4 6" />
        <line x1="260" y1="0" x2="260" y2="240" stroke="rgba(16, 185, 129, 0.07)" strokeWidth="1" strokeDasharray="4 6" />

        {/* Vectorized algorithmic trajectory */}
        <polygon points="0,150 50,135 105,142 160,105 210,118 270,75 320,85 400,40 400,210 0,210" fill="url(#sirusArea)" />
        <path d="M0,150 L50,135 L105,142 L160,105 L210,118 L270,75 L320,85 L400,40" fill="none" stroke="url(#sirusGrad)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

        {/* Diamond beacon coordinates */}
        <polygon points="160,100 164,105 160,110 156,105" fill="#34d399" opacity="0.85" />
        <polygon points="270,70 274,75 270,80 266,75" fill="#a7f3d0" opacity="0.95" />
        <polygon points="400,35 404,40 400,45 396,40" fill="#6ee7b7" opacity="0.9" />
      </svg>
    </div>
  );
}

export default function ProjectMobileCard({
  id,
  tagNumber,
  tagCategory,
  brandName,
  brandIcon,
  titlePrimary,
  titleHighlight,
  description,
  liveDemoUrl,
  techItems,
  theme,
  metrics,
  actionLabel,
}: ProjectMobileCardProps) {
  const projectMetrics = metrics || DEFAULT_METRICS[id] || [];
  const primaryAction = actionLabel || DEFAULT_ACTIONS[id] || "Launch Live Demo";

  return (
    <div className={`project-mobile-card project-mobile-card--${id}`}>
      {/* Dynamic Project Atmosphere Vector Layer */}
      {renderProjectAtmosphere(id)}

      {/* Top Header Bar: Brand pill + Live Demo button */}
      <div className="project-mobile-topbar">
        <div className="project-mobile-brand">
          <span className="project-mobile-brand-icon">{brandIcon}</span>
          <span className="project-mobile-brand-name">{brandName}</span>
          <span className="project-mobile-brand-indicator" />
        </div>

        <a
          className="live-demo-box-btn live-demo-box-btn--mobile"
          href={liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={`Open ${brandName} Live Demo`}
        >
          <span className="live-demo-pulse-dot"></span>
          <span className="live-demo-label">LIVE DEMO</span>
          <span className="live-demo-icon-box">
            <svg
              viewBox="0 0 24 24"
              width="11"
              height="11"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </span>
        </a>
      </div>

      {/* Central Showcase Console Frame */}
      <div className="project-mobile-body">
        <div className="project-mobile-hero-frame">
          {/* Category tag with glowing status dot */}
          <div className="project-mobile-category-tag">
            <span className="project-mobile-status-dot" />
            <span>{`${tagNumber} // ${tagCategory}`}</span>
          </div>

          {/* Crisp, commanding headline */}
          <h2 className="project-mobile-title">
            <span className="project-mobile-title-main">{titlePrimary}</span>
            <span className="project-mobile-title-highlight">{titleHighlight}</span>
          </h2>

          {/* Refined editorial description */}
          <p className="project-mobile-descr">{description}</p>

          {/* Engineering telemetry metrics row */}
          {projectMetrics.length > 0 && (
            <div className="project-mobile-metrics-row">
              {projectMetrics.map((metric, idx) => (
                <span key={idx} className="project-mobile-metric-chip">
                  <span className="metric-chip-dot">✦</span>
                  <span className="metric-chip-text">{metric}</span>
                </span>
              ))}
            </div>
          )}

          {/* Interactive Live Platform Action Button */}
          <div className="project-mobile-action-wrap">
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-mobile-action-btn"
              title={`Open ${brandName} Live Platform`}
            >
              <span>{primaryAction}</span>
              <svg
                viewBox="0 0 24 24"
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Dock: Compact interactive Tech Stack Badges */}
      <div className="project-mobile-dock-wrapper">
        <ProjectTechStack items={techItems} theme={theme} />
      </div>
    </div>
  );
}
