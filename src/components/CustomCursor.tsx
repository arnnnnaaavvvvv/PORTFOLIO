"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      // Check if hovering over an element with data-cursor-text or an interactive link
      const target = (e.target as HTMLElement)?.closest("[data-cursor-text], a, button, .interactive-card");
      if (target) {
        setIsHovered(true);
        const text = target.getAttribute("data-cursor-text");
        setCursorText(text || "");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    let frameId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animateFollower = () => {
      setFollowerPos((prev) => ({
        x: lerp(prev.x, cursorPos.x, 0.18),
        y: lerp(prev.y, cursorPos.y, 0.18),
      }));
      frameId = requestAnimationFrame(animateFollower);
    };

    frameId = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(frameId);
    };
  }, [cursorPos.x, cursorPos.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central sharp dot */}
      <div
        style={{
          position: "fixed",
          top: cursorPos.y,
          left: cursorPos.x,
          width: isHovered ? "0px" : "6px",
          height: isHovered ? "0px" : "6px",
          backgroundColor: "var(--accent-amber)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "width 0.2s ease, height 0.2s ease, opacity 0.2s ease",
          opacity: isHovered ? 0 : 1,
        }}
      />

      {/* Trailing follower circle / text badge */}
      <div
        style={{
          position: "fixed",
          top: followerPos.y,
          left: followerPos.x,
          width: cursorText ? "auto" : isHovered ? "48px" : "28px",
          height: cursorText ? "auto" : isHovered ? "48px" : "28px",
          padding: cursorText ? "8px 16px" : 0,
          backgroundColor: isHovered
            ? cursorText
              ? "rgba(216, 169, 78, 0.95)"
              : "rgba(216, 169, 78, 0.15)"
            : "transparent",
          border: cursorText ? "none" : "1px solid var(--accent-amber)",
          borderRadius: "100px",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9998,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#0d1117",
          fontFamily: "var(--font-mono)",
          fontSize: "0.72rem",
          fontWeight: 600,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          transition: "transform 0.05s linear, width 0.25s var(--ease-quint), height 0.25s var(--ease-quint), background-color 0.25s var(--ease-quint)",
          whiteSpace: "nowrap",
          backdropFilter: cursorText ? "blur(4px)" : "none",
        }}
      >
        {cursorText}
      </div>
    </>
  );
}
