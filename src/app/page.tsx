
import React from "react";
import Footer from "@/components/Footer";
import HeroNameImage from "@/components/HeroNameImage";
import InteractivePortraitCard from "@/components/InteractivePortraitCard";
import ProjectTechStack, { CLUDE_TECH_STACKS, IGNITE_TECH_STACKS, SIRUS_TECH_STACKS } from "@/components/ProjectTechStack";
import PhilosophyInteractiveEffect from "@/components/PhilosophyInteractiveEffect";
import VisionAvatarCard from "@/components/VisionAvatarCard";
import TechStackSkillsSection from "@/components/TechStackSkillsSection";
import CoreCompetenciesSection from "@/components/CoreCompetenciesSection";
import ContactFooterSection from "@/components/ContactFooterSection";

export default function Home() {
  return (
    <>
      {/*  Loader Start  */}
      <div className="mxd-page-transition"></div>
      <div className="mxd-loader">
        <div className="mxd-loader__top"></div>
        <div className="mxd-loader__images">
          <img src="/img/arnav_loader_color.jpg" alt="Arnav Singh" />
          <img src="/img/arnav_loader_bw.jpg" alt="Arnav Singh" />
        </div>
        <div className="mxd-loader__bottom">
          <div className="mxd-loader__count">
            <span className="count__text">0</span>
            <span className="count__percent">%</span>
          </div>
          <span className="mxd-loader__caption">Loading</span>
        </div>
      </div>
      {/*  Loader End  */}
      {/*  Navigation Start  */}
      <nav className="mxd-menu">
        <div className="mxd-menu__backdrop"></div>

        {/*  Menu Overlay Start  */}
        <div className="mxd-menu__overlay">
          <div className="mxd-menu__content" data-lenis-prevent>

            {/*  Menu Logo Start  */}
            <div className="mxd-menu__logo">
              <a href="#hero" className="menu-logo">
                {/*  logo icon  */}
                <svg className="menu-logo__image" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 42.4 36">
                  <path d="M25.8,13.8h2.8v5.5h-2.8v-5.5ZM13.8,16.6v2.8h2.8v-5.5h-2.8v2.8ZM32.2,0v2.8h-2.8V0h2.8ZM26.7,5.5h2.8v-2.8h-2.8v2.8ZM21.2,5.5h-5.5v2.8h11.1v-2.8h-5.5ZM12.8,2.8v2.8h2.8v-2.8h-2.8ZM10.1,0v2.8h2.8V0h-2.8ZM7.3,5.5v5.5h2.8V2.8h-2.8v2.8ZM4.5,13.8v2.8H0v2.8h2.8v2.8H0v2.8h2.8v11.1h2.8v-8.3h5.5v-2.8h-5.5v-8.3h1.9v-5.5h-2.9v2.8ZM35,5.5v-2.8h-2.8v8.3h2.8v-5.5ZM42.4,19.4v-2.8h-4.7v-5.5h-2.8v5.5h1.9v8.3h-5.5v2.8h5.5v8.3h2.8v-11.1h2.8v-2.8h-2.8v-2.8h2.8Z" />
                </svg>
                {/*  logo text  */}
                <div className="menu-logo__text">
                  <span>Azurio</span>
                  <span>Template</span>
                </div>
              </a>
            </div>
            {/*  Menu Logo End  */}

            {/*  Menu Media Start  */}
            <div className="mxd-menu__media">
              <div className="menu-media__wrapper">
                {/*  <img src="/img/gifs/dolores.gif" alt="Image" />  */}
                <video preload="auto" autoPlay muted loop playsInline poster="/video/900x1280_menu.webp">
                  <source type="/video/mp4" src="/video/900x1280_menu.mp4" />
                  <source type="/video/webm" src="/video/900x1280_menu.webm" />
                </video>
              </div>
            </div>
            {/*  Menu Media End  */}

            {/*  Main Navigation Start  */}
            <div className="mxd-menu__navigation">
              <div className="mxd-menu__inner">
                <div className="mxd-menu__shadow shadow-top"></div>
                <div className="mxd-menu__caption">
                  <p>🚀 Autonomous AI Systems<br />and Distributed Architecture</p>
                </div>
                {/*  left side  */}
                <div className="mxd-menu__left">
                  <div className="main-menu">
                    <div className="main-menu__content">
                      <ul id="main-menu" className="main-menu__accordion">
                        <li className="main-menu__item">
                          <div className="main-menu__divider divider-top"></div>
                          <div className="main-menu__toggle">
                            <p className="main-menu__link">
                              <span className="main-menu__number">/ 01</span>
                              <span className="main-menu__caption">Home</span>
                            </p>
                            <div className="main-menu__arrow">
                              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
                                <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                              </svg>
                            </div>
                          </div>
                          <ul className="submenu">
                            <li className="submenu__item active">
                              <a href="#hero">Branding studio</a>
                            </li>
                            <li className="submenu__item">
                              <a href="index-software-development-company.html">Software development company</a>
                            </li>
                            <li className="submenu__item">
                              <a href="index-creative-agency.html">Creative agency</a>
                            </li>
                            <li className="submenu__item">
                              <a href="index-freelancer-portfolio.html">Freelancer portfolio</a>
                            </li>
                            <li className="submenu__item">
                              <a href="index-design-studio.html">Design studio</a>
                            </li>
                            <li className="submenu__item">
                              <a href="index-web-developer.html">Web Developer</a>
                            </li>
                            <li className="submenu__item">
                              <a href="index-personal-portfolio.html">Personal portfolio</a>
                            </li>
                            <li className="submenu__item">
                              <a href="index-digital-agency.html">Digital agency</a>
                            </li>
                            <li className="submenu__item">
                              <a href="index-web-studio.html">Web Studio</a>
                            </li>
                            <li className="submenu__item">
                              <a href="index-digital-designer.html">Digital designer</a>
                            </li>
                          </ul>
                          <div className="main-menu__divider divider-bottom"></div>
                        </li>
                        <li className="main-menu__item">
                          {/*  <div className="main-menu__divider divider-top"></div>  */}
                          <div className="main-menu__toggle">
                            <p className="main-menu__link">
                              <span className="main-menu__number">/ 02</span>
                              <span className="main-menu__caption">Works</span>
                            </p>
                            <div className="main-menu__arrow">
                              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
                                <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                              </svg>
                            </div>
                          </div>
                          <ul className="submenu">
                            <li className="submenu__item">
                              <a href="#works">Works default</a>
                            </li>
                            <li className="submenu__item">
                              <a href="#works">Works grid</a>
                            </li>
                            <li className="submenu__item">
                              <a href="#works">Works grid sticky</a>
                            </li>
                            <li className="submenu__item">
                              <a href="#works">Project details</a>
                            </li>
                          </ul>
                          <div className="main-menu__divider divider-bottom"></div>
                        </li>
                        <li className="main-menu__item">
                          {/*  <div className="main-menu__divider divider-top"></div>  */}
                          <div className="main-menu__toggle">
                            <p className="main-menu__link">
                              <span className="main-menu__number">/ 03</span>
                              <span className="main-menu__caption">Pages</span>
                            </p>
                            <div className="main-menu__arrow">
                              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
                                <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                              </svg>
                            </div>
                          </div>
                          <ul className="submenu">
                            <li className="submenu__item">
                              <a href="#about">About me</a>
                            </li>
                            <li className="submenu__item">
                              <a href="#about">About us</a>
                            </li>
                            <li className="submenu__item">
                              <a href="#services">Services</a>
                            </li>
                            <li className="submenu__item">
                              <a href="team.html">Our team</a>
                            </li>
                            <li className="submenu__item">
                              <a href="pricing.html">Pricing</a>
                            </li>
                            <li className="submenu__item">
                              <a href="faq.html">FAQ page</a>
                            </li>
                            <li className="submenu__item">
                              <a href="404.html">404 error page</a>
                            </li>
                            <li className="submenu__item">
                              <a href="index.html">Landing page</a>
                            </li>
                          </ul>
                          <div className="main-menu__divider divider-bottom"></div>
                        </li>
                        <li className="main-menu__item">
                          {/*  <div className="main-menu__divider divider-top"></div>  */}
                          <div className="main-menu__toggle">
                            <p className="main-menu__link">
                              <span className="main-menu__number">/ 04</span>
                              <span className="main-menu__caption">Insights</span>
                            </p>
                            <div className="main-menu__arrow">
                              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
                                <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                              </svg>
                            </div>
                          </div>
                          <ul className="submenu">
                            <li className="submenu__item">
                              <a href="#insights">Blog standard</a>
                            </li>
                            <li className="submenu__item">
                              <a href="#insights">Blog creative</a>
                            </li>
                            <li className="submenu__item">
                              <a href="#insights">Single post</a>
                            </li>
                          </ul>
                          <div className="main-menu__divider divider-bottom"></div>
                        </li>
                        <li className="main-menu__item">
                          {/*  <div className="main-menu__divider divider-top"></div>  */}
                          <div className="main-menu__toggle">
                            <a className="main-menu__link" href="#contact">
                              <span className="main-menu__number">/ 05</span>
                              <span className="main-menu__caption">Contact</span>
                            </a>
                            {/*  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
                            <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z"/>
                          </svg>  */}
                          </div>
                          <div className="main-menu__divider divider-bottom"></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*  right side  */}
                <div className="mxd-menu__right">
                  <div className="menu-contact">
                    <div className="menu-contact__item">
                      <ul className="menu-contact__list">
                        <li>
                          <a className="tag tag-m" href="mailto:arnav152007@gmail.com">
                            <span className="mxd-scramble">arnav152007@gmail.com</span>
                          </a>
                        </li>
                        <li>
                          <a className="tag tag-m" href="tel:+918423622491">
                            <span className="mxd-scramble">+91 8423622491</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-contact__item">
                      <ul className="menu-contact__list">
                        <li>
                          <a className="tag tag-m" href="https://maps.google.com/?q=Chandigarh+University" target="_blank">
                            <span>Chandigarh University Campus,<br />Punjab, India</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-contact__item">
                      <ul className="menu-contact__list">
                        <li>
                          <a className="tag tag-m" href="https://dribbble.com/" target="_blank"><span className="mxd-scramble">Dribbble</span></a>
                        </li>
                        <li>
                          <a className="tag tag-m" href="https://www.linkedin.com/in/arnav-singh-986722252" target="_blank"><span className="mxd-scramble">LinkedIn</span></a>
                        </li>
                        <li>
                          <a className="tag tag-m" href="https://github.com/arnnnnaaavvvvv" target="_blank"><span className="mxd-scramble">Github</span></a>
                        </li>
                        <li>
                          <a className="tag tag-m" href="https://www.figma.com/community" target="_blank"><span className="mxd-scramble">Figma Community</span></a>
                        </li>
                        <li>
                          <a className="tag tag-m" href="https://codepen.io/" target="_blank"><span className="mxd-scramble">Codepen</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*  data bottom line  */}
                <div className="mxd-menu__shadow"></div>
                <div className="mxd-menu__data">
                  <div className="menu-data__left">
                    <p className="menu-data__text">
                      Made with
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
                        <path d="M2.6,6.4v2.6H0V3.9h2.6v2.6ZM15.4,3.9v5.1h2.6V3.9h-2.6ZM12.9,11.6h2.6v-2.6h-2.6v2.6ZM2.6,9v2.6h2.6v-2.6h-2.6ZM10.3,14.1h2.6v-2.6h-2.6v2.6ZM5.1,11.6v2.6h2.6v-2.6h-2.6ZM7.7,3.9V1.3H2.6v2.6h5.1ZM15.4,3.9V1.3h-5.1v2.6h5.1ZM10.3,6.4v-2.6h-2.6v2.6h2.6ZM7.7,16.7h2.6v-2.6h-2.6v2.6Z" />
                      </svg>
                      {/*  <i className="ph-fill ph-heart t-additional"></i>  */}
                      by
                      <a href="https://wrapmarket.com/shop/MixDesign" target="_blank">
                        <span className="mxd-scramble">Mix_Design</span>
                      </a>
                    </p>
                  </div>
                  <div className="menu-data__right">
                    <p className="menu-data__text">Arnav Singh Portfolio</p>
                    <p className="menu-data__text">©2026</p>
                  </div>
                </div>
              </div>

            </div>
            {/*  Main Navigation End  */}

          </div>
        </div>
        {/*  Menu Overlay End  */}

      </nav>
      {/*  Navigation End  */}
      {/*  Header Start  */}
      <header id="header" className="mxd-header mxd-header-permanent">
        {/*  header controls  */}
        <div className="mxd-header__controls loading-fade">
          <a className="btn mxd-header__link slide-right-up" href="#contact" aria-label="Say Hello">
            <span className="btn-caption mxd-scramble">Say Hello</span>
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
                <path d="M18,0v14.4h-3.6v-7.2h-3.6v-3.6H3.6V0h14.4ZM7.2,10.8h3.6v-3.6h-3.6s0,3.6,0,3.6ZM3.6,14.4h3.6v-3.6h-3.6v3.6ZM0,18h3.6v-3.6H0v3.6Z" />
              </svg>
            </i>
            {/*  Phosphor icon  */}
            {/*  <i className="ph-bold ph-arrow-up-right"></i>  */}
          </a>
          <button type="button" className="hero-menu-pill mxd-menu__toggle" aria-label="Open Navigation Menu">
            MENU
          </button>
        </div>
      </header>
      {/*  Header End  */}

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
                        <img className="card__media" src="/img/works/showcase-stack/neurosense.png" alt="Project Preview Image" style={{ imageRendering: "-webkit-optimize-contrast" }} />
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
          {/*  Section - Blog Preview Start  */}
          <div className="mxd-section blur-section padding-top-title padding-bottom-preview" style={{ backgroundColor: "#faf7f0" }}>
            <div className="pinned-section__inner">
              <div className="mxd-container grid-s-container">

                {/*  Block - Section Title v04 Start  */}
                <div className="mxd-block">
                  <div className="mxd-section-title pre-subtitle-s controls-bottom-mobile">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        <div className="col-12 col-xl-6 mxd-grid-item-s">
                          <div className="mxd-section-title__title pre-caption">
                            <h2 className="mxd-split-lines">ACHIEVEMENTS</h2>
                          </div>
                        </div>
                        <div className="col-12 col-xl-5 mxd-grid-item-s">
                          <div className="mxd-section-title__data top-controls">
                            <div className="mxd-section-title__controls anim-uni-in-up">
                              <a className="btn btn-line btn-line-default" href="#insights">
                                <span className="btn-caption mxd-scramble">Engineering Briefs</span>
                              </a>
                            </div>
                            <div className="mxd-section-title__caption pre-controls">
                              <p className="t-bold t-large mxd-split-lines">Inspiring ideas, creative insights, and the latest in
                                design and tech. <span>Fueling innovation for your digital journey.</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  Block - Section Title v04 End  */}

                {/*  Block - Blog Preview Grid x4 Start  */}
                <div className="mxd-block">
                  <div className="mxd-blog-grid">
                    <div className="container-fluid p-0">
                      <div className="row g-0 mxd-blog-grid__gallery">
                        {/*  item  */}
                        <div className="col-12 col-lg-3 mxd-blog-item mxd-blog-item-s animate-card-4">
                          <div className="mxd-blog-item__date">
                            <span className="meta-date">02 February, 2026</span>
                          </div>
                          <a className="mxd-blog-item__media active-cursor-permanent" data-cursor-text="Read Post" href="https://github.com/arnnnnaaavvvvv" target="_blank" rel="noopener noreferrer">
                            <img className="" src="/img/blog/preview/grid-x3/pr-01.webp" alt="Blog Preview Image" />
                          </a>
                          <div className="mxd-blog-item__caption">
                            <div className="mxd-blog-item__title">
                              <a className="blog-name-s" href="https://github.com/arnnnnaaavvvvv" target="_blank" rel="noopener noreferrer">Building Multi-Tenant Container Runtimes at Scale</a>
                            </div>
                          </div>
                        </div>
                        {/*  item  */}
                        <div className="col-12 col-lg-3 mxd-blog-item mxd-blog-item-s animate-card-4">
                          <div className="mxd-blog-item__date">
                            <span className="meta-date">28 January, 2026</span>
                          </div>
                          <a className="mxd-blog-item__media active-cursor-permanent" data-cursor-text="Read Post" href="https://github.com/arnnnnaaavvvvv" target="_blank" rel="noopener noreferrer">
                            <img className="" src="/img/blog/preview/grid-x3/pr-02.webp" alt="Blog Preview Image" />
                          </a>
                          <div className="mxd-blog-item__caption">
                            <div className="mxd-blog-item__title">
                              <a className="blog-name-s" href="https://github.com/arnnnnaaavvvvv" target="_blank" rel="noopener noreferrer">Autonomous Multi-Agent Orchestration via Graph State Machines</a>
                            </div>
                          </div>
                        </div>
                        {/*  item  */}
                        <div className="col-12 col-lg-3 mxd-blog-item mxd-blog-item-s animate-card-4">
                          <div className="mxd-blog-item__date">
                            <span className="meta-date">15 January, 2026</span>
                          </div>
                          <a className="mxd-blog-item__media active-cursor-permanent" data-cursor-text="Read Post" href="https://github.com/arnnnnaaavvvvv" target="_blank" rel="noopener noreferrer">
                            <img className="" src="/img/blog/preview/grid-x3/pr-04.webp" alt="Blog Preview Image" />
                          </a>
                          <div className="mxd-blog-item__caption">
                            <div className="mxd-blog-item__title">
                              <a className="blog-name-s" href="https://github.com/arnnnnaaavvvvv" target="_blank" rel="noopener noreferrer">Low-Latency Conflict-Free Replicated Data Types (CRDTs)</a>
                            </div>
                          </div>
                        </div>
                        {/*  item  */}
                        <div className="col-12 col-lg-3 mxd-blog-item mxd-blog-item-s animate-card-4">
                          <div className="mxd-blog-item__date">
                            <span className="meta-date">03 January, 2026</span>
                          </div>
                          <a className="mxd-blog-item__media active-cursor-permanent" data-cursor-text="Read Post" href="https://github.com/arnnnnaaavvvvv" target="_blank" rel="noopener noreferrer">
                            <img className="" src="/img/blog/preview/grid-x3/pr-03.webp" alt="Blog Preview Image" />
                          </a>
                          <div className="mxd-blog-item__caption">
                            <div className="mxd-blog-item__title">
                              <a className="blog-name-s" href="https://github.com/arnnnnaaavvvvv" target="_blank" rel="noopener noreferrer">Fine-Tuning Open Source LLMs for Real-Time Code Synthesis</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  Block - Blog Preview Grid x4 End  */}

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
