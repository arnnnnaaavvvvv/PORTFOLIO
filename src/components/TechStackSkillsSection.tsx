"use client";

import React from "react";

interface TechSkill {
  name: string;
  subtext?: string;
  url: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  categoryIcon: React.ReactNode;
  skills: TechSkill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "LANGUAGES & CORE",
    categoryIcon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: [
      {
        name: "Java",
        url: "https://www.java.com",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <path d="M11.2 24.3c-2.4-.2-4.1.3-4.1.3s1.2-.8 3.5-.9c2.3-.2 5-.1 7.8-.1 2.8 0 4.9.4 4.9.4s-1.8-.6-4.5-.7c-2.7 0-5.4 0-7.6 1zm-.8 3.1c-1.8-.2-3.1.2-3.1.2s.9-.6 2.6-.7c1.7-.1 3.8-.1 5.9-.1 2.1 0 3.7.3 3.7.3s-1.4-.4-3.4-.5c-2-.1-4.1 0-5.7.8zm11-12.8c.8 1.4-1.2 2.6-1.2 2.6s2.5-.7 2.1-2.4c-.4-1.4-2.5-2.2-3.9-3.2-1.2-.9-1.2-2.1-1.2-2.1s-.2 1.3 1.1 2.3c1.6 1.1 2.5 1.7 3.1 2.8z" fill="#E76F00" />
            <path d="M19.1 19.4c1.9-.3 2.9-1.5 2.8-2.5-.1-1.3-1.4-1.7-2.7-1.3-1.2.4-2.2 1.3-2.2 2.2 0 1.1.9 1.7 2.1 1.6z" fill="#5382A1" />
            <path d="M8.6 20.8s1.6-1.5 4.5-2.1c3.5-.7 7.7.2 9.6 1.7.5.4.9.9 1 1.4.3 1.3-.8 2.2-2.2 2.7-3.7 1.3-8.8 1.1-12.2-.4-.9-.4-1.4-.9-1.4-1.6 0-.8.7-1.7.7-1.7z" fill="#5382A1" />
            <path d="M15.4 3.5s2.2 1.4 1 3.5c-1.1 1.9-2.7 2.8-2.7 4.1 0 1.6 1.9 2.2 1.9 2.2s-1.5-.7-1.5-2c0-1.5 2.4-2.6 3.1-4.3.7-1.9-.8-3.5-.8-3.5z" fill="#E76F00" />
          </svg>
        ),
      },
      {
        name: "C",
        url: "https://en.cppreference.com/w/c",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <path d="M16 2.5l11.7 6.8v13.4L16 29.5 4.3 22.7V9.3L16 2.5z" fill="#1C3879" />
            <path d="M16 5.8l9 5.2v10l-9 5.2-9-5.2V11l9-5.2z" fill="#00599C" />
            <path d="M21.2 12.8c-1.3-1.2-3.1-1.8-5.2-1.8-4.2 0-7.3 2.8-7.3 7 0 4.2 3.1 7 7.3 7 2.1 0 3.9-.6 5.2-1.8l-1.8-2.5c-.9.8-2 1.2-3.4 1.2-2.3 0-4-1.6-4-3.9s1.7-3.9 4-3.9c1.4 0 2.5.4 3.4 1.2l1.8-2.5z" fill="#FFFFFF" />
          </svg>
        ),
      },
      {
        name: "Python",
        url: "https://www.python.org",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <path d="M15.9 3c-6.8 0-6.4 3-6.4 3v3.1h6.6v.9H6.9C4 10 2.8 13.1 2.8 16.3c0 3.2 2.4 4.7 4.7 4.7h2.7v-3.1c0-3.1 2.7-5.7 5.7-5.7h6.2c1.7 0 3.1-1.3 3.1-3.1V5.9C25.2 3.9 21.8 3 15.9 3zm-2.9 2.4c.8 0 1.3.5 1.3 1.3s-.5 1.3-1.3 1.3-1.3-.5-1.3-1.3.5-1.3 1.3-1.3z" fill="#3776AB" />
            <path d="M16.1 29c6.8 0 6.4-3 6.4-3v-3.1h-6.6v-.9h9.2c2.9 0 4.1-3.1 4.1-6.3 0-3.2-2.4-4.7-4.7-4.7h-2.7v3.1c0 3.1-2.7 5.7-5.7 5.7h-6.2c-1.7 0-3.1 1.3-3.1 3.1v3.2C6.8 28.1 10.2 29 16.1 29zm2.9-2.4c-.8 0-1.3-.5-1.3-1.3s.5-1.3 1.3-1.3 1.3.5 1.3 1.3-.5 1.3-1.3 1.3z" fill="#FFD43B" />
          </svg>
        ),
      },
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <rect width="32" height="32" rx="6" fill="#3178C6" />
            <path d="M14.5 13.5v-2.2H6.5v2.2h2.7v9h2.6v-9h2.7zm2.8 5.7c.5.9 1.4 1.4 2.5 1.4 1 0 1.7-.4 1.7-1 0-.7-.4-1-2-1.5-2.2-.6-3.6-1.5-3.6-3.5 0-2 1.6-3.4 3.9-3.4 1.7 0 3.2.7 4 2.1l-2.1 1.4c-.4-.7-1-1-1.9-1-.9 0-1.4.4-1.4.9 0 .5.4.8 1.9 1.3 2.5.7 3.7 1.7 3.7 3.7 0 2.2-1.7 3.5-4.3 3.5-2.1 0-3.6-1-4.5-2.6l2.1-1.4z" fill="#FFFFFF" />
          </svg>
        ),
      },
      {
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <rect width="32" height="32" rx="6" fill="#F7DF1E" />
            <path d="M18.8 23.4c.7.4 1.5.7 2.4.7 1.2 0 1.9-.6 1.9-1.4 0-1-.8-1.4-2.5-2.1-2.4-1-4-2.2-4-4.8 0-2.6 2-4.5 5.2-4.5 1.8 0 3.1.5 4 1.2l-1.3 2.1c-.7-.5-1.5-.8-2.7-.8-1.3 0-1.9.6-1.9 1.3 0 .9.8 1.3 2.6 2.1 2.6 1.1 3.9 2.3 3.9 4.8 0 2.9-2.3 4.7-5.5 4.7-2.1 0-3.8-.6-4.9-1.4l1.3-2zM9.5 24.3c.7.4 1.5.6 2.3.6 1.9 0 3.1-.9 3.1-3.2v-9.9h-3.3v9.8c0 1.1-.5 1.5-1.3 1.5-.4 0-.8-.1-1.1-.3l.3-2.5z" fill="#000000" />
          </svg>
        ),
      },
      {
        name: "HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <path d="M4 2l2.5 24.5L16 30l9.5-3.5L28 2H4z" fill="#E44D26" />
            <path d="M16 27.6l7.4-2.8 2.1-20.4H16v23.2z" fill="#F16529" />
            <path d="M16 12.3h-4.8l-.3-3.6H16V5.4H7.9l1 10.2H16v-3.3zm0 7.9l-4-.9-.3-3.3H8.3l.5 6.1 7.2 2v-3.9z" fill="#EBEBEB" />
            <path d="M16 12.3h4.8l-.5 4.6-4.3 1.2v3.4l7.2-2 .8-9.4H16v2.2zm0-6.9v3.3h7.8l.3-3.3H16z" fill="#FFFFFF" />
          </svg>
        ),
      },
      {
        name: "CSS",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <path d="M4 2l2.5 24.5L16 30l9.5-3.5L28 2H4z" fill="#1572B6" />
            <path d="M16 27.6l7.4-2.8 2.1-20.4H16v23.2z" fill="#33A9DC" />
            <path d="M16 12.3h-4.8l-.3-3.6H16V5.4H7.9l1 10.2H16v-3.3zm0 7.9l-4-.9-.3-3.3H8.3l.5 6.1 7.2 2v-3.9z" fill="#EBEBEB" />
            <path d="M16 12.3h4.8l-.5 4.6-4.3 1.2v3.4l7.2-2 .8-9.4H16v2.2zm0-6.9v3.3h7.8l.3-3.3H16z" fill="#FFFFFF" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "AI, MACHINE LEARNING & VECTOR INFRASTRUCTURE",
    categoryIcon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04" />
      </svg>
    ),
    skills: [
      {
        name: "PyTorch",
        url: "https://pytorch.org",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <path d="M17.8 4.2a11.9 11.9 0 0 0-9.6 11.6c0 5 3.2 9.4 7.9 11.1l2.5-2.5c-3.6-1.4-6-4.9-6-8.6 0-5 3.8-9.1 8.8-9.5l-3.6-2.1z" fill="#EE4C2C" />
            <circle cx="21.5" cy="7.2" r="2.2" fill="#EE4C2C" />
          </svg>
        ),
      },
      {
        name: "TensorFlow",
        url: "https://www.tensorflow.org",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <path d="M16 2.5l-12 6.9v13.8l5.2 3v-9.6l6.8 3.9v10.5l12-6.9v-13.8L16 2.5z" fill="#FF6F00" />
            <path d="M16 2.5l12 6.9v13.8l-5.2-3v-9.6L16 14.5V2.5z" fill="#FFA800" />
          </svg>
        ),
      },
      {
        name: "scikit-learn",
        url: "https://scikit-learn.org",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <circle cx="16" cy="16" r="13" fill="#3499CD" />
            <path d="M16 3c7.2 0 13 5.8 13 13s-5.8 13-13 13V3z" fill="#F89939" />
            <ellipse cx="16" cy="16" rx="9" ry="5.5" fill="#FFFFFF" transform="rotate(-30 16 16)" />
            <circle cx="16" cy="16" r="3.2" fill="#1C3879" />
          </svg>
        ),
      },
      {
        name: "pgvector",
        url: "https://github.com/pgvector/pgvector",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <path d="M16 3C9.4 3 5 7.4 5 12.8c0 4.8 3.2 8.5 6.7 9.8v4.2h3.9v-3.3c.7.2 1.5.3 2.3.3 5.8 0 10.1-4.2 10.1-10.4C28 7.4 22.6 3 16 3zm.2 3.6c4.6 0 7.3 2.8 7.3 7 0 4.2-2.7 7-7.3 7-.6 0-1.2 0-1.8-.2v-7.9h-2.9v8.3c-1.8-1-2.9-3.2-2.9-6.1 0-3.3 2.6-5.1 7.6-5.1z" fill="#336791" />
            <circle cx="21" cy="22" r="3.5" fill="#3B82F6" />
            <path d="M19.5 22h3M21 20.5v3" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: "HNSW",
        subtext: "Vector Search",
        url: "https://github.com/nmslib/hnswlib",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <rect x="5" y="5" width="22" height="22" rx="6" fill="#0284C7" />
            <circle cx="11" cy="11" r="2.5" fill="#FFFFFF" />
            <circle cx="21" cy="11" r="2.5" fill="#FFFFFF" />
            <circle cx="16" cy="18" r="3" fill="#38BDF8" />
            <circle cx="11" cy="23" r="2" fill="#FFFFFF" />
            <circle cx="21" cy="23" r="2" fill="#FFFFFF" />
            <path d="M11 11l5 7 5-7M16 18l-5 5M16 18l5 5" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: "Qdrant",
        url: "https://qdrant.tech",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <path d="M16 2.5l11.5 6.6v13.8L16 29.5 4.5 22.9V9.1L16 2.5z" fill="#DC2626" />
            <path d="M16 6.8l7.8 4.5v9.4L16 25.2l-7.8-4.5v-9.4L16 6.8z" fill="#2563EB" />
            <circle cx="16" cy="16" r="3.5" fill="#FFFFFF" />
          </svg>
        ),
      },
      {
        name: "Claude API",
        url: "https://www.anthropic.com/claude",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <rect width="32" height="32" rx="6" fill="#FAF5EF" />
            <path d="M16 5.5v21M5.5 16h21M8.6 8.6l14.8 14.8M23.4 8.6L8.6 23.4" stroke="#D97757" strokeWidth="3" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: "OpenAI API",
        url: "https://openai.com",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28" fill="#111111">
            <path d="M28.5 12.8a7.8 7.8 0 0 0-.7-6.4 8 8 0 0 0-8.6-3.8 8 8 0 0 0-6.1 2.9 8 8 0 0 0-5.3 3.8 8 8 0 0 0 1 9.4 7.8 7.8 0 0 0 .7 6.4 8 8 0 0 0 8.6 3.8 8 8 0 0 0 6.1-2.9 8 8 0 0 0 5.3-3.8 8 8 0 0 0-1-9.4zm-11.8 16.5a6 6 0 0 1-3.8-1.4l.2-.1 6.3-3.6a1 1 0 0 0 .5-.9v-8.9l2.7 1.5a.1.1 0 0 1 .1.1v7.4a6 6 0 0 1-6 5.9zm-12.7-5.5a6 6 0 0 1-.7-4l.2.1 6.3 3.6a1 1 0 0 0 1 0l7.7-4.5v3.1a.1.1 0 0 1 0 .1l-6.4 3.7a6 6 0 0 1-8.1-2.1zm-1.7-12.5a6 6 0 0 1 3.1-2.6v7.5a1 1 0 0 0 .5.9l7.7 4.4-2.7 1.5a.1.1 0 0 1-.1 0l-6.4-3.7a6 6 0 0 1-2.1-8zm21.8 5.1l-7.7-4.5 2.7-1.5a.1.1 0 0 1 .1 0l6.4 3.7a6 6 0 0 1-.9 10.7v-7.5a1 1 0 0 0-.5-.9zm2.6-5.4l-.2-.1-6.3-3.6a1 1 0 0 0-1 0L12.7 9.8V6.7a.1.1 0 0 1 0-.1l6.4-3.7a6 6 0 0 1 8.8 6.2zM11.8 18l3.2-1.8 3.2 1.8v3.7l-3.2 1.8-3.2-1.8V18z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "FRAMEWORKS, FRONTEND & REAL-TIME",
    categoryIcon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    skills: [
      {
        name: "Tailwind CSS",
        url: "https://tailwindcss.com",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28" fill="#06B6D4">
            <path d="M16 6.4c-4.3 0-6.9 2.1-8 6.4 1.6-2.1 3.5-2.9 5.6-2.4 1.2.3 2.1 1.2 3 2.2C18.2 14.2 20 16 24 16c4.3 0 6.9-2.1 8-6.4-1.6 2.1-3.5 2.9-5.6 2.4-1.2-.3-2.1-1.2-3-2.2C21.8 8.2 20 6.4 16 6.4zM8 16c-4.3 0-6.9 2.1-8 6.4 1.6-2.1 3.5-2.9 5.6-2.4 1.2.3 2.1 1.2 3 2.2 1.6 1.6 3.4 3.4 7.4 3.4 4.3 0 6.9-2.1 8-6.4-1.6 2.1-3.5 2.9-5.6 2.4-1.2-.3-2.1-1.2-3-2.2C13.8 17.8 12 16 8 16z" />
          </svg>
        ),
      },
      {
        name: "Vite",
        url: "https://vitejs.dev",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <path d="M29.5 5.8L16.8 28.5c-.4.7-1.3.7-1.7 0L2.5 5.8c-.4-.8.2-1.7 1.1-1.5l12.1 2.4 12.7-2.4c.9-.2 1.5.7 1.1 1.5z" fill="#7C3AED" />
            <path d="M19.8 4.2L8.2 17.5h6.2l-2.2 8.5 11.6-13.8h-6.2l2.2-8z" fill="#FACC15" />
          </svg>
        ),
      },
      {
        name: "Framer Motion",
        url: "https://www.framer.com/motion/",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28" fill="#000000">
            <path d="M4 3h24v13h-12L4 3zm0 13h12v13L4 16zm12 0h12L16 29V16z" />
          </svg>
        ),
      },
      {
        name: "React JS",
        url: "https://react.dev",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
            <circle cx="16" cy="16" r="2.8" fill="#087EA4" />
            <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#087EA4" strokeWidth="1.8" />
            <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#087EA4" strokeWidth="1.8" transform="rotate(60 16 16)" />
            <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#087EA4" strokeWidth="1.8" transform="rotate(120 16 16)" />
          </svg>
        ),
      },
      {
        name: "Next.js",
        url: "https://nextjs.org",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <circle cx="16" cy="16" r="15" fill="#000000" />
            <path d="M19.8 22l-8.5-11v10.2H9.5V10.8h2l8.8 11.4V10.8h1.8V22h-2.3z" fill="#FFFFFF" />
            <path d="M22.1 10.8l-6.1 8v1.3l6.1-8v-1.3z" fill="#A1A1AA" />
          </svg>
        ),
      },
      {
        name: "Node JS",
        url: "https://nodejs.org",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <path d="M16 2.5l12 6.8v13.4L16 29.5 4 22.7V9.3L16 2.5z" fill="#5FA04E" />
            <path d="M16 5.8l9.2 5.2v10l-9.2 5.2-9.2-5.2V11l9.2-5.2z" fill="#417E38" />
            <path d="M16 11l6 3.5v7l-6 3.5-6-3.5v-7l6-3.5z" fill="#FFFFFF" />
          </svg>
        ),
      },
      {
        name: "REST API",
        url: "https://restfulapi.net",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="16" cy="16" r="12" />
            <line x1="4" y1="16" x2="28" y2="16" />
            <ellipse cx="16" cy="16" rx="6" ry="12" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "DATA, INFRASTRUCTURE & DEVOPS",
    categoryIcon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    skills: [
      {
        name: "PostgreSQL",
        url: "https://www.postgresql.org",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <path d="M16 3C9.4 3 5 7.4 5 12.8c0 4.8 3.2 8.5 6.7 9.8v4.2h3.9v-3.3c.7.2 1.5.3 2.3.3 5.8 0 10.1-4.2 10.1-10.4C28 7.4 22.6 3 16 3zm.2 3.6c4.6 0 7.3 2.8 7.3 7 0 4.2-2.7 7-7.3 7-.6 0-1.2 0-1.8-.2v-7.9h-2.9v8.3c-1.8-1-2.9-3.2-2.9-6.1 0-3.3 2.6-5.1 7.6-5.1z" fill="#336791" />
          </svg>
        ),
      },
      {
        name: "Redis",
        url: "https://redis.io",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <path d="M29 11.5L16 6 3 11.5l13 5.5 13-5.5z" fill="#DC382D" />
            <path d="M3 16l13 5.5 13-5.5v3.5L16 25 3 19.5V16z" fill="#A8231B" />
            <path d="M3 21l13 5.5 13-5.5v3.5L16 30 3 24.5V21z" fill="#7A1913" />
          </svg>
        ),
      },
      {
        name: "Firebase",
        url: "https://firebase.google.com",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <path d="M6.2 17.5L9.5 4.8c.2-.7 1.1-.9 1.6-.3l4.1 7.4-9 5.6z" fill="#FFA000" />
            <path d="M19.1 11.8l-3.9-7.3c-.4-.7-1.3-.7-1.7 0L6.2 17.5l12.9-5.7z" fill="#F57C00" />
            <path d="M25.8 24.5L22.6 6.8c-.1-.8-1.2-1.1-1.7-.5l-14.7 18.2 11.5 6.4c1.1.6 2.4.6 3.5 0l4.6-6.4z" fill="#FFCA28" />
          </svg>
        ),
      },
      {
        name: "Supabase",
        url: "https://supabase.com",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <path d="M17.5 2.5L4.8 17.8c-.5.6-.1 1.6.7 1.6h10.2v10.1c0 .8 1 1.2 1.5.6l12.7-15.3c.5-.6.1-1.6-.7-1.6H17.5V2.5z" fill="#3ECF8E" />
          </svg>
        ),
      },
      {
        name: "MongoDB",
        url: "https://www.mongodb.com",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <path d="M16 2.5c-.8 0-7.8 8.1-7.8 15.2 0 6.5 4.9 11.1 7.8 12.3 2.9-1.2 7.8-5.8 7.8-12.3 0-7.1-7-15.2-7.8-15.2z" fill="#47A248" />
            <path d="M16 2.5v27.5c2.9-1.2 7.8-5.8 7.8-12.3 0-7.1-7-15.2-7.8-15.2z" fill="#499D4A" />
            <path d="M16 5.2s-5.2 6.5-5.2 12.2c0 4.5 3.3 8 5.2 9.1V5.2z" fill="#52A753" />
          </svg>
        ),
      },
      {
        name: "Docker",
        url: "https://www.docker.com",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28" fill="#2496ED">
            <path d="M18.6 14.8h2.8c.2 0 .2-.1.2-.2v-2.5c0-.1-.1-.2-.2-.2h-2.8c-.2 0-.2.1-.2.2v2.5c0 .1.1.2.2.2zm-3.9-7.2h2.8c.2 0 .2-.1.2-.2V4.9c0-.1-.1-.2-.2-.2h-2.8c-.2 0-.2.1-.2.2v2.5c0 .1.1.2.2.2zm0 3.6h2.8c.2 0 .2-.1.2-.2V8.5c0-.1-.1-.2-.2-.2h-2.8c-.2 0-.2.1-.2.2v2.5c0 .1.1.2.2.2zm-3.9 0h2.8c.2 0 .2-.1.2-.2V8.5c0-.1-.1-.2-.2-.2h-2.8c-.2 0-.2.1-.2.2v2.5c0 .1.1.2.2.2zm-3.9 0h2.8c.2 0 .2-.1.2-.2V8.5c0-.1-.1-.2-.2-.2H6.9c-.2 0-.2.1-.2.2v2.5c0 .1.1.2.2.2zm7.8 3.6h2.8c.2 0 .2-.1.2-.2v-2.5c0-.1-.1-.2-.2-.2h-2.8c-.2 0-.2.1-.2.2v2.5c0 .1.1.2.2.2zm-3.9 0h2.8c.2 0 .2-.1.2-.2v-2.5c0-.1-.1-.2-.2-.2h-2.8c-.2 0-.2.1-.2.2v2.5c0 .1.1.2.2.2zm-3.9 0h2.8c.2 0 .2-.1.2-.2v-2.5c0-.1-.1-.2-.2-.2H6.9c-.2 0-.2.1-.2.2v2.5c0 .1.1.2.2.2zm-3.9 0H5c.2 0 .2-.1.2-.2v-2.5c0-.1-.1-.2-.2-.2H3c-.2 0-.2.1-.2.2v2.5c0 .1.1.2.2.2zM31.7 14.5c-.5-.8-1.4-1.2-2.4-1.1-.3 0-.7.1-1 .2-1.3-.7-3.1-1.3-4.9-1.2l-.4.3a6.5 6.5 0 0 0-.7 1.7H.2c0 1.6.5 3.1 1.4 4.5 1.1 1.7 2.8 2.9 4.8 3.6 4.3 1.1 8.8.6 12.7-1.5 4.2-2.2 6.8-6.1 7.2-10.7z" />
          </svg>
        ),
      },
      {
        name: "Git",
        url: "https://git-scm.com",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <path d="M30.4 14.6L17.4 1.6c-.8-.8-2-.8-2.8 0l-3.3 3.3 4.2 4.2c.9-.3 1.9-.1 2.6.6.7.7.9 1.7.6 2.6l4.1 4.1c.9-.3 1.9-.1 2.6.6 1.1 1.1 1.1 2.8 0 3.9s-2.8 1.1-3.9 0c-.8-.8-.9-1.9-.6-2.8l-3.8-3.8v7.4c.6.4 1 1 1 1.8 0 1.5-1.3 2.8-2.8 2.8s-2.8-1.3-2.8-2.8c0-.9.4-1.6 1.1-2.1v-7.6c-.7-.4-1.1-1.2-1.1-2.1 0-.9.4-1.7 1.1-2.2L9.4 3.7 1.6 11.5c-.8.8-.8 2 0 2.8l13 13c.8.8 2 .8 2.8 0l13-13c.8-.8.8-2.1 0-2.9z" fill="#F05032" />
          </svg>
        ),
      },
      {
        name: "GitHub Actions",
        url: "https://github.com/features/actions",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <circle cx="16" cy="16" r="14" fill="#2088FF" />
            <circle cx="10" cy="16" r="2.8" fill="#FFFFFF" />
            <circle cx="22" cy="10" r="2.8" fill="#FFFFFF" />
            <circle cx="22" cy="22" r="2.8" fill="#FFFFFF" />
            <path d="M10 16h6c3.3 0 6-2.7 6-6M10 16h6c3.3 0 6 2.7 6 6" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: "Vercel",
        url: "https://vercel.com",
        icon: (
          <svg viewBox="0 0 32 32" width="28" height="28" fill="#000000">
            <path d="M16 4.5l13.5 23H2.5L16 4.5z" />
          </svg>
        ),
      },
    ],
  },
];

