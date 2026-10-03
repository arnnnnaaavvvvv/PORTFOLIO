"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { CURSOR_SPRING } from "@/lib/motion";

export default function CursorDot() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const springX = useSpring(rawX, CURSOR_SPRING);
  const springY = useSpring(rawY, CURSOR_SPRING);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const isTouch = window.matchMedia("(hover: none) or (pointer: coarse)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReduced) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);

      // Event delegation for links, buttons, and custom data-cursor="hover"
      const target = (e.target as HTMLElement)?.closest("a, button, [data-cursor='hover'], input, textarea");
      setIsHovering(!!target);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [rawX, rawY]);

  if (!isVisible) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: "#f2f0ea",
        mixBlendMode: "difference",
        pointerEvents: "none",
        zIndex: 9999,
      }}
      animate={{
        scale: isHovering ? 1.6 : 1,
      }}
      transition={{
        duration: 0.15,
        ease: "easeOut",
      }}
    />
  );
}
