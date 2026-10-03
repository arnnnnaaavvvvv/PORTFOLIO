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
        <img
          src="/hero-name.png"
          alt="Arnav Singh — Full-Stack AI Developer"
          className="hero-image"
        />
      </motion.div>
      <div className="hero-mobile-edge-fade" aria-hidden="true" />
    </div>
  );
}
