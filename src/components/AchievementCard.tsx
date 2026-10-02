import React from "react";

export default function AchievementCard() {
  return (
    <div className="achievement-card-container">
      <div className="achievement-card">
        {/* Certificate Preview Left Column */}
        <div className="achievement-cert-col">
          <a
            href="/img/achievements/ieee-idea2impact-cert.png"
            target="_blank"
            rel="noopener noreferrer"
            className="achievement-cert-link"
            title="Click to view full certificate"
          >
            <div className="achievement-cert-frame">
              <img
                src="/img/achievements/ieee-idea2impact-cert.png"
                alt="Certificate of Participation - IEEE Idea2Impact 2026 - Arnav Singh"
                className="achievement-cert-img"
              />
            </div>
          </a>
        </div>

        {/* Details Right Column */}
        <div className="achievement-info-col">
          {/* Top meta row */}
          <div className="achievement-meta-row">
            <span className="achievement-label">ACHIEVEMENT</span>
            <span className="achievement-divider-line" />
            <span className="achievement-year-badge">2026</span>
          </div>

          {/* Title and Subtitle */}
          <h3 className="achievement-title">IEEE IDEA2IMPACT 2026</h3>
          <p className="achievement-subtitle">
            National Innovation Challenge · Top 15 Finalist Team
          </p>

          {/* Description */}
          <p className="achievement-desc">
            Selected among the{" "}
            <strong>Top 15 finalist teams</strong> at IEEE Idea2Impact 2026,
            a national-level innovation challenge, as a member of{" "}
            <strong>Team Digital Destroyer</strong>, contributing to the
            development and presentation of our solution through the competition.
          </p>

          {/* Bottom row: Team info & View button */}
          <div className="achievement-footer-row">
            <div className="achievement-team-info">
              <div className="achievement-team-icon">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="achievement-team-text">
                <span className="achievement-team-name">TEAM DIGITAL DESTROYER</span>
                <span className="achievement-team-org">
                  IEEE Computational Intelligence Society
                </span>
              </div>
            </div>

            <a
              href="/img/achievements/ieee-idea2impact-cert.png"
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-action-btn"
            >
              <span>VIEW ACHIEVEMENT</span>
              <span className="achievement-btn-arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
