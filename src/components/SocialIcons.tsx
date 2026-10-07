"use client";

import React from "react";
import { Mail } from "lucide-react";

export interface SocialLink {
  name: string;
  href: string;
  ariaLabel: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/arnnnnaaavvvvv",
    ariaLabel: "GitHub profile",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/arnav-singh-986722252",
    ariaLabel: "LinkedIn profile",
  },
  {
    name: "Email",
    href: "mailto:arnav152007@gmail.com",
    ariaLabel: "Send email",
  },
  {
    name: "X",
    href: "https://x.com/",
    ariaLabel: "X (formerly Twitter) profile",
  },
];

export default function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`footer-social-icons ${className}`.trim()}>
      {/* GitHub - Lucide style outline (strokeWidth 1.8, size 20) */}
      <a
        href="https://github.com/arnnnnaaavvvvv"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-icon-link"
        aria-label="GitHub profile"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      </a>

      {/* LinkedIn - Lucide style outline (strokeWidth 1.8, size 20) */}
      <a
        href="https://www.linkedin.com/in/arnav-singh-986722252"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-icon-link"
        aria-label="LinkedIn profile"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>

      {/* Mail - Lucide-react (strokeWidth 1.8, size 20) */}
      <a
        href="mailto:arnav152007@gmail.com"
        className="footer-icon-link"
        aria-label="Send email"
      >
        <Mail size={20} strokeWidth={1.8} />
      </a>

      {/* X / Twitter - Modern stroke outline (strokeWidth 1.8, size 20) */}
      <a
        href="https://x.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-icon-link"
        aria-label="X (formerly Twitter) profile"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      </a>
    </div>
  );
}
