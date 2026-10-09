"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

export default function HeroNameImage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="hero-scroll-container">
      <motion.div
        className="hero-image-wrap"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: EASE }}
      >
        <picture className="hero-picture">
          <source
            media="(max-width: 768px)"
            srcSet="/hero-name-mobile.webp?v=3"
            type="image/webp"
          />
          <source
            media="(max-width: 768px)"
            srcSet="/hero-name-mobile.png?v=3"
            type="image/png"
          />
          <img
            src="/hero-name.png?v=3"
            alt="Arnav Singh — Full-Stack AI Engineer"
            className="hero-image"
          />
        </picture>
      </motion.div>
    </div>
  );
}
