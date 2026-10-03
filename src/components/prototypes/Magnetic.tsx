"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MAGNETIC_SPRING } from "@/lib/motion";

interface MagneticProps {
  children: React.ReactNode;
  maxDistance?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Magnetic({
  children,
  maxDistance = 6,
  className,
  style,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    // Only enable magnetic hover if device actually supports hover
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setCanHover(supportsHover && !prefersReduced);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || !ref.current) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // Cap at maxDistance (default 6px) in any direction
    const clampedX = Math.max(-maxDistance, Math.min(maxDistance, deltaX * 0.25));
    const clampedY = Math.max(-maxDistance, Math.min(maxDistance, deltaY * 0.25));

    setPosition({ x: clampedX, y: clampedY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  if (!canHover) {
    return <div className={className} style={style}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={MAGNETIC_SPRING}
      className={className}
      style={{ display: "inline-block", ...style }}
    >
      {children}
    </motion.div>
  );
}
