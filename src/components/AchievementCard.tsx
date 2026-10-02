import React from "react";

export default function AchievementCard() {
  return (
    <div className="achievement-card-container">
      <div className="achievement-card">
        {/* Certificate Preview Left Column */}
        <div className="achievement-cert-col">
          <a
            href="/img/achievements/ieee-idea2impact-cert.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="achievement-cert-link"
            title="Click to view full ultra-HD certificate"
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
          {/* Header row with 2026 badge */}
          <div className="achievement-header-row">
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
              <div className="achievement-team-text">
                <span className="achievement-team-name">TEAM DIGITAL DESTROYER</span>
                <span className="achievement-team-org">
                  IEEE Computational Intelligence Society
                </span>
              </div>
            </div>

            <a
              href="/img/achievements/ieee-idea2impact-cert.pdf"
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
