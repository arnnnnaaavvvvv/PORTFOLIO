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
}: ProjectMobileCardProps) {
  return (
    <div className={`project-mobile-card project-mobile-card--${id}`}>
      {/* Top Header Bar: Brand pill + Live Demo button */}
      <div className="project-mobile-topbar">
        <div className="project-mobile-brand">
          <span className="project-mobile-brand-icon">{brandIcon}</span>
          <span className="project-mobile-brand-name">{brandName}</span>
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

      {/* Main Content Area: Category badge + Crisp headline + Subtitle */}
      <div className="project-mobile-body">
        <div className="project-mobile-category-tag">
          <span>{`${tagNumber} // ${tagCategory}`}</span>
        </div>

        <h2 className="project-mobile-title">
          {titlePrimary}
          <span className="project-mobile-title-highlight">{titleHighlight}</span>
        </h2>

        <p className="project-mobile-descr">{description}</p>
      </div>

      {/* Bottom Dock: Compact interactive Tech Stack Badges */}
      <div className="project-mobile-dock-wrapper">
        <ProjectTechStack items={techItems} theme={theme} />
      </div>
    </div>
  );
}
