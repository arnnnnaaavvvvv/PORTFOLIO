# Architectural Overview & Engineering Guide

This document provides a technical walkthrough of the architecture, component topology, animation pipeline, and styling conventions powering this portfolio.

---

## 🏛️ System Architecture

The application is built on **Next.js 14 (App Router)** with **TypeScript**, utilizing a hybrid architecture combining server-rendered static layout structures with hardware-accelerated client-side kinetic animations (**GSAP 3**, **Lenis Smooth Scroll**, and **Framer Motion**).

```
                      ┌───────────────────────────────┐
                      │    src/app/layout.tsx         │
                      │  (SSR Root, Fonts, Metadata)  │
                      └──────────────┬────────────────┘
                                     │
                      ┌──────────────▼────────────────┐
                      │     src/app/page.tsx          │
                      │   (Portfolio Orchestrator)    │
                      └──────────────┬────────────────┘
                                     │
        ┌──────────────┬─────────────┼─────────────┬──────────────┐
        ▼              ▼             ▼             ▼              ▼
  <Preloader />  <Navigation>   <HeroStage>   <Projects>     <Skills & Vision>
  - Preloader    - Menu Drawer  - HeroName    - Stack Cards  - Competencies
                 - HeaderNav    - 3D Portrait - TechBadges   - Philosophy
```

---

## 📁 Directory Structure

```
PORTFOLIO/
├── public/                     # Static assets served at root
│   ├── css/
│   │   ├── main.css            # Architectural typography, theme vars, layouts
│   │   ├── plugins.css         # Grid system, Swiper, and icon sets
│   │   └── loader.css          # Preloader screen animation & curtains
│   ├── fonts/                  # Custom self-hosted webfonts
│   ├── img/                    # Optimized WebP/PNG assets, portraits, textures
│   └── js/
│       ├── app.js              # Core animation runtime (GSAP, Lenis, ScrollTrigger)
│       └── libs.min.js         # Vendored physics & kinetic libraries
├── src/
│   ├── app/
│   │   ├── globals.css         # Reset styles & CSS variable overrides
│   │   ├── layout.tsx          # Root HTML layout, SEO metadata, pre-scripts
│   │   └── page.tsx            # Main page section orchestrator
│   ├── components/             # Active production React components
│   │   ├── AchievementCard.tsx # Honors, awards, and hackathon cards
│   │   ├── ContactFooterSection.tsx # Contact form, socials, and closing footer
│   │   ├── CoreCompetenciesSection.tsx # Frontend, Backend, AI/ML, DevOps grid
│   │   ├── Footer.tsx          # Hero bottom status & live location bar
│   │   ├── HeroNameImage.tsx   # Fluid typography SVG/canvas hero title
│   │   ├── InteractivePortraitCard.tsx # 3D tilt interactive photo card
│   │   ├── NavigationHeader.tsx# Persistent top control header ("Say Hello", MENU)
│   │   ├── NavigationMenu.tsx  # Fullscreen overlay navigation drawer
│   │   ├── PhilosophyInteractiveEffect.tsx # Canvas interactive background
│   │   ├── Preloader.tsx       # Initial percentage loading curtain
│   │   ├── ProjectTechStack.tsx# Interactive interactive technology badges
│   │   ├── SocialIcons.tsx     # Vector social platform links
│   │   ├── TechStackSkillsSection.tsx # Categorized technologies & tools
│   │   ├── VisionAvatarCard.tsx# Interactive profile avatar card
│   │   └── prototypes/         # Standalone component prototypes & experiments
│   ├── lib/
│   │   └── motion.ts           # Shared Framer Motion variants & spring configs
│   └── types/
│       └── portfolio.ts        # Central TypeScript interfaces & data models
├── .eslintrc.json              # Strict ESLint configuration
├── package.json                # Project dependencies & scripts
├── tsconfig.json               # TypeScript configuration with @/* path aliases
└── ARCHITECTURE.md             # This document
```

---

## ⚡ Animation & Lifecycle Pipeline

1. **Pre-Hydration (`layout.tsx`)**:
   - Executes an inline script in `<head>` setting `arnav.theme` to prevent layout shift or light/dark flashes.
   - Preloads high-priority fonts and CSS assets (`loader.css`, `plugins.css`, `main.css`).

2. **Hydration & Kinetic Initialization (`public/js/app.js`)**:
   - Automatically initializes via `DOMContentLoaded` or immediate invocation: `window.initPortfolio()`.
   - **Lenis Smooth Scroll** synchronizes with **GSAP ScrollTrigger**:
     ```javascript
     const lenis = new Lenis();
     lenis.on('scroll', ScrollTrigger.update);
     gsap.ticker.add((time) => lenis.raf(time * 1000));
     ```
   - Preloader countdown runs, smoothly revealing the Hero section upon completion.
   - Micro-interactions (card tilt, magnetic buttons, custom cursor trailing) bind selectively based on `deviceType() === "desktop"`.

3. **Responsive Viewport Handling**:
   - Pinned and stacked card sections utilize `data-lenis-prevent` for child-scroll areas where native momentum is required.
   - Mobile devices receive responsive stacked tab views (`CoreCompetenciesSection.tsx`) to guarantee zero content clipping.

---

## 🛠️ Development & Deployment

### Local Development
```bash
npm install
npm run dev
```

### Static Analysis & Type Checking
```bash
npm run lint
```

### Production Build
```bash
npm run build
npm run start
```
Deployment is configured for Vercel with automatic edge CDN caching.
