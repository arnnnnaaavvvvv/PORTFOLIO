"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ecosystemLinks = [
    { number: "[01]", label: "GitHub Profile", url: "https://github.com/arnnnnaaavvvvv" },
    { number: "[02]", label: "LinkedIn Network", url: "https://www.linkedin.com/in/arnav-singh-986722252" },
    { number: "[03]", label: "CLUDE Intelligence", url: "https://frontend-mu-roan-llgeruknl5.vercel.app" },
    { number: "[04]", label: "IGNITE GIS Engine", url: "https://ignite-lemon-nu.vercel.app/" },
    { number: "[05]", label: "SIRUS Quant Platform", url: "https://web-frontend-three-gamma.vercel.app/" },
  ];

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-hairline)",
        backgroundColor: "var(--bg-secondary)",
        paddingTop: "70px",
        paddingBottom: "40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="mxd-container">
        
        {/* Top Footer Row: Ecosystem List & Back to Top */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "36px",
            alignItems: "start",
            marginBottom: "60px",
          }}
        >
          {/* Ecosystem Column */}
          <div style={{ gridColumn: "span 12" }} className="footer-links-col">
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.74rem",
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                display: "block",
                marginBottom: "20px",
              }}
            >
              / Ecosystem Directory
            </span>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "14px",
              }}
            >
              {ecosystemLinks.map((item) => (
                <a
                  key={item.number}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 18px",
                    borderRadius: "10px",
                    backgroundColor: "var(--bg-primary)",
                    border: "1px solid var(--border-hairline)",
                    transition: "all var(--duration-micro) var(--ease-micro)",
                  }}
                  className="interactive-card"
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--accent-amber)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border-hairline)";
                    el.style.transform = "translateY(0)";
                  }}
                  data-cursor-text="Open"
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--accent-amber)" }}>
                      {item.number}
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem", fontWeight: 500, color: "var(--text-primary)" }}>
                      {item.label}
                    </span>
                  </div>
                  <svg width="11" height="11" viewBox="0 0 18 18" fill="var(--text-muted)">
                    <path d="M18,0v14.4h-3.6V7.2h-3.6V3.6H3.6V0H18z M7.2,10.8h3.6V7.2H7.2V10.8z M3.6,14.4h3.6v-3.6H3.6V14.4z M0,18h3.6v-3.6H0V18z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right Action: Back To Top */}
          <div
            style={{
              gridColumn: "span 12",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
            className="footer-action-col"
          >
            <button
              onClick={scrollToTop}
              className="btn-mxd"
              style={{ padding: "12px 24px" }}
              data-cursor-text="Top"
            >
              <span>Back to Top</span>
              <i>
                <svg width="12" height="12" viewBox="0 0 18 18" fill="currentColor">
                  <path d="M0,7.2h3.6v3.6H0V7.2z M10.8,3.6V0H7.2v3.6H3.6v3.6h3.6V18h3.6V7.2h3.6V3.6H10.8z M14.4,7.2v3.6H18V7.2H14.4z" />
                </svg>
              </i>
            </button>
          </div>
        </div>

        {/* Colossal Watermark Typography */}
        <div
          style={{
            userSelect: "none",
            pointerEvents: "none",
            textAlign: "center",
            lineHeight: 0.85,
            padding: "40px 0 20px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4.5rem, 16vw, 15rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "rgba(242, 240, 234, 0.04)",
              textTransform: "uppercase",
              display: "block",
            }}
          >
            ARNAV
          </span>
        </div>

        {/* Bottom Metadata & Copyright */}
        <div
          style={{
            borderTop: "1px solid var(--border-hairline)",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "14px",
            fontFamily: "var(--font-mono)",
            fontSize: "0.76rem",
            color: "var(--text-muted)",
          }}
        >
          <div>
            <span>© 2026 Arnav Singh · Full-Stack AI Engineer</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>Engineered with Next.js 14, Framer Motion & Lenis</span>
          </div>

          <div>
            <span style={{ color: "var(--text-dim)" }}>B.Tech CSE @ Chandigarh University</span>
          </div>
        </div>

      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .footer-links-col {
            grid-column: span 9 !important;
          }
          .footer-action-col {
            grid-column: span 3 !important;
            margin-top: 36px;
          }
        }
      `}</style>
    </footer>
  );
}
