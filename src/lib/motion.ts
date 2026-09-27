import { Variants } from "framer-motion";

// Single shared easing curve: cubic-bezier(0.16, 1, 0.3, 1)
export const EASE = [0.16, 1, 0.3, 1] as const;

// Magnetic spring settings (used ONLY for magnetic element physics)
export const MAGNETIC_SPRING = {
  type: "spring",
  stiffness: 150,
  damping: 15,
  mass: 0.1,
} as const;

// Cursor spring settings
export const CURSOR_SPRING = {
  stiffness: 300,
  damping: 30,
} as const;

// Standard fade-up variant using the shared EASE curve
export const fadeUpVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom,
      ease: EASE,
    },
  }),
};

// Container variant with children stagger
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: (delayChildren: number = 0) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren,
    },
  }),
};

// Line-by-line reveal for hero headline
export const lineRevealVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE,
    },
  },
};

// Project row parent variant (controls row and internal tag staggers)
export const projectRowVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      ease: EASE,
      staggerChildren: 0.05,
      delayChildren: 0.15,
    },
  }),
};

// Tag pill reveal inside project rows
export const tagRevealVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: EASE,
    },
  },
};

// Simple opacity-only fallback for prefers-reduced-motion
export const reducedMotionFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};
