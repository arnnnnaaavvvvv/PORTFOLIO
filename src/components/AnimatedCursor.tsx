"use client";

import React, { useEffect, useRef } from "react";

/**
 * AnimatedCursor Component
 *
 * Implements the custom animated cursor requested:
 * 1. Motion Trail (Image 1): Smooth decaying trailing discs creating a comet/snake motion trail.
 * 2. Concentric Bullseye (Image 2): Concentric dual-ring cursor with a crisp inner white donut/annulus
 *    and a fine outer circular ring that expands magnetically over interactive elements.
 * 3. 60/120Hz Hardware-accelerated Canvas with sub-pixel interpolation and Retina/HiDPI scaling.
 * 4. CSS `mix-blend-mode: difference` for stark, pristine visibility across both dark and light themes.
 * 5. Fully disabled on touch/mobile devices and for users with `prefers-reduced-motion`.
 */

const TRAIL_LENGTH = 12;
const BASE_HEAD_OUTER_R = 9.8;
const BASE_HEAD_INNER_R = 4.4;
const BASE_OUTER_RING_R = 24;
const HOVER_OUTER_RING_R = 34;

interface TrailPoint {
  x: number;
  y: number;
}

export default function AnimatedCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Only run on desktop fine pointers
    const isTouch = window.matchMedia("(hover: none) or (pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = false;
    let isHovering = false;
    let isMouseDown = false;
    let hasMoved = false;

    // Pointer coordinates
    let targetX = -100;
    let targetY = -100;

    // Smoothed positions
    let headX = -100;
    let headY = -100;
    let outerX = -100;
    let outerY = -100;

    // Radius & scale interpolation
    let currentOuterR = BASE_OUTER_RING_R;
    let headScale = 1;

    // Motion activity intensity (0 = stationary/bullseye, 1 = in motion/comet trail)
    let motionFactor = 0;

    // Trail points
    const trail: TrailPoint[] = Array.from({ length: TRAIL_LENGTH }, () => ({
      x: -100,
      y: -100,
    }));

    // Retina & HiDPI canvas setup
    const updateCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Pointer events
    const onPointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!hasMoved) {
        hasMoved = true;
        headX = targetX;
        headY = targetY;
        outerX = targetX;
        outerY = targetY;
        for (let i = 0; i < TRAIL_LENGTH; i++) {
          trail[i].x = targetX;
          trail[i].y = targetY;
        }
      }

      isVisible = true;

      // Detect hover over interactive elements
      const target = (e.target as HTMLElement | null)?.closest(
        'a, button, input, textarea, select, [role="button"], .btn, .btn-link, .interactive-card, [data-cursor="hover"], [data-cursor-text], .card-link, .mxd-project-item'
      );
      isHovering = !!target;
    };

    const onPointerDown = () => {
      isMouseDown = true;
    };

    const onPointerUp = () => {
      isMouseDown = false;
    };

    const onDocumentMouseLeave = () => {
      isVisible = false;
    };

    const onDocumentMouseEnter = () => {
      isVisible = true;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    document.addEventListener("mouseleave", onDocumentMouseLeave);
    document.addEventListener("mouseenter", onDocumentMouseEnter);

    // Animation render loop
    const render = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      if (hasMoved && isVisible) {
        // Distance moved toward mouse target
        const dx = targetX - headX;
        const dy = targetY - headY;
        const dist = Math.hypot(dx, dy);

        // Responsive position smoothing
        headX += dx * 0.88;
        headY += dy * 0.88;

        // Outer concentric ring smooth lag
        outerX += (headX - outerX) * 0.38;
        outerY += (headY - outerY) * 0.38;

        // Instant motion response when moving, smooth dissipation when stopped
        if (dist > 0.8) {
          motionFactor = Math.min(1, motionFactor + 0.4);
        } else {
          motionFactor *= 0.92;
        }

        // Animate outer ring radius (bullseye expansion on hover / contraction on click)
        const targetOuterR = isMouseDown
          ? BASE_OUTER_RING_R * 0.72
          : isHovering
          ? HOVER_OUTER_RING_R
          : BASE_OUTER_RING_R;
        currentOuterR += (targetOuterR - currentOuterR) * 0.2;

        const targetHeadScale = isMouseDown ? 0.8 : isHovering ? 1.15 : 1;
        headScale += (targetHeadScale - headScale) * 0.22;

        // Update trail points physics (chain lerp creates curved trailing ribbon)
        let prevX = headX;
        let prevY = headY;
        for (let i = 0; i < TRAIL_LENGTH; i++) {
          const pt = trail[i];
          const lerpFactor = 0.48 - (i / TRAIL_LENGTH) * 0.22;
          pt.x += (prevX - pt.x) * lerpFactor;
          pt.y += (prevY - pt.y) * lerpFactor;
          prevX = pt.x;
          prevY = pt.y;
        }

        // ========================================================
        // 1. RENDER MOTION TRAIL (Image 1: Decaying comet discs)
        // ========================================================
        if (motionFactor > 0.015) {
          for (let i = TRAIL_LENGTH - 1; i >= 0; i--) {
            const pt = trail[i];
            const progress = (i + 1) / (TRAIL_LENGTH + 1); // 0 (near head) -> 1 (tail tip)

            // Radius tapers from ~8px down to ~2.2px
            const r = (BASE_HEAD_OUTER_R * 0.82) * Math.pow(1 - progress * 0.72, 1.1);

            // Opacity smoothly decays along the tail, multiplied by motionFactor
            const baseAlpha = 0.72 * Math.pow(1 - progress, 1.2);
            const alpha = Math.max(0, Math.min(1, baseAlpha * motionFactor));

            if (alpha > 0.01 && r > 0.5) {
              ctx.beginPath();
              ctx.arc(pt.x, pt.y, r, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
              ctx.fill();
            }
          }
        }

        // ========================================================
        // 2. RENDER OUTER CONCENTRIC RING (Image 2: Bullseye ring)
        // ========================================================
        // Prominent when stationary or hovering; softly blends during high-speed motion
        const baseRingAlpha = isHovering ? 0.95 : 0.8;
        const outerRingAlpha = Math.max(
          0.25,
          baseRingAlpha * (1 - motionFactor * 0.6)
        );

        ctx.save();
        ctx.beginPath();
        ctx.arc(outerX, outerY, Math.max(1, currentOuterR), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${outerRingAlpha.toFixed(3)})`;
        ctx.lineWidth = isHovering ? 1.75 : 1.4;
        ctx.stroke();
        ctx.restore();

        // ========================================================
        // 3. RENDER HEAD DONUT / ANNULUS (Image 1 & 2)
        // ========================================================
        // White circular ring with a true transparent center hole
        const outerR = BASE_HEAD_OUTER_R * headScale;
        const innerR = BASE_HEAD_INNER_R * headScale;

        ctx.save();
        ctx.beginPath();
        ctx.arc(headX, headY, outerR, 0, Math.PI * 2, false);
        ctx.arc(headX, headY, innerR, 0, Math.PI * 2, true);
        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.fill("evenodd");
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("mouseleave", onDocumentMouseLeave);
      document.removeEventListener("mouseenter", onDocumentMouseEnter);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="custom-animated-cursor"
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 999999,
        mixBlendMode: "difference",
      }}
    />
  );
}
