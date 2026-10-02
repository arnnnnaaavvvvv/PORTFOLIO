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
          <div>
            <a
              href="mailto:arnav152007@gmail.com"
              className="contact-touch-btn"
            >
              <span>LET&apos;S GET IN TOUCH</span>
              <span className="contact-touch-arrow">→</span>
            </a>
          </div>
        </div>

        {/* Centerpiece Name Watermark */}
        <div className="contact-name-centerpiece" aria-hidden="true">
          <h1 className="contact-big-name">
            ARNAV SINGH
          </h1>
        </div>

        {/* Bottom Three-Column Navigation Footer */}
        <footer className="contact-bottom-footer">
          {/* Column 1: Explore */}
          <div className="contact-footer-column">
            <span className="contact-footer-heading">EXPLORE</span>
            <ul className="contact-footer-links">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#works">Projects</a>
              </li>
              <li>
                <a href="#insights">Achievements</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
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
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/arnav-singh-986722252"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:arnav152007@gmail.com">
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Say Hello */}
          <div className="contact-footer-column contact-footer-say-hello">
            <span className="contact-footer-heading">SAY HELLO</span>
            <div className="contact-footer-links">
              <a
                href="mailto:arnav152007@gmail.com"
                className="contact-footer-email"
              >
                arnav152007@gmail.com
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
