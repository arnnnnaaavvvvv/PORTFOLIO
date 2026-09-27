"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <section id="contact" style={{ padding: "100px 0", borderTop: "1px solid var(--border-hairline)", position: "relative" }}>
      
      {/* Dynamic Marquee Ribbon */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          backgroundColor: "var(--bg-secondary)",
          borderBottom: "1px solid var(--border-hairline)",
          padding: "20px 0",
          marginBottom: "70px",
          userSelect: "none",
        }}
        data-cursor-text="Connect"
      >
        <div className="marquee-track" style={{ animationDuration: "24s" }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{ display: "inline-flex", alignItems: "center", gap: "28px", paddingRight: "28px" }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  whiteSpace: "nowrap",
                }}
              >
                LET&apos;S TALK ABOUT YOUR SYSTEM ARCHITECTURE
              </span>
              <span style={{ color: "var(--accent-amber)", fontSize: "1.8rem" }}>✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mxd-container">
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "36px",
            alignItems: "start",
          }}
        >
          {/* Left Column: Direct Inquiries Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            style={{ gridColumn: "span 12" }}
            className="contact-left-col"
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                color: "var(--accent-amber)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              / 04 Initiate Contact
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginTop: "12px",
                marginBottom: "20px",
              }}
            >
              Ready to engineer high-signal systems together.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "var(--text-dim)",
                maxWidth: "520px",
                marginBottom: "32px",
              }}
            >
              Whether you are looking to hire a Full-Stack AI Engineer, architect a causal evaluation pipeline, or deploy low-latency distributed backends, reach out directly.
            </p>

            {/* Quick Action Button */}
            <a
              href="mailto:arnav152007@gmail.com?subject=Engineering%20Inquiry%20via%20Portfolio"
              className="btn-solid-amber"
              style={{ padding: "14px 32px", fontSize: "0.9rem" }}
              data-cursor-text="Send Email"
            >
              <span>Write a Line to Arnav</span>
              <svg width="14" height="14" viewBox="0 0 18 18" fill="currentColor">
                <path d="M18,0v14.4h-3.6V7.2h-3.6V3.6H3.6V0H18z M7.2,10.8h3.6V7.2H7.2V10.8z M3.6,14.4h3.6v-3.6H3.6V14.4z M0,18h3.6v-3.6H0V18z" />
              </svg>
            </a>
          </motion.div>

          {/* Right Column: Direct Channels Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            style={{ gridColumn: "span 12" }}
            className="contact-right-col"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              
              {/* Channel 1: Email */}
              <div
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border-hairline)",
                  borderRadius: "16px",
                  padding: "24px 28px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "14px",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    Primary Email
                  </span>
                  <a
                    href="mailto:arnav152007@gmail.com"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      letterSpacing: "0.02em",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent-amber)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
                    data-cursor-text="Email"
                  >
                    arnav152007@gmail.com
                  </a>
                </div>

                <button
                  onClick={() => handleCopy("arnav152007@gmail.com", "email")}
                  className="btn-mxd"
                  style={{ padding: "8px 16px", fontSize: "0.74rem" }}
                  data-cursor-text="Copy"
                >
                  <span>{copied === "email" ? "Copied! ✓" : "Copy Email"}</span>
                </button>
              </div>

              {/* Channel 2: Phone */}
              <div
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border-hairline)",
                  borderRadius: "16px",
                  padding: "24px 28px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "14px",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    Direct Contact / WhatsApp
                  </span>
                  <a
                    href="tel:+918423622491"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      letterSpacing: "0.02em",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent-amber)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
                    data-cursor-text="Call"
                  >
                    +91 8423622491
                  </a>
                </div>

                <button
                  onClick={() => handleCopy("+918423622491", "phone")}
                  className="btn-mxd"
                  style={{ padding: "8px 16px", fontSize: "0.74rem" }}
                  data-cursor-text="Copy"
                >
                  <span>{copied === "phone" ? "Copied! ✓" : "Copy Number"}</span>
                </button>
              </div>

              {/* Channel 3: LinkedIn */}
              <div
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border-hairline)",
                  borderRadius: "16px",
                  padding: "24px 28px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "14px",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    Professional Network
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    linkedin.com/in/arnav-singh
                  </span>
                </div>

                <a
                  href="https://www.linkedin.com/in/arnav-singh-986722252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-mxd"
                  style={{ padding: "8px 16px", fontSize: "0.74rem" }}
                  data-cursor-text="Open"
                >
                  <span>Visit Profile ↗</span>
                </a>
              </div>

              {/* Channel 4: GitHub */}
              <div
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border-hairline)",
                  borderRadius: "16px",
                  padding: "24px 28px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "14px",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    Code & Repositories
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    github.com/arnnnnaaavvvvv
                  </span>
                </div>

                <a
                  href="https://github.com/arnnnnaaavvvvv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-mxd"
                  style={{ padding: "8px 16px", fontSize: "0.74rem" }}
                  data-cursor-text="Open"
                >
                  <span>Visit GitHub ↗</span>
                </a>
              </div>

            </div>
          </motion.div>

        </div>

      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .contact-left-col {
            grid-column: span 5 !important;
          }
          .contact-right-col {
            grid-column: span 7 !important;
          }
        }
      `}</style>
    </section>
  );
}
