"use client";

import React from "react";
import SocialIcons from "./SocialIcons";

export default function Footer({ className = "" }: { className?: string }) {
  return (
    <footer className={`portfolio-footer ${className}`.trim()}>
      {/* LEFT: Social icon links */}
      <div className="footer-col-left">
        <SocialIcons />
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
