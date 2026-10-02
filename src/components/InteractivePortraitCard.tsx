"use client";

import React, { useRef, useState, useCallback } from "react";

interface InteractivePortraitCardProps {
  imageSrc: string;
  altText: string;
}

export default function InteractivePortraitCard({
  imageSrc,
  altText,
}: InteractivePortraitCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>(
    "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  );
  const [glare, setGlare] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const calculateTilt = useCallback((clientX: number, clientY: number) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // Normalized coordinates (-1 to 1)
    const xNorm = Math.max(-1, Math.min(1, (x / rect.width) * 2 - 1));
    const yNorm = Math.max(-1, Math.min(1, (y / rect.height) * 2 - 1));

    // Smooth tilt angles (up to 7.5 degrees)
    const rotateX = -yNorm * 7.5;
    const rotateY = xNorm * 7.5;

    setTransform(
      `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.028, 1.028, 1.028)`
    );
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.16,
    });
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    calculateTilt(e.clientX, e.clientY);
  }, [calculateTilt]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const resetCard = useCallback(() => {
    setIsHovered(false);
    setTransform("perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  // Touch handlers for mobile / tablet devices
  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      setIsHovered(true);
      calculateTilt(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, [calculateTilt]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      calculateTilt(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, [calculateTilt]);

  return (
    <div className="interactive-portrait-container">
      <div
        ref={cardRef}
        className={`interactive-portrait-card ${isHovered ? "is-hovered" : ""}`}
        style={{
          transform,
          transition: isHovered
            ? "transform 0.08s ease-out"
            : "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
          touchAction: "pan-y",
          WebkitTapHighlightColor: "transparent",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={resetCard}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={resetCard}
        onTouchCancel={resetCard}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="interactive-portrait-img"
          draggable={false}
        />
        <div
          className="interactive-portrait-glare"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 60%)`,
            opacity: glare.opacity,
          }}
        />
      </div>
    </div>
  );
}
