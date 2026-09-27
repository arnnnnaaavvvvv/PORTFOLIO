"use client";

import React from "react";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      {/* LEFT: Social icon links */}
      <div className="footer-col-left">
        <SocialIcons />
      </div>

      {/* CENTER: Copyright notice */}
      <div className="footer-col-center">
        <span>© 2026 Arnav Singh</span>
      </div>

      {/* RIGHT: Resume link */}
      <div className="footer-col-right">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-resume-link"
        >
          <span>FETCH</span>
          <span className="resume-sep">{"//"}</span>
          <span>RESUME</span>
        </a>
      </div>
    </footer>
  );
}
