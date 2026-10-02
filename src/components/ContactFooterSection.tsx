"use client";

import React from "react";

export default function ContactFooterSection() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="contact-last-page" id="contact">
      <div className="contact-container">
        {/* Top Header Row: Status & Back to Top */}
        <div className="contact-top-row">
          <div className="contact-pill-status">
            <span className="contact-green-dot" />
            <span className="contact-pill-text">OPEN TO OPPORTUNITIES</span>
          </div>

          <button
            type="button"
            onClick={handleBackToTop}
            className="contact-pill-back-btn"
            aria-label="Scroll back to top"
          >
            <span className="contact-pill-text">BACK TO TOP</span>
            <span className="contact-white-dot" />
          </button>
        </div>

        {/* Headline & CTA Button */}
        <div className="contact-cta-block">
          <h2 className="contact-brush-title">
            HAVE A PROJECT OR A ROLE IN MIND?
          </h2>
          <div className="contact-capsule-wrapper">
            <a
              href="mailto:arnav152007@gmail.com"
              className="contact-luxury-capsule-btn"
              title="Get in touch with Arnav Singh"
            >
              {/* Left: 3D Coffee Cup with Sparkles and Orbital Glow */}
              <div className="capsule-icon-wrap">
                <span className="capsule-sparkle sparkle-top" aria-hidden="true">✦</span>
                <img
                  src="/img/coffee_cup.jpg"
                  alt="Coffee and collaboration"
                  className="capsule-coffee-img"
                />
                <span className="capsule-sparkle sparkle-bottom" aria-hidden="true">✦</span>
              </div>

              {/* Middle: Primary Text Hierarchy */}
              <div className="capsule-text-col">
                <span className="capsule-pre-label">LET&apos;S BUILD SOMETHING</span>
                <span className="capsule-main-title">GET IN TOUCH</span>
              </div>

              {/* Right: Circular Action Arrow */}
              <div className="capsule-action-circle" aria-hidden="true">
                <span className="capsule-arrow-icon">→</span>
              </div>
            </a>
          </div>
        </div>

        {/* Centerpiece Name Watermark */}
        <div className="contact-name-centerpiece" aria-hidden="true">
          <h1 className="contact-big-name">
            ARNAV SINGH
          </h1>
        </div>

        {/* Bottom Navigation Footer Grid */}
        <footer className="contact-bottom-footer">
          {/* Column 1: Explore */}
          <div className="contact-footer-column">
            <span className="contact-footer-heading">EXPLORE</span>
            <ul className="contact-footer-links">
              <li>
                <a href="#hero">
                  <span>Home</span>
                  <span className="footer-link-subcue">/ 01</span>
                </a>
              </li>
              <li>
                <a href="#works">
                  <span>Projects</span>
                  <span className="footer-link-subcue">/ 02</span>
                </a>
              </li>
              <li>
                <a href="#insights">
                  <span>Achievements</span>
                  <span className="footer-link-subcue">/ 03</span>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <span>Contact</span>
                  <span className="footer-link-subcue">/ 04</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Connect */}
          <div className="contact-footer-column">
            <span className="contact-footer-heading">CONNECT</span>
            <ul className="contact-footer-links">
              <li>
                <a
                  href="https://github.com/arnnnnaaavvvvv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>GitHub</span>
                  <span className="footer-link-external-icon">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/arnav-singh-986722252"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>LinkedIn</span>
                  <span className="footer-link-external-icon">↗</span>
                </a>
              </li>
              <li>
                <a href="mailto:arnav152007@gmail.com">
                  <span>Email</span>
                  <span className="footer-link-external-icon">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Say Hello */}
          <div className="contact-footer-column contact-footer-say-hello">
            <span className="contact-footer-heading">SAY HELLO</span>
            <p className="contact-say-hello-subtitle">
              Have an exciting opportunity or want to build together? Drop me a line anytime.
            </p>
            <div className="contact-footer-links">
              <a
                href="mailto:arnav152007@gmail.com"
                className="contact-footer-email-box"
              >
                <span className="contact-footer-email-text">arnav152007@gmail.com</span>
                <span className="contact-footer-email-arrow">→</span>
              </a>
            </div>
          </div>
        </footer>

        {/* Bottom Sub-bar */}
        <div className="contact-sub-bar">
          <p className="contact-sub-bar-left">
            © 2026 ARNAV SINGH. ALL RIGHTS RESERVED.
          </p>
          <p className="contact-sub-bar-right">
            AUTONOMOUS AI SYSTEMS &amp; FULL-STACK ARCHITECTURE
          </p>
        </div>
      </div>
    </section>
  );
}
