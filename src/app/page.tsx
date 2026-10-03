
import React from "react";
import Preloader from "@/components/Preloader";
import NavigationMenu from "@/components/NavigationMenu";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import HeroNameImage from "@/components/HeroNameImage";
import InteractivePortraitCard from "@/components/InteractivePortraitCard";
import ProjectTechStack, { CLUDE_TECH_STACKS, IGNITE_TECH_STACKS, SIRUS_TECH_STACKS } from "@/components/ProjectTechStack";
import PhilosophyInteractiveEffect from "@/components/PhilosophyInteractiveEffect";
import VisionAvatarCard from "@/components/VisionAvatarCard";
import TechStackSkillsSection from "@/components/TechStackSkillsSection";
import CoreCompetenciesSection from "@/components/CoreCompetenciesSection";
import ContactFooterSection from "@/components/ContactFooterSection";
import AchievementCard from "@/components/AchievementCard";

export default function Home() {
  return (
    <>
      <Preloader />
      <NavigationMenu />
      <NavigationHeader />

      <main id="mxd-page-content" className="mxd-page-content">
        <div id="hero" className="hero">
          {/* Subtle corner gradient for top-right UI contrast */}
          <div className="hero-corner-gradient" aria-hidden="true"></div>
          {/*  Hero Section Start  */}
          <div className="mxd-section pinned-section mxd-hero-section no-padding mxd-hero-fullheight-desktop loading-wrap">
            <div className="pinned-section__inner">
              <div className="mxd-hero-01">
                <div className="mxd-hero-01__cover"></div>

                {/* 1. Centered Hero Name Image */}
                <div className="hero-center-stage">
                  <HeroNameImage />
                </div>

                {/* 2. Hero Footer Bar (First Page Footer) */}
                <Footer className="hero-footer loading-fade" />
              </div>
            </div>
            <div className="pinned-section__trigger"></div>
          </div>
          {/*  Hero Section End  */}
        </div>
        <div id="works" style={{ backgroundColor: "#faf7f0" }}>
          <div id="projects" style={{ position: "relative", top: "-20px" }}></div>
          {/*  Section - Progects Stack Start  */}
          <div className="mxd-section" style={{ backgroundColor: "#faf7f0" }}>
            <div className="mxd-container fullwidth-container" style={{ backgroundColor: "#faf7f0" }}>

              {/*  Block - Progects Stack Start  */}
              <div className="mxd-block" style={{ backgroundColor: "#faf7f0" }}>
                <div className="mxd-stack-cards" style={{ backgroundColor: "#faf7f0" }}>
                  {/*  single card  */}
                  <div className="mxd-stack-cards__card" style={{ backgroundColor: "#faf7f0" }}>
                    <div className="card__marquees" style={{ backgroundColor: "#faf7f0" }}>
                      {/*  Marquee Divider Start  */}
                      <div className="marquee marquee-stack marquee--gsap muted-extra">
                        <div className="marquee__top">
                          {/*  single item  */}
                          <div className="marquee__item item-regular text">
                            <p className="marquee__text text-with-gliph">PROJECTS/</p>
                          </div>
                          {/*  single item  */}
                          <div className="marquee__item item-regular text">
                            <p className="marquee__text text-with-gliph">PROJECTS/</p>
                          </div>
                          {/*  single item  */}
                          <div className="marquee__item item-regular text">
                            <p className="marquee__text text-with-gliph">PROJECTS/</p>
                          </div>
                          {/*  single item  */}
                          <div className="marquee__item item-regular text">
                            <p className="marquee__text text-with-gliph">PROJECTS/</p>
                          </div>
                          {/*  single item  */}
                          <div className="marquee__item item-regular text">
                            <p className="marquee__text text-with-gliph">PROJECTS/</p>
                          </div>
                        </div>
                        <div className="marquee__bottom">
                          {/*  single item  */}
                          <div className="marquee__item item-regular text">
                            <p className="marquee__text text-with-gliph">PROJECTS/</p>
                          </div>
                          {/*  single item  */}
                          <div className="marquee__item item-regular text">
                            <p className="marquee__text text-with-gliph">PROJECTS/</p>
                          </div>
                          {/*  single item  */}
                          <div className="marquee__item item-regular text">
                            <p className="marquee__text text-with-gliph">PROJECTS/</p>
                          </div>
                          {/*  single item  */}
                          <div className="marquee__item item-regular text">
                            <p className="marquee__text text-with-gliph">PROJECTS/</p>
                          </div>
                          {/*  single item  */}
                          <div className="marquee__item item-regular text">
                            <p className="marquee__text text-with-gliph">PROJECTS/</p>
                          </div>
                        </div>
                        <div className="marquee__top">
                          {/*  single item  */}
                          <div className="marquee__item item-regular text">
                            <p className="marquee__text text-with-gliph">PROJECTS/</p>
                          </div>
                          {/*  single item  */}
                          <div className="marquee__item item-regular text">
                            <p className="marquee__text text-with-gliph">PROJECTS/</p>
                          </div>
                          {/*  single item  */}
                          <div className="marquee__item item-regular text">
                            <p className="marquee__text text-with-gliph">PROJECTS/</p>
                          </div>
                          {/*  single item  */}
                          <div className="marquee__item item-regular text">
                            <p className="marquee__text text-with-gliph">PROJECTS/</p>
                          </div>
                          {/*  single item  */}
                          <div className="marquee__item item-regular text">
                            <p className="marquee__text text-with-gliph">PROJECTS/</p>
                          </div>
                        </div>
                        <div className="marquee__bottom">
                          {/*  single item  */}
                          <div className="marquee__item item-regular text">
                            <p className="marquee__text text-with-gliph">PROJECTS/</p>
                          </div>
                          {/*  single item  */}
                          <div className="marquee__item item-regular text">
                            <p className="marquee__text text-with-gliph">PROJECTS/</p>
                          </div>
                          {/*  single item  */}
                          <div className="marquee__item item-regular text">
                            <p className="marquee__text text-with-gliph">PROJECTS/</p>
                          </div>
                          {/*  single item  */}
                          <div className="marquee__item item-regular text">
                            <p className="marquee__text text-with-gliph">PROJECTS/</p>
                          </div>
                          {/*  single item  */}
                          <div className="marquee__item item-regular text">
                            <p className="marquee__text text-with-gliph">PROJECTS/</p>
                          </div>
                        </div>
                      </div>
                      {/*  Marquee Divider End  */}
                    </div>
                    <div className="card__wrapper">
                      <div className="card__content" style={{ zIndex: 20 }}>
                        <div className="card__descr" style={{ justifyContent: "flex-end", width: "100%", pointerEvents: "none" }}>
                          <div className="card__btngroup" style={{ marginLeft: "auto", display: "flex", justifyContent: "flex-end", pointerEvents: "auto" }}>
                            <a
                              className="live-demo-box-btn"
                              href="https://neurosense-orcin.vercel.app"
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Open Live Demo"
                            >
                              <span className="live-demo-pulse-dot"></span>
                              <span className="live-demo-label">LIVE DEMO</span>
                              <span className="live-demo-icon-box">
                                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* Tech Stack Footer Section */}
                      <div className="card__techstack-wrapper" style={{ zIndex: 25, pointerEvents: "auto" }}>
                        <ProjectTechStack />
                      </div>
                      <div className="card__image" style={{ pointerEvents: "none" }}>
                        <img className="card__media" src="/img/works/showcase-stack/neurosense.png?v=2" alt="Project Preview Image" style={{ imageRendering: "-webkit-optimize-contrast" }} />
                        <div className="card__cover" style={{ backgroundColor: "transparent", pointerEvents: "none" }}></div>
                      </div>
                    </div>
                  </div>
                  {/*  single card  */}
                  <div className="mxd-stack-cards__card" style={{ backgroundColor: "#030712" }}>
                    <div className="card__wrapper" style={{ backgroundColor: "#030712" }}>
                      <div className="card__content" style={{ zIndex: 20 }}>
                        <div className="card__descr" style={{ justifyContent: "flex-end", width: "100%", pointerEvents: "none", opacity: 1, transform: "none" }}>
                          <div className="card__btngroup" style={{ marginLeft: "auto", display: "flex", justifyContent: "flex-end", pointerEvents: "auto" }}>
                            <a
                              className="live-demo-box-btn"
                              href="https://frontend-mu-roan-llgeruknl5.vercel.app"
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Open Live Demo"
                            >
                              <span className="live-demo-pulse-dot"></span>
                              <span className="live-demo-label">LIVE DEMO</span>
                              <span className="live-demo-icon-box">
                                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* Tech Stack Footer Section */}
                      <div className="card__techstack-wrapper is-revealed" style={{ zIndex: 25, pointerEvents: "auto", opacity: 1, transform: "none" }}>
                        <ProjectTechStack items={CLUDE_TECH_STACKS} theme="dark" />
                      </div>
                      <div className="card__image" style={{ pointerEvents: "none", backgroundColor: "#030712", overflow: "hidden" }}>
                        <img className="card__media" src="/img/works/showcase-stack/clude.png" alt="Project Preview Image" style={{ imageRendering: "-webkit-optimize-contrast", top: "-2px", height: "calc(100% + 4px)", position: "relative", objectFit: "cover" }} />
                        <div className="card__cover" style={{ backgroundColor: "transparent", pointerEvents: "none" }}></div>
                      </div>
                    </div>
                  </div>
                  {/*  single card  */}
                  <div className="mxd-stack-cards__card" style={{ backgroundColor: "#04121d" }}>
                    <div className="card__wrapper" style={{ backgroundColor: "#04121d" }}>
                      <div className="card__content" style={{ zIndex: 20 }}>
                        <div className="card__descr" style={{ justifyContent: "flex-end", width: "100%", pointerEvents: "none", opacity: 1, transform: "none" }}>
                          <div className="card__btngroup" style={{ marginLeft: "auto", display: "flex", justifyContent: "flex-end", pointerEvents: "auto" }}>
                            <a
                              className="live-demo-box-btn"
                              href="https://ignite-lemon-nu.vercel.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Open Live Demo"
                            >
                              <span className="live-demo-pulse-dot"></span>
                              <span className="live-demo-label">LIVE DEMO</span>
                              <span className="live-demo-icon-box">
                                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* Tech Stack Footer Section */}
                      <div className="card__techstack-wrapper is-revealed" style={{ zIndex: 25, pointerEvents: "auto", opacity: 1, transform: "none" }}>
                        <ProjectTechStack items={IGNITE_TECH_STACKS} theme="dark" />
                      </div>
                      <div className="card__image" style={{ pointerEvents: "none", backgroundColor: "#04121d", overflow: "hidden" }}>
                        <img className="card__media" src="/img/works/showcase-stack/ignite.png?v=4" alt="Project Preview Image" style={{ imageRendering: "-webkit-optimize-contrast", top: "-2px", height: "calc(100% + 4px)", position: "relative", objectFit: "cover" }} />
                        <div className="card__cover" style={{ backgroundColor: "transparent", pointerEvents: "none" }}></div>
                      </div>
                    </div>
                  </div>
                  {/*  single card  */}
                  <div className="mxd-stack-cards__card" style={{ backgroundColor: "#0c1411" }}>
                    <div className="card__wrapper" style={{ backgroundColor: "#0c1411" }}>
                      <div className="card__content" style={{ zIndex: 20 }}>
                        <div className="card__descr" style={{ justifyContent: "flex-end", width: "100%", pointerEvents: "none", opacity: 1, transform: "none" }}>
                          <div className="card__btngroup" style={{ marginLeft: "auto", display: "flex", justifyContent: "flex-end", pointerEvents: "auto" }}>
                            <a
                              className="live-demo-box-btn"
                              href="https://web-frontend-three-gamma.vercel.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Open Live Demo"
                            >
                              <span className="live-demo-pulse-dot"></span>
                              <span className="live-demo-label">LIVE DEMO</span>
                              <span className="live-demo-icon-box">
                                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* Tech Stack Footer Section */}
                      <div className="card__techstack-wrapper is-revealed" style={{ zIndex: 25, pointerEvents: "auto", opacity: 1, transform: "none" }}>
                        <ProjectTechStack items={SIRUS_TECH_STACKS} theme="emerald" />
                      </div>
                      <div className="card__image" style={{ pointerEvents: "none", backgroundColor: "#0f1515", overflow: "hidden" }}>
                        <img className="card__media" src="/img/works/showcase-stack/sirus.png?v=5" alt="SIRUS - Automated Quantitative Trading" style={{ imageRendering: "-webkit-optimize-contrast", top: "-2px", height: "calc(100% + 4px)", position: "relative", objectFit: "cover" }} />
                        <div className="card__cover" style={{ backgroundColor: "transparent", pointerEvents: "none" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  Block - Progects Stack End  */}

            </div>
          </div>
          {/*  Section - Progects Stack End  */}
        </div>
        <div id="about" className="about-section-wrapper" style={{ backgroundColor: "#faf7f0" }}>
          {/*  Section - About Me Start  */}
          <div className="mxd-section blur-section about-section-content" style={{ backgroundColor: "#faf7f0" }}>
            <div className="mxd-container grid-l-container">
              <div className="container-fluid p-0">
                <div className="row g-0 align-items-center about-two-column-row">
                  {/* Left Column: Bio Details */}
                  <div className="col-12 col-lg-7 mxd-grid-item">
                    <div className="about-bio-wrap">
                      {/* Pill Badge */}
                      <div className="about-badge-pill">
                        <span className="badge-text">ABOUT ME</span>
                      </div>

                      {/* Heading */}
                      <div className="about-heading-group">
                        <h2 className="about-lead-title">HI, I&apos;M</h2>
                        <h1 className="about-main-name">ARNAV</h1>
                      </div>

                      {/* Bio Paragraph */}
                      <div className="about-bio-content">
                        <p className="about-bio-text">
                          Full-Stack AI Engineer with hands-on experience designing and delivering AI-integrated, production-ready web applications from concept to deployment. I specialize in building intelligent platforms by combining modern frontend technologies with scalable, secure backend architectures. My expertise spans React, Next.js, FastAPI, PostgreSQL, Redis, and LLM-powered systems with RAG pipelines. Passionate about solving real-world problems through technology, I focus on creating explainable, high-performance, and user-centric applications that drive meaningful impact across healthcare, finance, travel, and developer tooling.
                        </p>
                      </div>

                      {/* Divider Line */}
                      <div className="about-tagline-divider"></div>

                      {/* Tagline Row */}
                      <div className="about-tagline-row">
                        <span className="tagline-word">BUILD</span>
                        <span className="tagline-slash">/</span>
                        <span className="tagline-word">SHIP</span>
                        <span className="tagline-slash">/</span>
                        <span className="tagline-word">ITERATE</span>
                        <span className="tagline-slash">/</span>
                        <span className="tagline-word">REPEAT</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Interactive Portrait Card */}
                  <div className="col-12 col-lg-5 mxd-grid-item about-card-col">
                    <InteractivePortraitCard
                      imageSrc="/img/illustrations/arnav_card_interactive.png"
                      altText="Arnav Singh - Full-Stack AI Engineer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  Section - About Me End  */}
        </div>
        <div id="services">
          <PhilosophyInteractiveEffect />
          {/*  Section - Divider Sticky Caption Start  */}
          <div className="mxd-section blur-section">
            <div className="mxd-container grid-l-container">

              {/*  Divider - Sticky Caption Start  */}
              <div className="mxd-dv-sticky-cap">
                <div className="mxd-dv-sticky-cap__static">
                  <div className="mxd-dv-sticky-cap__top">
                    <div className="mxd-dv-sticky-cap__content">
                      <div className="mxd-dv-sticky-cap__btngroup anim-uni-in-up">
                        <a className="philosophy-badge-pill" href="#services">
                          <span className="badge-text">PHILOSOPHY</span>
                        </a>
                      </div>
                      <div className="mxd-dv-sticky-cap__caption">
                        <p className="mxd-dv-sticky-cap__text mxd-split-lines permanent">
                          I build intelligent, production-ready systems where <span>explainable AI</span> meets <span>clean engineering</span> and considered design, and ship work that <span>solves real problems</span>.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-dv-sticky-cap__center"></div>
                  <div className="mxd-dv-sticky-cap__bottom"></div>
                </div>
                <div className="mxd-dv-sticky-cap__scroll">
                  <div className="scroll-images-row row-01">
                    <div className="container-fluid p-0">
                      <div className="row g-0 justify-content-center">
                        <div className="col-12 col-md-5 scroll-images-row__item d-flex justify-content-center">
                          <div className="scroll-images-row__obj">
                            <div className="scroll-images-row__image mxd-clip-image">
                              <img src="/img/dividers/frontend_development.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="scroll-images-row row-02">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        <div className="col-12 col-md-6 scroll-images-row__item">
                          <div className="scroll-images-row__obj">
                            <div className="scroll-images-row__image mxd-clip-image">
                              <img src="/img/dividers/backend_development.png" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-1"></div>
                        <div className="col-12 col-md-4 scroll-images-row__item">
                          <div className="scroll-images-row__obj">
                            <div className="scroll-images-row__image mxd-clip-image">
                              <img src="/img/dividers/ui_ux_design.png" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="scroll-images-row row-03">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        <div className="col-12 col-md-1"></div>
                        <div className="col-12 col-md-4 scroll-images-row__item">
                          <div className="scroll-images-row__obj">
                            <div className="scroll-images-row__image mxd-clip-image">
                              <img src="/img/dividers/authentications.png" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-1"></div>
                        <div className="col-12 col-md-6 scroll-images-row__item">
                          <div className="scroll-images-row__obj">
                            <div className="scroll-images-row__image mxd-clip-image">
                              <img src="/img/dividers/animations.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="scroll-images-row row-04">
                    <div className="container-fluid p-0">
                      <div className="row g-0 justify-content-center">
                        <div className="col-12 col-md-5 scroll-images-row__item d-flex justify-content-center">
                          <div className="scroll-images-row__obj">
                            <div className="scroll-images-row__image mxd-clip-image">
                              <img src="/img/dividers/system_design_architecture.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  Divider - Sticky Caption End  */}

            </div>
          </div>
          {/*  Section - Divider Sticky Caption End  */}
          {/*  Divider - Sticky Images Start  */}
          <div className="mxd-section">

            <div className="mxd-dv-sticky-img">
              <div className="mxd-dv-sticky-img__sticky">
                {/*  progress bar  */}
                <div className="mxd-dv-sticky-img__progress"></div>
                {/*  images  */}
                <div className="mxd-dv-sticky-img__images">
                  {/*  Page 1: Reference from Image 1 in Beige  */}
                  <div className="images__listitem">
                    <div className="images__overflow vision-slide-beige-container">
                      <div className="vision-showcase-container">
                        <VisionAvatarCard
                          imageSrc="/img/arnav_vision_dither.png"
                          altText="Arnav Singh — Full-Stack & AI Solutions"
                        />
                        <p className="vision-subtitle">Your Vision. My Expertise.</p>
                        <h2 className="vision-headline">
                          <span className="vision-headline-line">FULL-STACK DEVELOPMENT</span>
                          <span className="vision-headline-line">&amp; DESIGN SOLUTIONS</span>
                        </h2>
                        <a href="#insights" className="vision-down-cue" aria-label="Scroll down">
                          <svg className="vision-down-arrow" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <polyline points="19 12 12 19 5 12" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*  Page 2: Interactive Tech Stack Skills Section  */}
                  <div className="images__listitem">
                    <div className="images__overflow vision-slide-beige-container">
                      <TechStackSkillsSection />
                    </div>
                  </div>
                  {/*  Page 3: Core Competencies  */}
                  <div className="images__listitem">
                    <div className="images__overflow core-competencies-slide-container">
                      <CoreCompetenciesSection />
                    </div>
                  </div>
                </div>
                {/*  text content  */}
                <div className="mxd-dv-sticky-img__content">
                  {/*  counter  */}
                  <p className="mxd-dv-sticky-img__number">
                    <span className="number__current">01</span>
                    &nbsp;/&nbsp;
                    <span className="number__total">03</span>
                  </p>
                  {/*  titles  */}
                  <div className="mxd-dv-sticky-img__titlewrap">
                    <div className="mxd-dv-sticky-img__titlelist">
                      <div className="mxd-dv-sticky-img__titleitem vision-slide-title-empty">
                        <h2 className="permanent vision-title-blank"></h2>
                      </div>
                      <div className="mxd-dv-sticky-img__titleitem vision-slide-title-empty">
                        <h2 className="permanent vision-title-blank"></h2>
                      </div>
                      <div className="mxd-dv-sticky-img__titleitem">
                        <h2 className="permanent">Development</h2>
                      </div>
                    </div>
                  </div>
                  {/*  permanent button  */}
                  <div className="mxd-dv-sticky-img__btnholder">
                    <a className="btn btn-line btn-line-permanent" href="#services">
                      <span className="btn-caption mxd-scramble">Process</span>
                    </a>
                  </div>

                </div>
              </div>
            </div>

          </div>
          {/*  Divider - Sticky Images End  */}
        </div>

        <div id="insights" style={{ backgroundColor: "#faf7f0" }}>
          <div id="achievements" style={{ position: "relative", top: "-20px" }}></div>
          {/*  Section - Blog Preview Start  */}
          <div className="mxd-section blur-section padding-top-title padding-bottom-preview" style={{ backgroundColor: "#faf7f0" }}>
            <div className="pinned-section__inner">
              <div className="mxd-container grid-s-container">

                {/*  Block - Section Title v04 Start  */}
                <div className="mxd-block">
                  <div className="mxd-section-title pre-subtitle-s controls-bottom-mobile">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        <div className="col-12 col-xl-8 mxd-grid-item-s">
                          <div className="mxd-section-title__title pre-caption">
                            <h2 className="mxd-split-lines">ACHIEVEMENTS</h2>
                          </div>
                          <div className="mxd-section-title__caption pre-controls" style={{ marginTop: "1.5rem" }}>
                            <p className="t-bold t-large mxd-split-lines">A snapshot of the milestones, challenges, and <span>recognition earned along the way.</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  Block - Section Title v04 End  */}

                {/*  Block - Achievement Showcase Start  */}
                <div className="mxd-block">
                  <AchievementCard />
                </div>
                {/*  Block - Achievement Showcase End  */}

              </div>
            </div>
          </div>
          {/*  Section - Blog Preview End  */}
        </div>
        <ContactFooterSection />
      </main>
      {/*  Global Cursor Start  */}
      <div id="mxd-cursor" className="mxd-cursor">
        <div id="mxd-cursor__dot" className="mxd-cursor__dot"></div>
        <p id="mxd-cursor__text" className="mxd-cursor__text"></p>
        <div id="mxd-cursor__image" className="mxd-cursor__image"></div>
      </div>
      {/*  Global Cursor End  */}
    </>
  );
}