export default function TechStackSkillsSection() {
  const [activeCategoryIdx, setActiveCategoryIdx] = React.useState(0);
  const [touchStartX, setTouchStartX] = React.useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swipe left -> next category
        setActiveCategoryIdx((prev) => (prev + 1) % SKILL_CATEGORIES.length);
      } else {
        // Swipe right -> prev category
        setActiveCategoryIdx((prev) => (prev - 1 + SKILL_CATEGORIES.length) % SKILL_CATEGORIES.length);
      }
    }
    setTouchStartX(null);
  };

  const activeCategory = SKILL_CATEGORIES[activeCategoryIdx];

  return (
    <div className="skills-showcase-wrapper" id="skills">
      {/* Decorative silky warm champagne wave ribbons on sides */}
      <div className="skills-decor-ribbon skills-decor-ribbon-left" aria-hidden="true">
        <svg viewBox="0 0 320 800" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="silkGlow1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d8b991" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#f3e7d5" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#e3c6a4" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="silkGlow2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#edd8be" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#dfbd96" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#edd8be" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M-40 -40 C120 180, 180 340, 20 620 C-40 720, -10 780, -40 840 L-60 840 L-60 -40 Z" fill="url(#silkGlow1)" filter="blur(16px)" />
          <path d="M-20 -20 C80 140, 140 280, 40 500 C-30 650, 20 750, -20 820" stroke="url(#silkGlow2)" strokeWidth="42" strokeLinecap="round" opacity="0.6" filter="blur(20px)" />
          <path d="M-30 80 C60 220, 100 360, 10 580" stroke="#f1dfcb" strokeWidth="18" strokeLinecap="round" opacity="0.7" filter="blur(12px)" />
        </svg>
      </div>
      <div className="skills-decor-ribbon skills-decor-ribbon-right" aria-hidden="true">
        <svg viewBox="0 0 320 800" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="silkGlowR1" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d8b991" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#f3e7d5" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#e3c6a4" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="silkGlowR2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#edd8be" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#dfbd96" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#edd8be" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M360 -40 C200 180, 140 340, 300 620 C360 720, 330 780, 360 840 L380 840 L380 -40 Z" fill="url(#silkGlowR1)" filter="blur(16px)" />
          <path d="M340 -20 C240 140, 180 280, 280 500 C350 650, 300 750, 340 820" stroke="url(#silkGlowR2)" strokeWidth="42" strokeLinecap="round" opacity="0.6" filter="blur(20px)" />
          <path d="M350 80 C260 220, 220 360, 310 580" stroke="#f1dfcb" strokeWidth="18" strokeLinecap="round" opacity="0.7" filter="blur(12px)" />
        </svg>
      </div>

      <div className="skills-showcase-container">
        {/* Top Header */}
        <div className="skills-header-center">
          {/* Headline: SKILLS with gradient and geometric accent */}
          <div className="skills-title-row">
            <h2 className="skills-main-title">SKILLS</h2>
            <div className="skills-title-squares" aria-hidden="true">
              <span className="skills-sq" />
              <span className="skills-sq" />
              <span className="skills-sq" />
              <span className="skills-sq" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="skills-subheading">TOOLS &amp; TECHNOLOGIES I WORK WITH</p>
        </div>

        {/* Mobile Category Tab Selector (Visible only on <= 900px) */}
        <div className="skills-mobile-tabs" role="tablist" aria-label="Skill Categories">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              type="button"
              role="tab"
              aria-selected={activeCategoryIdx === idx}
              onClick={() => setActiveCategoryIdx(idx)}
              className={`skills-mobile-tab-btn ${activeCategoryIdx === idx ? "is-active" : ""}`}
            >
              <span className="skills-mobile-tab-label">
                {idx === 0 ? "Core" : idx === 1 ? "AI & ML" : idx === 2 ? "Frontend" : "DevOps"}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile Single Category View (Swipeable, visible only on <= 900px) */}
        <div
          className="skills-mobile-view-wrapper"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="skills-category-header skills-mobile-cat-header">
            <span className="skills-category-icon">{activeCategory.categoryIcon}</span>
            <h3 className="skills-category-title">{activeCategory.title}</h3>
            <div className="skills-category-line" />
          </div>

          <div className="skills-cards-grid skills-mobile-cards-grid">
            {activeCategory.skills.map((skill) => (
              <a
                key={skill.name}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="skills-card-item skills-card-item--mobile"
                title={`Visit official ${skill.name} website`}
                aria-label={`${skill.name} official documentation`}
              >
                <div className="skills-card-icon">{skill.icon}</div>
                <span className="skills-card-label">{skill.name}</span>
                {skill.subtext && (
                  <span className="skills-card-subtext">{skill.subtext}</span>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Controls & Dots */}
          <div className="skills-mobile-controls">
            <button
              type="button"
              className="skills-mobile-arrow"
              onClick={() => setActiveCategoryIdx((prev) => (prev - 1 + SKILL_CATEGORIES.length) % SKILL_CATEGORIES.length)}
              aria-label="Previous Skill Category"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <div className="skills-mobile-dots">
              {SKILL_CATEGORIES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveCategoryIdx(idx)}
                  className={`skills-dot ${activeCategoryIdx === idx ? "is-active" : ""}`}
                  aria-label={`Jump to Category ${idx + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              className="skills-mobile-arrow"
              onClick={() => setActiveCategoryIdx((prev) => (prev + 1) % SKILL_CATEGORIES.length)}
              aria-label="Next Skill Category"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop 4 Skill Categories Grid (Visible on > 900px) */}
        <div className="skills-categories-grid skills-categories-grid--desktop">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title} className="skills-category-block">
              {/* Category Header Row with Icon + Label + Divider line */}
              <div className="skills-category-header">
                <span className="skills-category-icon">{category.categoryIcon}</span>
                <h3 className="skills-category-title">{category.title}</h3>
                <div className="skills-category-line" />
              </div>

              {/* Cards Grid */}
              <div className="skills-cards-grid">
                {category.skills.map((skill) => (
                  <a
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skills-card-item"
                    title={`Visit official ${skill.name} website`}
                    aria-label={`${skill.name} official documentation`}
                  >
                    <div className="skills-card-icon">{skill.icon}</div>
                    <span className="skills-card-label">{skill.name}</span>
                    {skill.subtext && (
                      <span className="skills-card-subtext">{skill.subtext}</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
