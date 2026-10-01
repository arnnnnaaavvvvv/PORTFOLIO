"use client";

import React from "react";

export default function VisionShowcaseSection() {
  return (
    <section className="vision-showcase-section" id="solutions">
      <div className="vision-showcase-container">
        {/* Rounded Avatar with Coral Border */}
        <div className="vision-avatar-card">
          <img
            src="/img/arnav_vision_dither.png"
            alt="Arnav Singh — Full-Stack & AI Solutions"
            className="vision-avatar-img"
          />
        </div>

        {/* Subtitle */}
        <p className="vision-subtitle">Your Vision. My Expertise.</p>

        {/* Main Oblique Headline */}
        <h2 className="vision-headline">
          <span className="vision-headline-line">FULL-STACK DEVELOPMENT</span>
          <span className="vision-headline-line">&amp; DESIGN SOLUTIONS</span>
        </h2>

        {/* Downward Navigation Cue */}
        <a
          href="#divider"
          className="vision-down-cue"
          aria-label="Scroll down to Selected Works"
        >
          <svg
            className="vision-down-arrow"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </a>
      </div>
    </section>
  );
}
