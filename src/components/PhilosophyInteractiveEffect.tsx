"use client";

import React, { useEffect, useRef, useState } from "react";

export default function PhilosophyInteractiveEffect() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [trailState, setTrailState] = useState<{
    visible: boolean;
    d: string;
    opacity: number;
    headX: number;
    headY: number;
  }>({
    visible: false,
    d: "",
    opacity: 0,
    headX: 0,
    headY: 0,
  });

  useEffect(() => {
    const section = document.getElementById("services");
    if (!section) return;

    let isDistorting = false;
    let distortTimeout: NodeJS.Timeout | null = null;
    let prevActiveIndex = -1;
    let rafId: number | null = null;

    const checkProximity = () => {
      const content = section.querySelector<HTMLElement>(".mxd-dv-sticky-cap__content");
      const captionText = section.querySelector<HTMLElement>(".mxd-dv-sticky-cap__text.permanent");
      const items = section.querySelectorAll<HTMLElement>(".scroll-images-row__item");

      if (!content || !captionText || items.length === 0) {
        rafId = requestAnimationFrame(checkProximity);
        return;
      }

      const textRect = captionText.getBoundingClientRect();
      const textCenterX = textRect.left + textRect.width / 2;
      const textCenterY = textRect.top + textRect.height / 2;

      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      const isMobile = viewportWidth < 768;

      let maxProximity = 0;
      let activeItemIndex = -1;
      let activeObjRect: DOMRect | null = null;
      let activeSide: "left" | "right" | "center" = "center";

      for (let index = 0; index < items.length; index++) {
        const item = items[index];
        const obj = item.querySelector<HTMLElement>(".scroll-images-row__obj");
        if (!obj) continue;
        const rect = obj.getBoundingClientRect();

        // If card is far off-screen, clear any glow and continue
        if (rect.bottom < -100 || rect.top > viewportHeight + 100) {
          obj.classList.remove("has-edge-glow");
          continue;
        }

        const objCenterX = rect.left + rect.width / 2;
        const objCenterY = rect.top + rect.height / 2;

        const dy = Math.abs(objCenterY - textCenterY);
        const dx = Math.abs(objCenterX - textCenterX);

        // Calculate actual physical overlap with the text
        const overlapTop = Math.max(rect.top, textRect.top);
        const overlapBottom = Math.min(rect.bottom, textRect.bottom);
        const overlapHeight = Math.max(0, overlapBottom - overlapTop);

        // Proximity is based on whether the card is actually behind the text
        let proximity = 0;
        if (overlapHeight > 0) {
          // Card is physically behind the text
          const coverageRatio = Math.min(1, overlapHeight / (textRect.height * 0.35));
          proximity = coverageRatio * coverageRatio * (3 - 2 * coverageRatio);
        }

        // Horizontal factor: check if horizontally close or overlapping
        const isHorizontalOverlap = rect.right > textRect.left - 40 && rect.left < textRect.right + 40;
        if (isHorizontalOverlap) {
          proximity = proximity * 1.15;
        } else {
          const maxLateral = viewportWidth * 0.65;
          const lateralFactor = Math.max(0.2, 1 - (dx / maxLateral));
          proximity = proximity * lateralFactor;
        }

        proximity = Math.max(0, Math.min(1, proximity));

        if (proximity > maxProximity) {
          maxProximity = proximity;
          activeItemIndex = index;
          activeObjRect = rect;
          activeSide = objCenterX < textCenterX ? "left" : objCenterX > textCenterX ? "right" : "center";
        }

        // Card edge glow when near or on text
        const distToTextCenter = Math.hypot(objCenterX - textCenterX, objCenterY - textCenterY);
        if (distToTextCenter < 380) {
          obj.classList.add("has-edge-glow");
        } else {
          obj.classList.remove("has-edge-glow");
        }
      }

      // --- 1. ADAPTIVE TYPOGRAPHY TRANSITION ---
      if (maxProximity > 0.25) {
        content.classList.add("philosophy-text-illuminated");

        // Trigger subtle horizontal distortion & blur on entry (~150-250ms)
        if (prevActiveIndex !== activeItemIndex && maxProximity > 0.32 && !isDistorting) {
          isDistorting = true;
          captionText.classList.add("is-distorting");
          if (distortTimeout) clearTimeout(distortTimeout);
          distortTimeout = setTimeout(() => {
            captionText.classList.remove("is-distorting");
            isDistorting = false;
          }, 220);
        }
      } else {
        content.classList.remove("philosophy-text-illuminated");
      }

      prevActiveIndex = activeItemIndex;

      // --- 2. DYNAMIC LIGHT TRAIL BEAM ---
      if (!isMobile && maxProximity > 0.22 && activeObjRect) {
        let startX = 0;
        let startY = activeObjRect.top + activeObjRect.height * 0.45;

        if (activeSide === "left") {
          startX = activeObjRect.right - 4;
        } else if (activeSide === "right") {
          startX = activeObjRect.left + 4;
        } else {
          startX = activeObjRect.left + activeObjRect.width * 0.5;
          startY = activeObjRect.top < textCenterY ? activeObjRect.bottom - 4 : activeObjRect.top + 4;
        }

        let endX = 0;
        let endY = textRect.top + textRect.height * 0.5;

        if (activeSide === "left") {
          endX = textRect.left + 20;
        } else if (activeSide === "right") {
          endX = textRect.right - 20;
        } else {
          endX = textCenterX;
          endY = activeObjRect.top < textCenterY ? textRect.top + 10 : textRect.bottom - 10;
        }

        const deltaX = endX - startX;
        const deltaY = endY - startY;

        let pathD = "";
        if (Math.abs(deltaX) > 50) {
          const cp1X = startX + deltaX * 0.45;
          const cp1Y = startY + deltaY * 0.1 - 40;
          const cp2X = startX + deltaX * 0.8;
          const cp2Y = endY - 20;
          pathD = `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;
        } else {
          const cp1X = startX + (startX < viewportWidth / 2 ? 60 : -60);
          const cp1Y = startY + deltaY * 0.5;
          pathD = `M ${startX} ${startY} Q ${cp1X} ${cp1Y}, ${endX} ${endY}`;
        }

        const opacity = Math.min(1, Math.max(0, (maxProximity - 0.22) * 1.5));

        setTrailState({
          visible: true,
          d: pathD,
          opacity,
          headX: startX,
          headY: startY,
        });
      } else {
        setTrailState((prev) => (prev.visible ? { ...prev, visible: false, opacity: 0 } : prev));
      }

      rafId = requestAnimationFrame(checkProximity);
    };

    rafId = requestAnimationFrame(checkProximity);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (distortTimeout) clearTimeout(distortTimeout);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="philosophy-light-trail-svg"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 2,
        opacity: trailState.visible ? trailState.opacity : 0,
        transition: "opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="philLightBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffd89b" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#fff8ec" stopOpacity="1" />
          <stop offset="100%" stopColor="#f6d365" stopOpacity="0.2" />
        </linearGradient>
        <filter id="philLightBeamGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {trailState.d && (
        <>
          <path
            d={trailState.d}
            fill="none"
            stroke="url(#philLightBeamGrad)"
            strokeWidth="4.2"
            filter="url(#philLightBeamGlow)"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d={trailState.d}
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.95"
          />
          <circle
            cx={trailState.headX}
            cy={trailState.headY}
            r="4"
            fill="#ffffff"
            filter="url(#philLightBeamGlow)"
          />
        </>
      )}
    </svg>
  );
}
