"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "@/lib/motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isCoverPresent, setIsCoverPresent] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      return;
    }

    const hasLoadedThisSession = sessionStorage.getItem("portfolio_loaded");
    if (!hasLoadedThisSession) {
      setShouldAnimate(true);
      setIsCoverPresent(true);
      sessionStorage.setItem("portfolio_loaded", "true");
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {isCoverPresent && shouldAnimate && (
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.45,
              ease: EASE,
            }}
            onAnimationComplete={() => setIsCoverPresent(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#0d1117",
              zIndex: 99999,
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
