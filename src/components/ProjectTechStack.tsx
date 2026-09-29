"use client";

import React, { useState } from "react";

interface TechItem {
  name: string;
  category: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: React.ReactNode;
}

const TECH_STACKS: TechItem[] = [
  {
    name: "Next.js",
    category: "Frontend",
    color: "#000000",
    bgColor: "rgba(0, 0, 0, 0.04)",
    borderColor: "rgba(0, 0, 0, 0.12)",
    icon: (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none">
        <circle cx="12" cy="12" r="12" fill="#000" />
        <path d="M14.9 16.5L8.5 8.2V15.8H7.2V7.5H8.7L15.3 16V7.5H16.6V16.5H14.9Z" fill="#FFF" />
        <path d="M16.6 7.5L12 13.5V14.5L16.6 8.5V7.5Z" fill="url(#nextG)" />
        <defs>
          <linearGradient id="nextG" x1="12" y1="7.5" x2="16.6" y2="14.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Language",
    color: "#3178C6",
    bgColor: "rgba(49, 120, 198, 0.08)",
    borderColor: "rgba(49, 120, 198, 0.25)",
    icon: (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M11.5 11.2V9.5H5V11.2H7.2V18H9.3V11.2H11.5ZM13.8 15.5C14.2 16.2 14.8 16.5 15.6 16.5C16.4 16.5 16.9 16.2 16.9 15.7C16.9 15.2 16.6 14.9 15.4 14.5C13.8 14 12.8 13.4 12.8 11.8C12.8 10.3 14 9.3 15.8 9.3C17.1 9.3 18.2 9.8 18.8 10.9L17.2 12C16.9 11.5 16.4 11.1 15.7 11.1C15 11.1 14.6 11.4 14.6 11.8C14.6 12.2 14.9 12.4 16.1 12.8C17.9 13.3 18.8 14.1 18.8 15.6C18.8 17.2 17.5 18.2 15.5 18.2C13.9 18.2 12.8 17.4 12.1 16.2L13.8 15.5Z" fill="#FFF" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    color: "#06B6D4",
    bgColor: "rgba(6, 182, 212, 0.08)",
    borderColor: "rgba(6, 182, 212, 0.25)",
    icon: (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="#06B6D4">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "FastAPI",
    category: "Backend",
    color: "#009688",
    bgColor: "rgba(0, 150, 136, 0.08)",
    borderColor: "rgba(0, 150, 136, 0.25)",
    icon: (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none">
        <circle cx="12" cy="12" r="12" fill="#009688" />
        <path d="M12.8 3L6 13.2H11.5L10.2 21L18 10.8H12.5L12.8 3Z" fill="#FFF" />
      </svg>
    ),
  },
  {
    name: "Python",
    category: "Core Engine",
    color: "#3776AB",
    bgColor: "rgba(55, 118, 171, 0.08)",
    borderColor: "rgba(55, 118, 171, 0.25)",
    icon: (
      <svg viewBox="0 0 24 24" width="17" height="17">
        <path d="M11.9 2C6.7 2 7 4.3 7 4.3V6.6H12V7.4H5.1C2.9 7.4 2 9.7 2 12.1c0 2.4 1.8 3.5 3.5 3.5H7v-2.3c0-2.3 2-4.3 4.3-4.3h4.6c1.3 0 2.3-1 2.3-2.3V4.3C18.2 2.7 15.6 2 11.9 2zm-2.2 1.8c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" fill="#387EB8" />
        <path d="M12.1 22c5.2 0 4.9-2.3 4.9-2.3v-2.3H12v-.8h6.9c2.2 0 3.1-2.3 3.1-4.7 0-2.4-1.8-3.5-3.5-3.5H17v2.3c0 2.3-2 4.3-4.3 4.3H8.1c-1.3 0-2.3 1-2.3 2.3v2.4C5.8 21.3 8.4 22 12.1 22zm2.2-1.8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#FFE052" />
      </svg>
    ),
  },
  {
    name: "TensorFlow/Keras",
    category: "Deep Learning",
    color: "#FF6F00",
    bgColor: "rgba(255, 111, 0, 0.08)",
    borderColor: "rgba(255, 111, 0, 0.25)",
    icon: (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none">
        <path d="M12 2L3 7.2V16.8L6.8 19V11.2L12 14.2V22L21 16.8V7.2L12 2Z" fill="#FF6F00" />
        <path d="M12 2L21 7.2V16.8L17.2 19V11.2L12 8.2V2Z" fill="#FFA800" />
      </svg>
    ),
  },
  {
    name: "EEG Signal Processing",
    category: "Biosignals",
    color: "#8B5CF6",
    bgColor: "rgba(139, 92, 246, 0.08)",
    borderColor: "rgba(139, 92, 246, 0.25)",
    icon: (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#8B5CF6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h3l2-6 3 12 3-9 2 6 2-3h5" />
      </svg>
    ),
  },
  {
    name: "SST",
    category: "Cloud Infra",
    color: "#F3663F",
    bgColor: "rgba(243, 102, 63, 0.08)",
    borderColor: "rgba(243, 102, 63, 0.25)",
    icon: (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none">
        <rect width="24" height="24" rx="5" fill="#F3663F" />
        <path d="M7 16.5C7.8 17.5 9 18 10.5 18C13 18 14.5 16.5 14.5 14.5C14.5 11.5 7.5 12.5 7.5 9C7.5 7.2 9 6 11 6C12.3 6 13.5 6.6 14.2 7.5" stroke="#FFF" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL/pgvector",
    category: "Vector Database",
    color: "#336791",
    bgColor: "rgba(51, 103, 145, 0.08)",
    borderColor: "rgba(51, 103, 145, 0.25)",
    icon: (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none">
        <circle cx="12" cy="12" r="12" fill="#336791" />
        <path d="M12 4C8.5 4 6 6.5 6 9.8c0 3.2 1.8 5.4 3.7 6.4v2.8h2.6v-2.2c.6.1 1.1.2 1.7.2 4.2 0 7-3 7-7.2C21 6.5 17 4 12 4zm0 2.2c3.2 0 5 1.8 5 4.8 0 3-1.8 5-4.8 5-.4 0-.8 0-1.2-.1V8.5h-2v5.8c-1.2-.8-2-2.3-2-4.5 0-2.3 1.8-3.6 5-3.6z" fill="#FFF" />
      </svg>
    ),
  },
  {
    name: "RAG",
    category: "AI Architecture",
    color: "#10B981",
    bgColor: "rgba(16, 185, 129, 0.08)",
    borderColor: "rgba(16, 185, 129, 0.25)",
    icon: (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none">
        <rect width="24" height="24" rx="5" fill="#10B981" />
        <path d="M6 7h12M6 12h8M6 17h5" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16.5" cy="15.5" r="2.5" stroke="#FFF" strokeWidth="1.8" />
        <path d="M18.5 17.5l2 2" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "OpenAI API",
    category: "LLM Intelligence",
    color: "#10A37F",
    bgColor: "rgba(16, 163, 127, 0.08)",
    borderColor: "rgba(16, 163, 127, 0.25)",
    icon: (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="#10A37F">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 8.783a4.485 4.485 0 0 1 2.366-1.973v5.685a.767.767 0 0 0 .387.676l5.814 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 8.783zm16.597 3.855l-5.833-3.387L15.119 8.1a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.68zm2.01-4.08l-.14-.085-4.773-2.782a.776.776 0 0 0-.785 0L9.409 9.06V6.727a.08.08 0 0 1 .033-.062L14.28 3.87a4.5 4.5 0 0 1 6.67 4.688zM8.88 13.585l2.404-1.39 2.404 1.39v2.776l-2.404 1.39-2.404-1.39z" />
      </svg>
    ),
  },
  {
    name: "Docker",
    category: "Containers",
    color: "#2496ED",
    bgColor: "rgba(36, 150, 237, 0.08)",
    borderColor: "rgba(36, 150, 237, 0.25)",
    icon: (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="#2496ED">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.714h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185M23.76 10.87c-.365-.58-1.077-.91-1.78-.835a3.35 3.35 0 00-.79.17 6.14 6.14 0 00-3.687-2.51l-.27-.058-.15.23a4.93 4.93 0 00-.54 1.25H.185A.186.186 0 000 9.31v5.19c0 1.21.36 2.37 1.04 3.37a8.55 8.55 0 005.12 3.65c3.24.84 6.64.44 9.57-1.13a11.16 11.16 0 004.83-5.28c.45-.96.67-1.99.66-3.04.88-.34 1.48-1.08 1.54-1.2" />
      </svg>
    ),
  },
];

export default function ProjectTechStack() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="project-techstack-dock">
      {/* Label / Header badge */}
      <div className="project-techstack-header">
        <span className="techstack-dot"></span>
        <span className="techstack-label">TECH STACK</span>
      </div>

      {/* Interactive Tech Stack Badges */}
      <div className="project-techstack-grid">
        {TECH_STACKS.map((tech, idx) => {
          const isHovered = hoveredIdx === idx;
          return (
            <div
              key={tech.name}
              className="techstack-badge"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                borderColor: isHovered ? tech.borderColor : "rgba(226, 232, 240, 0.9)",
                boxShadow: isHovered
                  ? `0 6px 18px ${tech.bgColor}, 0 2px 6px rgba(0,0,0,0.06)`
                  : "0 2px 6px rgba(0, 0, 0, 0.03)",
                transform: isHovered ? "translateY(-3px) scale(1.03)" : "translateY(0) scale(1)",
              }}
            >
              <span className="techstack-icon">{tech.icon}</span>
              <span className="techstack-name">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
