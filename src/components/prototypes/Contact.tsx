"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
import { fadeUpVariant } from "@/lib/motion";

interface ContactChannel {
  label: string;
  value: string;
  href: string;
  isExternal?: boolean;
  copyable?: boolean;
}

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const channels: ContactChannel[] = [
    {
      label: "Email",
      value: "arnav152007@gmail.com",
      href: "mailto:arnav152007@gmail.com",
      copyable: true,
    },
    {
      label: "Phone / WhatsApp",
      value: "+91 8423622491",
      href: "tel:+918423622491",
      copyable: true,
    },
    {
      label: "GitHub",
      value: "github.com/arnnnnaaavvvvv",
      href: "https://github.com/arnnnnaaavvvvv",
      isExternal: true,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/arnav-singh-986722252",
      href: "https://www.linkedin.com/in/arnav-singh-986722252",
      isExternal: true,
    },
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(label);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  return (
    <section
      id="contact"
      className="section-pad hairline-bottom"
      style={{ position: "relative" }}
    >
      <div className="portfolio-container">
        
        {/* Section Label */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ marginBottom: "28px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--accent-amber)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {"// 03 Direct Contact"}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ marginBottom: "48px" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              maxWidth: "680px",
              lineHeight: 1.2,
            }}
          >
            Let&apos;s build production-grade, high-throughput systems together.
          </h2>
        </motion.div>

        {/* Contact Channels Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {channels.map((channel, idx) => (
            <motion.div
              key={channel.label}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={idx * 0.08}
            >
              <Magnetic maxDistance={6} style={{ width: "100%" }}>
                <div
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border-hairline)",
                    borderRadius: "8px",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "130px",
                    transition: "border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-active)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-hairline)")}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {channel.label}
                    </span>

                    {channel.copyable && (
                      <button
                        onClick={() => handleCopy(channel.value, channel.label)}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          color: copiedKey === channel.label ? "var(--accent-amber)" : "var(--text-muted)",
                          border: "1px solid var(--border-hairline)",
                          padding: "2px 8px",
                          borderRadius: "4px",
                          backgroundColor: "var(--bg-primary)",
                        }}
                        data-cursor="hover"
                      >
                        {copiedKey === channel.label ? "Copied" : "Copy"}
                      </button>
                    )}
                  </div>

                  <a
                    href={channel.href}
                    target={channel.isExternal ? "_blank" : undefined}
                    rel={channel.isExternal ? "noopener noreferrer" : undefined}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.92rem",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "8px",
                      marginTop: "16px",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-amber)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                    data-cursor="hover"
                  >
                    <span style={{ wordBreak: "break-all" }}>{channel.value}</span>
                    <span style={{ fontSize: "0.85rem" }}>↗</span>
                  </a>
                </div>
              </Magnetic>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
