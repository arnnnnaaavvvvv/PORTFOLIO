"use client";

import React, { useRef, useState, useCallback } from "react";

interface VisionAvatarCardProps {
  imageSrc?: string;
  altText?: string;
}

export default function VisionAvatarCard({
  imageSrc = "/img/arnav_vision_dither.png",
  altText = "Arnav Singh — Full-Stack & AI Solutions",
}: VisionAvatarCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>(
    "perspective(800px) rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0px) scale3d(1, 1, 1)"
  );
  const [glare, setGlare] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const calculateTilt = useCallback((clientX: number, clientY: number) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // Normalized coordinates (-1 to 1)
    const xNorm = Math.max(-1, Math.min(1, (x / rect.width) * 2 - 1));
    const yNorm = Math.max(-1, Math.min(1, (y / rect.height) * 2 - 1));

    // Responsive 3D tilt angles and magnetic translation
    const rotateX = -yNorm * 14;
    const rotateY = xNorm * 14;
    const translateX = xNorm * 4.5;
    const translateY = yNorm * 4.5;

    setTransform(
      `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translate3d(${translateX.toFixed(1)}px, ${translateY.toFixed(1)}px, 12px) scale3d(1.08, 1.08, 1.08)`
    );
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.28,
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
    setIsPressed(false);
    setTransform(
      "perspective(800px) rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0px) scale3d(1, 1, 1)"
    );
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsPressed(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsPressed(false);
  }, []);

  // Touch handlers for mobile and tablet devices
  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      setIsHovered(true);
      setIsPressed(true);
      calculateTilt(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, [calculateTilt]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      calculateTilt(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, [calculateTilt]);

  return (
    <div className="vision-avatar-wrapper">
      <div
        ref={cardRef}
        className={`vision-avatar-card ${isHovered ? "is-hovered" : ""} ${isPressed ? "is-pressed" : ""}`}
        style={{
          transform: isPressed
            ? "perspective(800px) rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0px) scale3d(0.97, 0.97, 0.97)"
            : transform,
          transition: isHovered
            ? "transform 0.08s ease-out"
            : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease",
          touchAction: "pan-y",
          WebkitTapHighlightColor: "transparent",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={resetCard}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={resetCard}
        onTouchCancel={resetCard}
        role="button"
        tabIndex={0}
        aria-label={altText}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="vision-avatar-img"
          draggable={false}
        />
        <div
          className="vision-avatar-glare"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 65%)`,
            opacity: glare.opacity,
          }}
        />
      </div>
    </div>
  );
}
