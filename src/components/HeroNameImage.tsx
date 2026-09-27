"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

export default function HeroNameImage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="hero-image-wrap"
      initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: EASE }}
    >
      <img
        src="/hero-name.png"
        alt="Arnav Singh — Full-Stack AI Developer"
        className="hero-image"
      />
    </motion.div>
  );
}
