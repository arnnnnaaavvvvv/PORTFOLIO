/*! ------------------------------------------------
 * Project Name: Azurio - Digital Agency & Personal Portfolio HTML Template
 * Project Description: Stand out and express your uniqueness with Azurio - a vibrant and minimal HTML template for creatives, studios and freelancers. Impress your website visitors with a clean, stylish layout and stunning visuals.
 * Tags: mix_design, resume, portfolio, personal page, cv, template, one page, responsive, html5, css3, creative, clean, agency, studio
 * Version: 1.0.0
 * Build Date: March 2026
 * Last Update: July 2026
 * Author: mix_design
 * File name: app.js
 * ------------------------------------------------

 * ------------------------------------------------
 * Table of Contents
 * ------------------------------------------------
 *
 *  01. Base - Inits
 *  02. Base - Loader & Pages Transition
 *  03. Base - SplitText Animations
 *  04. Base - Get Users Device Type
 *  05. Base - Viewport Height Detection
 *  06. Base - Menu & Hamburger
 *  07. Global Effect - Cursor
 *  08. Global Effect - Header Scroll Behavior
 *  09. Global Effect - Blur
 *  10. Global Effect - Sections Pinning
 *  11. Global Effect - Scroll to Top
 *  12. Global Effect - Smooth Anchor Scroll
 *  13. Animation - Gravity (Matter.js)
 *  14. Animation - Cursor Trail Effect
 *  15. Animation - Cursor Trail Transparent Effect
 *  16. Animation - Text Scramble Effect
 *  17. Animation - Preview Hover Slideshow
 *  18. Animation - Scroll Animation for Stats
 *  19. Showcase - Projects Stacking Cards Demo
 *  20. Showcase - Services Stacking Cards
 *  21. Showcase - Landing Stacking Cards
 *  22. Showcase - Projects ClipPath Demo
 *  23. Marquee - Two Lines
 *  24. Marquee - One Line To Right
 *  25. Marquee - One Line To Left
 *  26. Divider - Scroll-Driven Clip-Path Reveal
 *  27. Divider - Sticky Caption
 *  28. Animation - Common Animations
 *  29. Parallax - Ukiyo Images & Video
 *  30. Animation - Perspective List
 *  31. Swiper Slider - Testimonials
 *  32. Swiper Slider - Inner Pages Demo
 *  33. Jquery - Jquery Dependent Components
 *  34. Next Project Arrow – Scroll-Connected Transition
 *  35. Color Switch
 *  36. Hero Scaling Video
 *  37. Hero Portrait/Landscape Video Swap
 *  38. Hero 3D Images on Scroll
 *  39. Hero Inertia
 *  40. Hero Horizontal Slider
 *  41. Hero Banners Hover Animation
 *  42. Hero Typed.js Plugin Settings
 *
 * ------------------------------------------------
 * Table of Contents End
 * ------------------------------------------------ */

// --------------------------------------------- //
// Base - Inits Start
// --------------------------------------------- //
function initAzurio() {
  if (window.__azurioInitialized) return;
  window.__azurioInitialized = true;

  const lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  });
  gsap.ticker.lagSmoothing(0);

  gsap.registerPlugin(ScrollTrigger, CustomEase, SplitText, Flip, ScrollToPlugin, InertiaPlugin);
  CustomEase.create("hop", ".87, 0, .13, 1");
  CustomEase.create("common", ".23, .65, .74, 1.09");

  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });

  mxdLoader();

  let mxdNavigation = null;
  document.fonts.ready.then(() => {
    mxdNavigation = mxdMenu(lenis);
    mxdTypeAnimations();
  });

  // hero sections
  mxdHeroVideoScale();
  mxdHeroVideoSwap();
  mxdHero3dImages();
  mxdHeroInertia();
  mxdHeroHorizontal();
  
  mxdHeroTyped();
  // features
  mxdBlur();
  mxdProjectsStack();
  mxdServicesStack();
  mxdLandingStack();
  mxdProjectsClip();
  mxdDvStickyMedia();
  mxdDvStickyCaption();
  mxdPin();
  mxdToTop();
  mxdSmoothScroll();
  mxdGravity();
  mxdStats();
  mxdPerspectiveList();
  mxdViewportHeight();
  mxdColorSwitcher();
  // desktop only
  if (deviceType() === "desktop") {
    mxdCursor();
    mxdCursorTrail();
    mxdCursorTrailTr();
    mxdTextScramble();
    mxdHoverSlideshow();
    mxdHeroBannersHover();
  } else {
    const cur = document.getElementById("mxd-cursor");
    if (cur) cur.style.display = "none";
  }

  window.addEventListener("pageshow", (event) => {
    const navEntry = performance.getEntriesByType("navigation")[0];
    const isBackForward = navEntry && navEntry.type === "back_forward";
    if (event.persisted || isBackForward) {
      const transition = document.querySelector(".mxd-page-transition");
      if (transition) { gsap.set(transition, { y: "-100%" }); }
      mxdNavigation?.resetMenu();
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAzurio);
} else {
  initAzurio();
}
window.initAzurio = initAzurio;
// --------------------------------------------- //
// Base - Inits End
// --------------------------------------------- //

// --------------------------------------------- //
// Base - Loader & Pages Transition Start
// --------------------------------------------- //
// loader main
function mxdLoader() {
  const content = document.querySelector('body');
  const imgLoad = imagesLoaded(content);

  function mxdSafeSessionGet(key) {
    try {
      return sessionStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function mxdSafeSessionSet(key, value) {
    try {
      sessionStorage.setItem(key, value);
    } catch (e) {
      // storage unavailable
    }
  }

  const pageTransition = document.querySelector(".mxd-page-transition");
  const loader = document.querySelector(".mxd-loader");
  if (!pageTransition || !loader) return;

  const navEntry = performance.getEntriesByType("navigation")[0];
  const navType = navEntry ? navEntry.type : "navigate";

  const isReload = navType === "reload";
  // const isFirstVisit = !sessionStorage.getItem("mxd-visited");
  const isFirstVisit = !mxdSafeSessionGet("mxd-visited");
  const shouldShowLoader = isFirstVisit || isReload;

  if (!shouldShowLoader) {
    mxdPageTransition();
    pageAppearance();
    return;
  }

  // sessionStorage.setItem("mxd-visited", "true");
  mxdSafeSessionSet("mxd-visited", "true");
  loader.style.display = "flex";

  const startTl = startLoader();
  startTl.play();

  const loaderTime = 1.2;

  Promise.all([
    new Promise(resolve => imgLoad.on("done", resolve)),
    new Promise(resolve => setTimeout(resolve, loaderTime * 1000))
  ]).then(() => {
  gsap.timeline()
    .add(hideLoader())
    .add(() => {
      loader.style.display = "none";
      mxdPageTransition();
      pageAppearance();
    });
  });

}
// page transition
function mxdPageTransition() {
  const transition = document.querySelector(".mxd-page-transition");
  gsap.to(transition, {
    y: "-100%",
    duration: 0.7,
    ease: "hop"
  });
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute("href");
    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("mailto") ||
      href.startsWith("tel") ||
      link.target === "_blank" ||
      link.hasAttribute("download")
    ) return;

    link.addEventListener("click", (e) => {
      const targetUrl = link.href;
      e.preventDefault();

      gsap.set(transition, { y: "100%" });
      gsap.to(transition, {
        y: "0%",
        duration: 0.7,
        ease: "hop",
        onComplete: () => {
          window.location.href = targetUrl;
        }
      });
    });
  });
}
let imageCycleTl = null;
// Start loader animation
function startLoader() {
  const imgContainer = document.querySelector(".mxd-loader__images");
  const images = imgContainer.querySelectorAll("img");
  const counterElement = document.querySelector(".count__text");

  let currentValue = 0;

  const tl = gsap.timeline();
  tl.to(imgContainer, {
    clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)",
    duration: 0.6,
    ease: "hop",
  });
  // counter animation synced to timeline
  tl.to({}, {
    duration: 1.2,
    onUpdate: function () {
      currentValue = Math.min(Math.floor(this.progress() * 100), 100);
      counterElement.textContent = currentValue;
    }
  }, 0);
  // image cycling
  tl.add(() => {
    gsap.set(images, { opacity: 0, force3D: true });
    imageCycleTl = gsap.timeline({ repeat: -1 });
    images.forEach((img, i) => {
    imageCycleTl
      .set(images, { opacity: 0 })   // hide all
      .set(img, { opacity: 1 })      // show current
      .to({}, { duration: 0.14 });   // hold time
    });
  }, 0);

  return tl;
}
// hide loader animation
function hideLoader() {
  return gsap.timeline({
    onStart: () => {
      if (imageCycleTl) {
        imageCycleTl.kill();
        imageCycleTl = null;
      }
    }
  })
  .to(".mxd-loader__images", {
    clipPath: "polygon(100% 0%, 100% 0%, 0% 0%, 0% 0%)",
    duration: 0.6,
    ease: "hop",
  })
  .to(".mxd-loader__top, .mxd-loader__bottom", {
    opacity: 0,
    duration: 0.4
  }, 0);
}
// page appearance
function pageAppearance() {
  const loadingWrap = document.querySelector('.loading-wrap');
  const loadingItems = loadingWrap ? loadingWrap.querySelectorAll('.loading-item') : [];
  const loadingSplits = loadingWrap ? loadingWrap.querySelectorAll('.loading-split') : [];
  const loadingChars = loadingWrap ? loadingWrap.querySelectorAll('.loading-chars') : [];

  const fadeInItems = document.querySelectorAll('.loading-fade');

  loadingChars.forEach((el) => {
    SplitText.create(el, {
      type: "chars, words",
      charsClass: "char",
      mask: "chars",
      smartWrap: true,
      aria: "none",
      onSplit: (self) => {
        gsap.from(self.chars, {
          yPercent: 100,
          autoAlpha: 0,
          duration: 0.6,
          stagger: {
            amount: 0.3,
          }
        });
      },
    });
  });

  loadingSplits.forEach((el) => {
    SplitText.create(el, {
      type: "words, lines",
      linesClass: "line",
      autoSplit: true,
      mask: "lines",
      aria: "none",
      onSplit: (self) => {
        gsap.from(self.lines, {
          yPercent: 100,
          rotation: 1,
          duration: 0.6,
          stagger: { amount: 0.2 }
        });
      },
    });
  });

  if (loadingItems.length) {
    gsap.set(loadingItems, { opacity: 0 });
    gsap.to(loadingItems, {
      duration: 0.3,
      ease: "none",
      startAt: { y: 10 },
      y: 0,
      opacity: 1,
      delay: 0.6,
      stagger: 0.08
    });
  }

  if (fadeInItems.length) {
    gsap.set(fadeInItems, { opacity: 0 });
    gsap.to(fadeInItems, { duration: 0.8, ease: "none", opacity: 1, delay: 1 });
  }

  // Hero 3D Photo Cursor-tilt + Spring physics
  const photoWrap = document.getElementById('hero-photo-wrap');
  if (photoWrap) {
    let currentX = 0, currentY = 0, targetX = 0, targetY = 0;
    window.addEventListener('mousemove', (e) => {
      const rect = photoWrap.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) / (window.innerWidth / 2);
      const y = (e.clientY - (rect.top + rect.height / 2)) / (window.innerHeight / 2);
      targetX = Math.max(-12, Math.min(12, x * 14));
      targetY = Math.max(-12, Math.min(12, -y * 14));
    });
    window.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
    });
    function updateTilt() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      photoWrap.style.transform = `translate(-50%, -46%) perspective(1000px) rotateX(${currentY}deg) rotateY(${currentX}deg)`;
      requestAnimationFrame(updateTilt);
    }
    requestAnimationFrame(updateTilt);
  }
}
// --------------------------------------------- //
// Base - Loader & Pages Transition End
// --------------------------------------------- //

// --------------------------------------------- //
// Base - SplitText Animations Start
// --------------------------------------------- //
function mxdTypeAnimations() {
  // blured text reveal
  const splitTypes = document.querySelectorAll(".reveal-type");
  splitTypes.forEach((char,i) => {
    const text = new SplitType(char, { types: 'words, chars' });
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: 'top bottom',
        end: 'top 60%',
        scrub: 2,
        // markers: true
      },
      opacity: 0,
      filter: "blur(10px)",
      stagger: 0.05
    });
  });
  // split lines text
  document.querySelectorAll(".mxd-split-lines").forEach((revealLines) => {
    SplitText.create(revealLines, {
      type: "words, lines",
      linesClass: "line",
      autoSplit: true,
      mask: "lines",
      aria: "none",
      onSplit: (self) => {
        return gsap.timeline({
          scrollTrigger: {
            trigger: revealLines,
            start: "top bottom",
            end: "top 90%",
            toggleActions: "none play none reset",
            // markers: true
          },
        }).from(self.lines, {
          yPercent: 100,
          rotation: 1,
          duration: 0.5,
          stagger: { amount: 0.2 }
        });
      },
    });
  });
  // split lines reverse text
  document.querySelectorAll(".mxd-split-lines-reverse").forEach((revealLines) => {
    SplitText.create(revealLines, {
      type: "words, lines",
      linesClass: "line",
      autoSplit: true,
      mask: "lines",
      aria: "none",
      onSplit: (self) => {
        // console.log("doing");
        return gsap.timeline({
          scrollTrigger: {
            trigger: revealLines,
            start: "top bottom",
            end: "top 90%",
            toggleActions: "none play none reset",
            // markers: true
          },
        }).from(self.lines, {
          yPercent: -100,
          rotation: 1,
          duration: 0.5,
          stagger: { amount: 0.1 }
        });
      },
    });
  });
  // animated chars
  document.querySelectorAll(".anim-uni-chars").forEach((animChars) => {
    SplitText.create(animChars, {
      type: "chars, words",
      charsClass: "char",
      mask: "chars",
      smartWrap: true,
      aria: "none",
      onSplit: (self) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: animChars,
            start: "top bottom",
            end: "top 80%",
            toggleActions: "none play none reset",
            ease: "custom",
            // markers: true
          },
        }).from(self.chars, {
          yPercent: 100,
          autoAlpha: 0,
          duration: 0.6,
          stagger: {
            amount: 0.3,
          }
        });
      },
    });
  });
}
// --------------------------------------------- //
// Base - SplitText Animations End
// --------------------------------------------- //

// --------------------------------------------- //
// Base - Get Users Device Type Start
// --------------------------------------------- //
function deviceType() {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};
// --------------------------------------------- //
// Base - Get Users Device Type End
// --------------------------------------------- //

// --------------------------------------------- //
// Base - Viewport Height Detection Start
// --------------------------------------------- //
function mxdViewportHeight() {
  function setVH() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  setVH();
  window.addEventListener("resize", setVH);
  window.addEventListener("orientationchange", setVH);
}
// --------------------------------------------- //
// Base - Viewport Height Detection End
// --------------------------------------------- //

// --------------------------------------------- //
// Base - Menu & Hamburger Start
// --------------------------------------------- //
function mxdMenu(lenisInstance) {

  // guard clause — menu not present? Exit silently
  const menuToggleBtn = document.querySelector(".mxd-menu__toggle");
  const menuOverlay   = document.querySelector(".mxd-menu__overlay");
  const menuBackdrop  = document.querySelector(".mxd-menu__backdrop");
  const container     = document.querySelector(".mxd-app");
  if (!menuToggleBtn || !menuOverlay) {
    return;
  }

  // elements
  const menuOverlayContainer = document.querySelector(".mxd-menu__content");
  const menuMediaWrapper    = document.querySelector(".menu-media__wrapper");
  const hamburgerIcon       = document.querySelector(".mxd-menu__hamburger");

  const menuHeaderText = document.querySelectorAll(".menu-logo__text span, .mxd-menu__caption p");
  const mainMenuText   = document.querySelectorAll(".main-menu__link span");
  const contactText    = document.querySelectorAll(".menu-contact a");
  const footerText     = document.querySelectorAll(".menu-data__text, .menu-data__text a");
  const menuDividers   = document.querySelectorAll(".main-menu__divider");
  const menuArrows     = document.querySelectorAll(".main-menu__arrow");

  // split helper
  function splitAndHide(elements) {
    if (!elements.length) return [];

    return [...elements].map(el => {
      const split = SplitText.create(el, {
        type: "lines",
        mask: "lines",
        linesClass: "line",
        aria: "none"
      });

      gsap.set(split.lines, { y: "-114%" });
      return split;
    });
  }

  const headerSplits  = splitAndHide(menuHeaderText);
  const mainMenuSplits = splitAndHide(mainMenuText);
  const contactSplits = splitAndHide(contactText);
  const footerSplits  = splitAndHide(footerText);

  gsap.set(menuDividers, { clipPath: "inset(0% 100% 0% 0%)" });
  gsap.set(menuArrows, { opacity: 0 });
  gsap.set(menuMediaWrapper, { scale: 1.4 });
  // gsap.set(menuMediaWrapper, { opacity: 0 });

  // state
  let isMenuOpen = false;
  let isAnimating = false;

  // toggle logic
  menuToggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (isAnimating) return;

    const tl = gsap.timeline({
      onStart: () => { isAnimating = true; },
      onComplete: () => { isAnimating = false; }
    });

    if (!isMenuOpen) {

      lenisInstance?.stop();
      hamburgerIcon?.classList.add("active");
      const isMobile = window.matchMedia("(max-width: 1024px)").matches;

      tl.to(menuBackdrop, {
        background: isMobile ? "rgba(var(--base-rgb), 0.6)" : "rgba(var(--base-rgb), 0.8)",
        backdropFilter: isMobile ? "blur(6px)" : "blur(14px)",
        duration: 0.5,
        ease: "power2.out"
      })
      .to(menuOverlay, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "hop",
      }, "<")
      .to(menuOverlayContainer, {
        yPercent: 0,
        duration: 1,
        ease: "hop",
      }, "<")
      .to(menuMediaWrapper, {
        scale: 1,
        // opacity: 1,
        duration: 0.75,
        ease: "power2.out",
      }, 0.5)

      // text blocks
      .to(footerSplits.flatMap(s => s.lines), { y: "0%", stagger: -0.05, ease: "hop", duration: 0.75 }, 0.15)
      .to(mainMenuSplits.flatMap(s => s.lines), { y: "0%", stagger: -0.05, ease: "hop", duration: 0.75 }, 0.15)
      .to(menuDividers, { clipPath: "inset(0% 0% 0% 0%)", stagger: -0.05, ease: "hop", duration: 0.75 }, 0.15)
      .to(contactSplits.flatMap(s => s.lines), { y: "0%", stagger: -0.05, ease: "hop", duration: 0.75 }, 0.15)
      .to(headerSplits.flatMap(s => s.lines), { y: "0%", stagger: -0.05, ease: "hop", duration: 0.75 }, 0.45)
      .to(menuArrows, { opacity: 1, stagger: -0.05, ease: "hop", duration: 0.75 }, 0.45);

      isMenuOpen = true;

    } else {

      hamburgerIcon?.classList.remove("active");

      tl.to(menuOverlay, { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", duration: 1, ease: "hop" })
      .to(menuBackdrop, {
        background: "rgba(var(--base-rgb), 0)",
        backdropFilter: "blur(0px)",
        duration: 1,
        ease: "power2.in"
      }, "<")
      .to(menuOverlayContainer, { yPercent: -50, duration: 1, ease: "hop" }, "<")
      .call(() => {
        [...headerSplits, ...mainMenuSplits, ...contactSplits, ...footerSplits]
          .forEach(split => gsap.set(split.lines, { y: "-114%" }));

        gsap.set(menuDividers, { clipPath: "inset(0% 100% 0% 0%)" });
        gsap.set(menuArrows, { opacity: 0 });
        gsap.set(menuMediaWrapper, { scale: 1.4 });
        // gsap.set(menuMediaWrapper, { opacity: 0 });

        // reset menu accordion state
        document.querySelectorAll(".submenu").forEach(submenu => { submenu.style.display = "none"; });
        document.querySelectorAll(".main-menu__item.open").forEach(item => { item.classList.remove("open"); });

        lenisInstance?.start();
      });

      isMenuOpen = false;
    }
  });

  function resetMenu() {

    gsap.set(menuOverlay, { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" });
    gsap.set(menuBackdrop, {
      background: "rgba(var(--base-rgb), 0)",
      backdropFilter: "blur(0px)"
    });
    gsap.set(menuOverlayContainer, { yPercent: -50 });
    gsap.set(menuMediaWrapper, { scale: 1.4 });

    // reset SplitText animations
    [...headerSplits, ...mainMenuSplits, ...contactSplits, ...footerSplits]
      .forEach(split => gsap.set(split.lines, { y: "-114%" }));

    gsap.set(menuDividers, { clipPath: "inset(0% 100% 0% 0%)" });
    gsap.set(menuArrows, { opacity: 0 });

    hamburgerIcon?.classList.remove("active");

    // reset accordion state
    document.querySelectorAll(".submenu").forEach(submenu => {
      submenu.style.display = "none";
    });
    document.querySelectorAll(".main-menu__item.open").forEach(item => {
      item.classList.remove("open");
    });

    // reset common state
    isMenuOpen = false;
    isAnimating = false;

    lenisInstance?.start();
  }

  return { resetMenu };
}
// --------------------------------------------- //
// Base - Menu & Hamburger End
// --------------------------------------------- //

// --------------------------------------------- //
// Global Effect - Cursor Start
// --------------------------------------------- //
// require: class name of "active-cursor" && data-cursor-text data attribute
function mxdCursor() {
  const mxdCursor = document.getElementById("mxd-cursor");
  if (!mxdCursor) return;

  const mxdCursorDot = document.getElementById("mxd-cursor__dot");
  const mxdCursorText = document.getElementById("mxd-cursor__text");
  const mxdCursorImage = document.getElementById("mxd-cursor__image");
  const mxdCursorImageTr = document.getElementById("mxd-cursor__image-tr");

  const activeElImage = document.querySelectorAll(".active-cursor-image");
  const activeElImageTr = document.querySelectorAll(".active-cursor-image-tr");
  const activeElPermanent = document.querySelectorAll(".active-cursor-permanent");
  const activeElAccent = document.querySelectorAll(".active-cursor-accent");
  const activeEl = document.querySelectorAll(".active-cursor");
  const oppositeBg = document.querySelectorAll(".bg-color-opposite");
  const links = document.querySelectorAll(".btn-link");

  // === Cursor movement + rotation ===
  let lastX = 0, lastY = 0;

  window.addEventListener("pointermove", (event) => {
    const dx = event.clientX - lastX;
    const dy = event.clientY - lastY;

    // Main cursor (dot + text wrapper)
    gsap.to(mxdCursor, {
      x: event.clientX,
      y: event.clientY,
      duration: 0.4, // same as --_animspeed-medium
      ease: "power1.out",
      scale: 1,
    });

    // Image container tilts slightly based on dx
    gsap.to(mxdCursorImage, {
      rotation: gsap.utils.clamp(-6, 6, dx * 0.5), // limit to -8deg / 8deg
      duration: 0.3,
      ease: "power1.out",
    });

    lastX = event.clientX;
    lastY = event.clientY;
  });

  // window.addEventListener("pointermove", (event) => {
  //   gsap.to(mxdCursor, {
  //     x: event.clientX,
  //     y: event.clientY,
  //     duration: 0.4,
  //     ease: "power1.out",
  //     scale: 1,
  //   });
  // });

  document.addEventListener("pointermove", (event) => {
    gsap.set(mxdCursor, { x: event.clientX, y: event.clientY });
  });

  window.addEventListener("mousedown", (event) => {
    mxdCursor.style.transform = `translateX(${event.clientX}px) translateY(${event.clientY}px)`;
  });

  document.addEventListener("mouseleave", () => {
    gsap.to(mxdCursor, { duration: 0.4, ease: "power1.in", scale: 0 });
    gsap.to(mxdCursorImage, { rotation: 0, duration: 0.3, ease: "power1.in" });
  });

  // common cursor
  activeEl.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      mxdCursorText.innerText = e.dataset.cursorText || "";
      mxdCursorText.classList.add("show");
      mxdCursorDot.classList.add("active", "expand");
    });
    e.addEventListener("mouseleave", () => {
      mxdCursorText.classList.remove("show");
      mxdCursorDot.classList.remove("active", "expand");
    });
  });
  // permanent cursor
  activeElPermanent.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      mxdCursorText.innerText = e.dataset.cursorText || "";
      mxdCursorText.classList.add("show", "permanent");
      mxdCursorDot.classList.add("active-permanent", "expand");
    });
    e.addEventListener("mouseleave", () => {
      mxdCursorText.classList.remove("show", "permanent");
      mxdCursorDot.classList.remove("active-permanent", "expand");
    });
  });
  // accent cursor
  activeElAccent.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      mxdCursorText.innerText = e.dataset.cursorText || "";
      mxdCursorText.classList.add("show", "accent");
      mxdCursorDot.classList.add("active-accent", "expand");
    });
    e.addEventListener("mouseleave", () => {
      mxdCursorText.classList.remove("show", "accent");
      mxdCursorDot.classList.remove("active-accent", "expand");
    });
  });
  // links
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      mxdCursor.classList.add("difference");
      mxdCursorDot.classList.add("cursor-btn-link");
      // mxdCursorText.classList.remove("show");
    });
    link.addEventListener("mouseleave", () => {
      mxdCursor.classList.remove("difference");
      mxdCursorDot.classList.remove("cursor-btn-link");
      // mxdCursorText.classList.add("show");
    });
  });
  // opposite sections
  oppositeBg.forEach(oppositeBg => {
    oppositeBg.addEventListener("mouseover", () => {
      mxdCursorDot.classList.add("active-opposite");
    });

    oppositeBg.addEventListener("mouseleave", () => {
      mxdCursorDot.classList.remove("active-opposite");
    });
  });

  // image cursor
  activeElImage.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      const imgSrc = el.dataset.cursorImage;
      if (imgSrc) {
        mxdCursorImage.innerHTML = `<img src="${imgSrc}" alt="">`;
        mxdCursorImage.classList.add("show");
        mxdCursorDot.classList.add("expand"); // optional, keep dot or hide it
      }
    });

    el.addEventListener("mouseleave", () => {
      mxdCursorImage.classList.remove("show");
      // delay clearing innerHTML until animation finishes
      setTimeout(() => {
        if (!mxdCursorImage.classList.contains("show")) {
          mxdCursorImage.innerHTML = "";
        }
      }, 300); // match your --_animspeed-medium
      mxdCursorDot.classList.remove("expand");
    });

    // el.addEventListener("mouseleave", () => {
    //   mxdCursorImage.classList.remove("show");
    //   mxdCursorImage.innerHTML = ""; // clear image
    //   mxdCursorDot.classList.remove("expand");
    // });
  });

  // image cursor no dot
  activeElImageTr.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      const imgSrc = el.dataset.cursorImage;
      if (imgSrc) {
        mxdCursorImage.innerHTML = `<img src="${imgSrc}" alt="">`;
        mxdCursorImage.classList.add("show");
      }
    });

    el.addEventListener("mouseleave", () => {
      mxdCursorImage.classList.remove("show");
      setTimeout(() => {
        if (!mxdCursorImage.classList.contains("show")) {
          mxdCursorImage.innerHTML = "";
        }
      }, 300);
    });
  });

}
// --------------------------------------------- //
// Global Effect - Cursor End
// --------------------------------------------- //

// --------------------------------------------- //
// Global Effect - Header Scroll Behavior Start
// --------------------------------------------- //
$(window).on("scroll", function() {
  if($(window).scrollTop() > 10) {
      $(".mxd-header").addClass("is-hidden");
  } else {
    $(".mxd-header").removeClass("is-hidden");
  }
});
// --------------------------------------------- //
// Global Effect - Header Scroll Behavior End
// --------------------------------------------- //

// --------------------------------------------- //
// Global Effect - Blur Start
// --------------------------------------------- //
function mxdBlur() {
  const blurContainer = document.querySelector('.blur-container');
  const blurSections = document.querySelectorAll('.blur-section');
  // skip if there’s no container OR no sections
  if (!blurContainer || !blurSections.length) return;

  blurSections.forEach(section => {
    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top bottom', // when section's top hits viewport bottom
        end: 'bottom bottom',   // when section's bottom leaves viewport top
        onEnter: () => gsap.set(blurContainer, { display: 'block' }),
        onLeave: () => gsap.set(blurContainer, { display: 'none' }),
        onEnterBack: () => gsap.set(blurContainer, { display: 'block' }),
        onLeaveBack: () => gsap.set(blurContainer, { display: 'none' }),
      }
    })
  });
}
// --------------------------------------------- //
// Global Effect - Blur End
// --------------------------------------------- //

// --------------------------------------------- //
// Global Effect - Sections Pinning Start
// --------------------------------------------- //
function mxdPin() {
  const pinnedSections = document.querySelectorAll(".pinned-section");
  if (!pinnedSections.length) return;

  const media = gsap.matchMedia();

  // desktop only (1200px+)
  media.add("(min-width: 1200px)", () => {

    pinnedSections.forEach((pinnedSection) => {
      const pinTrigger = pinnedSection.querySelector(".pinned-section__trigger");
      const pinContent = pinnedSection.querySelector(".pinned-section__inner");
      if (!pinTrigger || !pinContent) return;

      ScrollTrigger.create({
        trigger: pinnedSection,
        pin: pinnedSection,
        start: "bottom bottom",
        end: "+=100%",
        scrub: true,
        pinSpacing: false,
        animation: gsap.to(pinContent, {
          autoAlpha: 0.3,
          y: "-40vh",
          scale: 0.94,
          ease: "none"
        })
      });
    });

    // optional cleanup when media query no longer matches
    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger && st.trigger.classList.contains("pinned-section")) {
          st.kill();
        }
      });
    };
  });

  // mobile / tablet (below 1200px)
  media.add("(max-width: 1199px)", () => {
    pinnedSections.forEach(section => {
      const inner = section.querySelector(".pinned-section__inner");
      if (inner) {
        gsap.set(inner, { clearProps: "all" });
      }
    });
  });
}
// --------------------------------------------- //
// Global Effect - Sections Pinning End
// --------------------------------------------- //

// --------------------------------------------- //
// Global Effect - Scroll to Top Start
// --------------------------------------------- //
function mxdToTop() {
  const toTop = document.querySelector("#to-top");
  if (!toTop) return;
  toTop.addEventListener("click", function(event){
    event.preventDefault()
  });
  toTop.addEventListener("click", () => gsap.to(window, { 
    scrollTo: 0,
    ease: "hop",
    duration: 2,
  }));
}
// --------------------------------------------- //
// Global Effect - Scroll to Top End
// --------------------------------------------- //

// --------------------------------------------- //
// Global Effect - Smooth Anchor Scroll Start
// --------------------------------------------- //
function mxdSmoothScroll() {
  const links = document.querySelectorAll('a[href*="#"]:not([href="#"]):not([href="#0"])');
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const url = new URL(this.href);
      const hash = url.hash;
      if (!hash) return;
      const target = document.querySelector(hash);
      if (!target) return;
      // only same-page links
      if (window.location.pathname !== url.pathname || window.location.hostname !== url.hostname) return;
      e.preventDefault();
      gsap.to(window, {
        scrollTo: { y: target, autoKill: true },
        duration: 1,
        ease: "hop"
      });
    });
  });
}
// --------------------------------------------- //
// Global Effect - Smooth Anchor Scroll End
// --------------------------------------------- //

// --------------------------------------------- //
// Animation - Gravity (Matter.js) Start
// --------------------------------------------- //
function mxdGravity() {
  const sections = document.querySelectorAll(".mxd-gravity-section");
  if (!sections.length) return;

  const animateOnScroll = true;

  const config = {
    gravity: { x: 0, y: 1 },
    restitution: 0.5,
    friction: 0.15,
    frictionAir: 0.02,
    density: 0.002,
    wallThickness: 200,
    mouseStiffness: 0.6,
  };

  let engine, runner, mouseConstraint, bodies = [], topWall = null;

  function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
  }

  function initPhysics(container) {
    engine = Matter.Engine.create();
    engine.gravity = config.gravity;
    engine.constraintIterations = 10;
    engine.positionIterations = 20;
    engine.velocityIterations = 16;
    engine.timing.timeScale = 1;

    const containerRect = container.getBoundingClientRect();
    const wallThickness = config.wallThickness;

    const walls = [
      Matter.Bodies.rectangle(
        containerRect.width / 2,
        containerRect.height + wallThickness / 2,
        containerRect.width + wallThickness * 2,
        wallThickness,
        { isStatic: true }
      ),
      Matter.Bodies.rectangle(
        -wallThickness / 2,
        containerRect.height / 2,
        wallThickness,
        containerRect.height + wallThickness * 2,
        { isStatic: true }
      ),
      Matter.Bodies.rectangle(
        containerRect.width + wallThickness / 2,
        containerRect.height / 2,
        wallThickness,
        containerRect.height + wallThickness * 2,
        { isStatic: true }
      ),
    ];
    Matter.World.add(engine.world, walls);

    const objects = container.querySelectorAll(".object");
    objects.forEach((obj, index) => {
      if (obj.tagName === "IMG" || obj.querySelector("img")) {
        const img = obj.tagName === "IMG" ? obj : obj.querySelector("img");
        img.draggable = false;
        img.style.pointerEvents = "none";
      }

      const objRect = obj.getBoundingClientRect();

      const startX = Math.random() * (containerRect.width - objRect.width) + objRect.width / 2;
      const startY = -500 - index * 200;
      const startRotation = (Math.random() - 0.5) * Math.PI;

      const body = Matter.Bodies.rectangle(
        startX,
        startY,
        objRect.width,
        objRect.height,
        {
          restitution: config.restitution,
          friction: config.friction,
          frictionAir: config.frictionAir,
          density: config.density,
        }
      );

      Matter.Body.setAngle(body, startRotation);

      bodies.push({ body, element: obj, width: objRect.width, height: objRect.height });
      Matter.World.add(engine.world, body);
    });

    setTimeout(() => {
      topWall = Matter.Bodies.rectangle(
        containerRect.width / 2,
        -wallThickness / 2,
        containerRect.width + wallThickness * 2,
        wallThickness,
        { isStatic: true }
      );
      Matter.World.add(engine.world, topWall);
    }, 5000);

    const mouse = Matter.Mouse.create(container);
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

    mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: config.mouseStiffness, render: { visible: false } },
    });

    mouseConstraint.mouse.element.oncontextmenu = () => false;

    let dragging = null;
    let originalInertia = null;

    Matter.Events.on(mouseConstraint, "startdrag", function (event) {
      dragging = event.body;
      if (dragging) {
        originalInertia = dragging.inertia;
        Matter.Body.setInertia(dragging, Infinity);
        Matter.Body.setVelocity(dragging, { x: 0, y: 0 });
        Matter.Body.setAngularVelocity(dragging, 0);
      }
    });

    Matter.Events.on(mouseConstraint, "enddrag", function () {
      if (dragging) {
        Matter.Body.setInertia(dragging, originalInertia || 1);
        dragging = null;
        originalInertia = null;
      }
    });

    Matter.Events.on(engine, "beforeUpdate", function () {
      if (dragging) {
        const found = bodies.find((b) => b.body === dragging);
        if (found) {
          const minX = found.width / 2;
          const maxX = containerRect.width - found.width / 2;
          const minY = found.height / 2;
          const maxY = containerRect.height - found.height / 2;

          Matter.Body.setPosition(dragging, {
            x: clamp(dragging.position.x, minX, maxX),
            y: clamp(dragging.position.y, minY, maxY),
          });

          Matter.Body.setVelocity(dragging, {
            x: clamp(dragging.velocity.x, -20, 20),
            y: clamp(dragging.velocity.y, -20, 20),
          });
        }
      }
    });

    container.addEventListener("mouseleave", () => {
      mouseConstraint.constraint.bodyB = null;
      mouseConstraint.constraint.pointB = null;
    });

    container.addEventListener("mouseup", () => {
      mouseConstraint.constraint.bodyB = null;
      mouseConstraint.constraint.pointB = null;
    });

    Matter.World.add(engine.world, mouseConstraint);

    runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    function updatePositions() {
      bodies.forEach(({ body, element, width, height }) => {
        const x = clamp(body.position.x - width / 2, 0, containerRect.width - width);
        const y = clamp(body.position.y - height / 2, -height * 3, containerRect.height - height);
        element.style.left = x + "px";
        element.style.top = y + "px";
        element.style.transform = `rotate(${body.angle}rad)`;
      });
      requestAnimationFrame(updatePositions);
    }
    updatePositions();

    document.querySelectorAll(".object-image img").forEach(img => {
      img.addEventListener("dragstart", e => e.preventDefault());
    });
  }

  if (animateOnScroll) {
    sections.forEach((section) => {
      const container = section.querySelector(".object-container");
      if (container) {
        ScrollTrigger.create({
          trigger: section,
          start: "top bottom",
          once: true,
          onEnter: () => {
            if (!engine) initPhysics(container);
          },
        });
      }
    });
  } else {
    window.addEventListener("load", () => {
      const container = document.querySelector(".object-container");
      if (container) initPhysics(container);
    });
  }

  function myFunctionToRelaunch() {
    ScrollTrigger.refresh();
    const container = document.querySelector(".object-container");
    if (container) initPhysics(container);
    console.log("Function relaunched on window resize!");
  }

  window.addEventListener("resize", myFunctionToRelaunch);
}
// --------------------------------------------- //
// Animation - Gravity (Matter.js) End
// --------------------------------------------- //

// --------------------------------------------- //
// Animation - Cursor Trail Effect Start
// --------------------------------------------- //
function mxdCursorTrail() {
  const sections = document.querySelectorAll(".cursor-trail");
  if (!sections.length) return;

  const trailImages = document.querySelectorAll(".mxd-trail-image");
  if (!trailImages.length) return;

  imagesLoaded(trailImages, () => {
    let isTrailActive = true;
    const MathUtils = {
      lerp: (a, b, n) => (1 - n) * a + n * b,
      distance: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1),
    };

    const getMousePosRelativeTo = (ev, rect) => ({
      x: ev.clientX - rect.left,
      y: ev.clientY - rect.top,
    });

    class TrailImage {
      constructor(el) {
        this.DOM = { el };
        this.defaultStyle = { opacity: 0, scale: 1, x: 0, y: 0 };
        this.rect = this.DOM.el.getBoundingClientRect();

        gsap.set(this.DOM.el, this.defaultStyle);

        window.addEventListener("resize", () => {
          gsap.set(this.DOM.el, this.defaultStyle);
          this.rect = this.DOM.el.getBoundingClientRect();
        });
      }

      isActive() {
        return gsap.getTweensOf(this.DOM.el).length > 0 || this.DOM.el.style.opacity !== "0";
      }
    }

    class ImageTrail {
      constructor(section) {
        this.section = section;
        this.wrapper = section.querySelector(".mxd-trail-wrapper");
        this.content = this.wrapper.querySelector(".mxd-trail-content");

        this.images = [...this.content.querySelectorAll(".mxd-trail-image")].map(
          img => new TrailImage(img)
        );

        this.total = this.images.length;

        this.mousePos = { x: 0, y: 0 };
        this.prevMousePos = { x: 0, y: 0 };
        this.cachedPos = { x: 0, y: 0 };

        this.index = 0;
        this.zIndex = 1;
        this.threshold = 80;

        this.section.addEventListener("pointermove", e => this.onMove(e));
        requestAnimationFrame(() => this.update());
      }

      onMove(ev) {
        const rect = this.wrapper.getBoundingClientRect();
        this.mousePos = getMousePosRelativeTo(ev, rect);
      }

      update() {
        const dx = this.mousePos.x - this.prevMousePos.x;
        const dy = this.mousePos.y - this.prevMousePos.y;

        const dist = MathUtils.distance(
          this.mousePos.x,
          this.mousePos.y,
          this.prevMousePos.x,
          this.prevMousePos.y
        );

        this.cachedPos.x = MathUtils.lerp(this.cachedPos.x, this.mousePos.x, 0.12);
        this.cachedPos.y = MathUtils.lerp(this.cachedPos.y, this.mousePos.y, 0.12);

        if (isTrailActive && dist > this.threshold) {
          this.showNext(dx, dy);
          this.prevMousePos = { ...this.mousePos };
        }

        if (!this.images.some(img => img.isActive())) {
          this.zIndex = 1;
        }

        requestAnimationFrame(() => this.update());
      }

      showNext(dx, dy) {
        const img = this.images[this.index];
        const rot = gsap.utils.clamp(-14, 14, -(dx + dy) * 0.4);

        gsap.killTweensOf(img.DOM.el);

        gsap.timeline()
        .set(img.DOM.el, {
          opacity: 1,
          scale: 1,
          zIndex: this.zIndex++,
          x: this.cachedPos.x - img.rect.width / 2,
          y: this.cachedPos.y - img.rect.height / 2,
          rotation: rot
        })
        .to(img.DOM.el, {
          duration: 2,
          x: this.mousePos.x - img.rect.width / 2,
          y: this.mousePos.y - img.rect.height / 2,
          rotation: rot,
          ease: "expo.out"
        }, 0)
        .to(img.DOM.el, {
          duration: 0.8,
          scale: 0,
          ease: "power1.out",
          onComplete: () => {
            gsap.set(img.DOM.el, {
              scale: 1,
              opacity: 0
            });
          }
        }, 0.35);

        this.index = (this.index + 1) % this.total;
      }
    }

    sections.forEach(section => new ImageTrail(section));

    // Use this if you want images to disappear when the circle cursor active:
    // const interactiveEls = document.querySelectorAll(
    //   '[data-cursor-text], [data-cursor], [data-cursor-icon]'
    // );

    // interactiveEls.forEach(el => {
    //   el.addEventListener('mouseenter', () => {
    //     isTrailActive = false;
    //   });
    //   el.addEventListener('mouseleave', () => {
    //     isTrailActive = true;
    //   });
    // });
  });
}
// --------------------------------------------- //
// Animation - Cursor Trail Effect End
// --------------------------------------------- //

// --------------------------------------------- //
// Animation - Cursor Trail Transparent Effect Start
// --------------------------------------------- //
function mxdCursorTrailTr() {
  const sections = document.querySelectorAll(".cursor-trail-transparent");
  if (!sections.length) return;

  const imgs = document.querySelectorAll(".mxd-trail-transparent-image");
  if (!imgs.length) return;

  imagesLoaded(imgs, () => {

    let isTrailActive = true;

    const MathUtils = {
      lerp: (a, b, n) => (1 - n) * a + n * b,
      distance: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1),
    };

    const MAX_SIZE = 240;

    class TrailImage {
      constructor(el) {
        this.DOM = { el };
        this.setSize();
        this.rect = this.DOM.el.getBoundingClientRect();
      }

      setSize() {
        const img = this.DOM.el;
        const w = img.naturalWidth;
        const h = img.naturalHeight;

        if (w >= h) {
          img.style.width = MAX_SIZE + "px";
          img.style.height = "auto";
        } else {
          img.style.height = MAX_SIZE + "px";
          img.style.width = "auto";
        }
      }

      updateRect() {
        this.rect = this.DOM.el.getBoundingClientRect();
      }

      isActive() {
        return gsap.getTweensOf(this.DOM.el).length > 0;
      }
    }

    class ImageTrail {
      constructor(section) {
        this.section = section;
        this.wrapper = section.querySelector(".mxd-trail-transparent-wrapper");
        this.content = this.wrapper.querySelector(".mxd-trail-transparent-content");

        this.images = [...this.content.querySelectorAll(".mxd-trail-transparent-image")].map(
          img => new TrailImage(img)
        );

        this.mousePos = { x: 0, y: 0 };
        this.prevPos = { x: 0, y: 0 };
        this.cachedPos = { x: 0, y: 0 };

        this.index = 0;
        this.zIndex = 1;
        this.threshold = 120;

        this.section.addEventListener("pointermove", e => this.move(e));

        requestAnimationFrame(() => this.update());
      }

      move(ev) {
        const rect = this.wrapper.getBoundingClientRect();
        this.mousePos.x = ev.clientX - rect.left;
        this.mousePos.y = ev.clientY - rect.top;
      }

      update() {
        const dx = this.mousePos.x - this.prevPos.x;
        const dy = this.mousePos.y - this.prevPos.y;

        const dist = MathUtils.distance(
          this.mousePos.x,
          this.mousePos.y,
          this.prevPos.x,
          this.prevPos.y
        );

        this.cachedPos.x = MathUtils.lerp(this.cachedPos.x, this.mousePos.x, 0.14);
        this.cachedPos.y = MathUtils.lerp(this.cachedPos.y, this.mousePos.y, 0.14);

        if (isTrailActive && dist > this.threshold) {
          this.showNext(dx, dy);
          this.prevPos = { ...this.mousePos };
        }

        if (!this.images.some(img => img.isActive())) {
          this.zIndex = 1;
        }

        requestAnimationFrame(() => this.update());
      }

      showNext(dx, dy) {
        const img = this.images[this.index];
        img.updateRect();

        const rot = gsap.utils.clamp(-14, 14, -(dx + dy) * 0.3);

        const offsetX = img.rect.width / 2;
        const offsetY = img.rect.height / 2;

        gsap.killTweensOf(img.DOM.el);

        gsap.timeline()
          .set(img.DOM.el, {
            opacity: 1,
            scale: 1,
            zIndex: this.zIndex++,
            x: this.cachedPos.x - offsetX,
            y: this.cachedPos.y - offsetY,
            rotation: rot
          })
          .to(img.DOM.el, {
            duration: 1,
            x: this.mousePos.x - offsetX,
            y: this.mousePos.y - offsetY,
            rotation: rot,
            ease: "expo.out"
          }, 0)
          .to(img.DOM.el, {
            duration: 0.8,
            scale: 0,
            ease: "power1.out",
            onComplete: () => {
              gsap.set(img.DOM.el, {
                scale: 1,
                opacity: 0
              });
            }
          }, 0.55);

        this.index = (this.index + 1) % this.images.length;
      }
    }

    sections.forEach(section => new ImageTrail(section));

  });
}
// --------------------------------------------- //
// Animation - Cursor Trail Transparent Effect End
// --------------------------------------------- //

// --------------------------------------------- //
// Animation - Text Scramble Effect Start
// --------------------------------------------- //
function mxdTextScramble(selector = ".mxd-scramble") {
  // default options (change here if needed)
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // pool of random characters
  const speed = 40;   // interval delay in ms
  const step = 1 / 4; // how fast letters lock in

  document.querySelectorAll(selector).forEach(el => {
    if (!el.dataset.original) {
      el.dataset.original = el.textContent.trim();
    }

    let intervalId = null;

    el.addEventListener("mouseenter", () => {
      if (intervalId) return;

      let iterations = 0;

      intervalId = setInterval(() => {
        el.innerText = el.innerText
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return el.dataset.original[index];
            }
            return alphabet[Math.floor(Math.random() * alphabet.length)];
          })
          .join("");

        if (iterations >= el.dataset.original.length) {
          clearInterval(intervalId);
          intervalId = null;
        }

        iterations += step;
      }, speed);
    });
  });
}
// --------------------------------------------- //
// Animation - Text Scramble Effect Start
// --------------------------------------------- //

// --------------------------------------------- //
// Animation - Preview Hover Slideshow Start
// --------------------------------------------- //
function mxdHoverSlideshow() {
  const items = document.querySelectorAll('.mxd-img-anim');

  items.forEach(item => {
    const mainImage = item.querySelector('.mxd-img-anim__main');
    const images = item.querySelectorAll('.mxd-img-anim__absolute');
    let current = 0;
    let interval = null;

    mainImage.style.opacity = "1";
    images.forEach(img => img.style.opacity = 0);

    item.addEventListener('mouseenter', () => {
      mainImage.style.opacity = 0;

      current = 0;
      images[current].style.opacity = 1;

      interval = setInterval(() => {
        images[current].style.opacity = 0;
        current = (current + 1) % images.length;
        images[current].style.opacity = 1;
      }, 350);
    });

    item.addEventListener('mouseleave', () => {
      clearInterval(interval);
      images.forEach(img => img.style.opacity = 0);
      mainImage.style.opacity = 1;
    });
  });
}
// --------------------------------------------- //
// Animation - Preview Hover Slideshow End
// --------------------------------------------- //

// --------------------------------------------- //
// Animation - Scroll Animation for Stats Start
// --------------------------------------------- //
function mxdStats() {
  const animateStats = document.querySelectorAll(".mxd-stats-lines__item")
  if (!animateStats.length) return;

  animateStats.forEach((item) => {
    const statsInner = item.querySelector(".mxd-stats-lines__inner");
    const statsTrigger = item.querySelector(".mxd-stats-lines__divider");
    gsap.fromTo(statsInner, {
      yPercent: -100,
      ease: "none",
    }, {
      yPercent: 0,
      scrollTrigger: {
        trigger: statsTrigger,
        start: "top bottom",
        end: "bottom 60%",
        scrub: true,
        toggleActions: 'play none none reverse',
      }
    });
  });
}
// --------------------------------------------- //
// Animation - Scroll Animation for Stats End
// --------------------------------------------- //

// --------------------------------------------- //
// Showcase - Projects Stacking Cards Demo Start
// --------------------------------------------- //
function mxdProjectsStack() {
  const containers = document.querySelectorAll(".mxd-stack-cards");
  if (!containers.length) return;

  containers.forEach((stackContainer) => {
    const cards = gsap.utils.toArray(stackContainer.querySelectorAll(".mxd-stack-cards__card"));
    if (!cards.length) return;

    const introCard = cards[0];

    // titles splitType
    const titles = gsap.utils.toArray(".card__title p");
    titles.forEach((title) => {
      const split = new SplitText(title, {
        type: "words, lines",
        mask: "lines",
        linesClass: "line++",
      });
    });

    // first card image setup
    const cardImgWrapper = introCard.querySelector(".card__image");
    const cardImg = introCard.querySelector(".card__image .card__media");
    const cardCover = introCard.querySelector(".card__cover");

    function getBaseSize() {
      const w = window.innerWidth;
      if (w >= 1600) return 46 * 10; // 460px
      if (w >= 1024) return 40 * 10; // 400px
      return Math.min(w - 60, 390); // 100% - 6rem (60px), max 390px
    }

    let baseSize = getBaseSize();
    // const baseSize = 400; // square start size - if it's not changing with the screen size
    let lastProgress = 0; // store scroll progress

    function updateClip(progress) {
      const cutY = ((window.innerHeight - baseSize) / 2) * (1 - progress);
      const cutX = ((window.innerWidth - baseSize) / 2) * (1 - progress);

      gsap.set(cardImgWrapper, {
        clipPath: `inset(${cutY}px ${cutX}px ${cutY}px ${cutX}px)`
      });
    }

    updateClip(0);
    gsap.set(cardImg, { scale: 0.9 });
    gsap.set(cardCover, { opacity: 0 });

    const marquee = introCard.querySelector(".card__marquees");
    const titleLines = introCard.querySelectorAll(".line-mask .line");
    const description = introCard.querySelector(".card__descr");
    const techStack = introCard.querySelector(".card__techstack-wrapper");

    // animate in the texts
    function animateContentIn(titleLines, description) {
      gsap.to(titleLines, { y: "0%", duration: 0.75, ease: "common", stagger: { amount: 0.15 } });
      gsap.to(description, {
        y: 0,
        opacity: 1,
        duration: 0.75,
        delay: 0.1,
        ease: "common",
      });
    }
    // animate out the texts
    function animateContentOut(titleLines, description) {
      gsap.to(titleLines, { y: "100%", duration: 0.5, ease: "common", });
      gsap.to(description, {
        y: "40px",
        opacity: 0,
        duration: 0.1,
        ease: "common",
      });
    }

    ScrollTrigger.create({
      trigger: introCard,
      start: "top top",
      end: "+=300vh",
      onUpdate: (self) => {
        const progress = self.progress;
        lastProgress = self.progress;

        updateClip(lastProgress);
        const innerImgScale = 0.9 + progress * 0.1;
        const innerCoverOpacity = 0 + progress * 1;
        gsap.set(cardImg, { scale: innerImgScale });
        gsap.set(cardCover, { opacity: innerCoverOpacity });

        if (innerCoverOpacity >= 0.4 && innerCoverOpacity <= 0.75) {
          const fadeProgress = (innerCoverOpacity - 0.4) / (0.75 - 0.4);
          gsap.set(marquee, { opacity: 1 - fadeProgress });
        } else if (innerCoverOpacity < 0.4) {
          gsap.set(marquee, { opacity: 1 });
        } else if (innerCoverOpacity > 0.75) {
          gsap.set(marquee, { opacity: 0 });
        }

        if (lastProgress >= 0.7 && !introCard.contentRevealed) {
          introCard.contentRevealed = true;
          introCard.classList.add("is-revealed");
          animateContentIn(titleLines, description);
          if (techStack) {
            techStack.classList.add("is-revealed");
          }
        }
        if (lastProgress < 0.7 && introCard.contentRevealed) {
          introCard.contentRevealed = false;
          introCard.classList.remove("is-revealed");
          animateContentOut(titleLines, description);
          if (techStack) {
            techStack.classList.remove("is-revealed");
          }
        }
      },
      // markers: true,
    });

    // 🔑 keep square centered on resize
    window.addEventListener("resize", () => {
      baseSize = getBaseSize();
      updateClip(lastProgress);
      ScrollTrigger.refresh();
    });

    cards.forEach((card, index) => {
      const isLastCard = index === cards.length - 1;
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        end: isLastCard ? "+=100vh" : "top top",
        endTrigger: isLastCard ? null : cards[cards.length - 1],
        pin: true,
        pinSpacing: isLastCard,
      });
    });

    cards.forEach((card, index) => {
      if (index < cards.length - 1) {
        const cardWrapper = card.querySelector(".card__wrapper");
        ScrollTrigger.create({
          trigger: cards[index + 1],
          start: "top bottom",
          end: "top top",
          delay: 0.3,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(cardWrapper, {
              scale: 1 - progress * 0.15,
              opacity: 1 - progress,
            });
          }
        });
      }
    });

    cards.forEach((card, index) => {
      if (index > 0) {
        const cardImg = card.querySelector(".card__image img");
        const imgContainer = card.querySelector(".card__image");
        ScrollTrigger.create({
          trigger: card,
          start: "top bottom",
          end: "top top",
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(cardImg, { scale: 2 - progress });
          }
        });
      }
    });

    cards.forEach((card, index) => {
      if (index === 0) return;

      const cardDescription = card.querySelector(".card__descr");
      const cardTitleLines = card.querySelectorAll(".line-mask .line");
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        onEnter: () => animateContentIn(cardTitleLines, cardDescription),
        onLeaveBack: () => animateContentOut(cardTitleLines, cardDescription),
      });
    });
  });
}
// --------------------------------------------- //
// Showcase - Projects Stacking Cards Demo End
// --------------------------------------------- //

// --------------------------------------------- //
// Showcase - Services Stacking Cards Start
// --------------------------------------------- //
function mxdServicesStack() {
  const containers = document.querySelectorAll(".mxd-stack-services");
  if (!containers.length) return;

  containers.forEach((stackContainer) => {
    const cards = gsap.utils.toArray(
      stackContainer.querySelectorAll(".mxd-stack-services__card")
    );
    if (!cards.length) return;

    // Split titles
    cards.forEach((card) => {
      const title = card.querySelector(".services-card__title p");
      if (!title) return;

      new SplitText(title, {
        type: "words, lines",
        mask: "lines",
        linesClass: "line++",
        aria: "none"
      });
    });

    // Split description
    cards.forEach((card) => {
      const linesDescr = card.querySelector(".services-card__descr");
      if (!linesDescr) return;

      new SplitText(linesDescr, {
        type: "words, lines",
        mask: "lines",
        linesClass: "line++",
        aria: "none"
      });
    });

    // Helpers
    function animateContentIn(lines) {
      gsap.to(lines, {
        y: "0%",
        duration: 0.75,
        ease: "common",
        stagger: 0.08,
      });
    }

    function animateContentInSecond(linesDescr, description) {
      gsap.to(linesDescr, {
        y: "0%",
        duration: 0.75,
        ease: "common",
        stagger: 0.08,
      });
      gsap.to(description, {
        opacity: 1,
        duration: 0.75,
        ease: "common",
      });
    }

    function animateContentOut(lines) {
      gsap.to(lines, {
        y: "100%",
        duration: 0.5,
        ease: "common",
      });
    }

    function animateContentOutSecond(linesDescr, description) {
      gsap.to(linesDescr, {
        y: "100%",
        duration: 0.5,
        ease: "common",
      });
      gsap.to(description, {
        opacity: 0,
        duration: 0.3,
        ease: "common",
      });
    }

    // Pin each card
    cards.forEach((card, index) => {
      const isLast = index === cards.length - 1;

      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        end: isLast ? "+=100vh" : "top top",
        endTrigger: isLast ? null : cards[cards.length - 1],
        pin: true,
        pinSpacing: isLast,
      });
    });

    // Stack scale + fade
    cards.forEach((card, index) => {
      if (index >= cards.length - 1) return;

      const wrapper = card.querySelector(".services-card__wrapper");

      ScrollTrigger.create({
        trigger: cards[index + 1],
        start: "top bottom",
        end: "top top",
        scrub: true,
        onUpdate: (self) => {
          gsap.set(wrapper, {
            scale: 1 - self.progress * 0.15,
            opacity: 1 - self.progress,
          });
        },
      });
    });

    // Image zoom on enter
    cards.forEach((card) => {
      const img = card.querySelector(".services-card__image img");
      if (!img) return;

      gsap.set(img, { scale: 1.4 });

      ScrollTrigger.create({
        trigger: card,
        start: "top bottom",
        end: "top top",
        scrub: true,
        onUpdate: (self) => {
          gsap.set(img, {
            scale: 1.4 - self.progress * 0.4,
          });
        },
      });
    });

    // Text in / out per card
    cards.forEach((card) => {
      const description = card.querySelector(".services-card__tags");
      const lines = card.querySelectorAll(".services-card__title .line-mask .line");
      const linesDescr = card.querySelectorAll(".services-card__descr .line-mask .line");

      if (!description || !lines.length) return;

      ScrollTrigger.create({
        trigger: card,
        start: "top 40%",
        onEnter: () => animateContentIn(lines),
        onLeaveBack: () => animateContentOut(lines),
      });
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        onEnter: () => animateContentInSecond(linesDescr, description),
        onLeaveBack: () => animateContentOutSecond(linesDescr, description),
      });
    });
  });
};
// --------------------------------------------- //
// Showcase - Services Stacking Cards End
// --------------------------------------------- //

// --------------------------------------------- //
// Showcase - Landing Stacking Cards Start
// --------------------------------------------- //
function mxdLandingStack() {
  const containers = document.querySelectorAll(".mxd-demo-stack");
  if (!containers.length) return;

  containers.forEach((stackContainer) => {
    const cards = gsap.utils.toArray(
      stackContainer.querySelectorAll(".mxd-demo-stack__card")
    );
    if (!cards.length) return;

    // Split titles
    cards.forEach((card) => {
      const title = card.querySelector(".demo-card__title p");
      if (!title) return;

      new SplitText(title, {
        type: "words, lines",
        mask: "lines",
        linesClass: "line++",
        aria: "none"
      });
    });

    // Split description
    cards.forEach((card) => {
      const linesDescr = card.querySelector(".demo-card__descr");
      if (!linesDescr) return;

      new SplitText(linesDescr, {
        type: "words, lines",
        mask: "lines",
        linesClass: "line++",
        aria: "none"
      });
    });

    // Helpers
    function animateContentIn(lines) {
      gsap.to(lines, {
        y: "0%",
        duration: 0.75,
        ease: "common",
        stagger: 0.08,
      });
    }

    function animateContentInSecond(linesDescr, description) {
      gsap.to(linesDescr, {
        y: "0%",
        duration: 0.75,
        ease: "common",
        stagger: 0.08,
      });
      gsap.to(description, {
        opacity: 1,
        duration: 0.75,
        ease: "common",
      });
    }

    function animateContentOut(lines) {
      gsap.to(lines, {
        y: "100%",
        duration: 0.5,
        ease: "common",
      });
    }

    function animateContentOutSecond(linesDescr, description) {
      gsap.to(linesDescr, {
        y: "100%",
        duration: 0.5,
        ease: "common",
      });
      gsap.to(description, {
        opacity: 0,
        duration: 0.3,
        ease: "common",
      });
    }

    // Pin each card
    cards.forEach((card, index) => {
      const isLast = index === cards.length - 1;

      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        end: isLast ? "+=100vh" : "top top",
        endTrigger: isLast ? null : cards[cards.length - 1],
        pin: true,
        pinSpacing: isLast,
      });
    });

    // Stack scale + fade
    cards.forEach((card, index) => {
      if (index >= cards.length - 1) return;

      const wrapper = card.querySelector(".demo-card__wrapper");

      ScrollTrigger.create({
        trigger: cards[index + 1],
        start: "top bottom",
        end: "top top",
        scrub: true,
        onUpdate: (self) => {
          gsap.set(wrapper, {
            scale: 1 - self.progress * 0.15,
            opacity: 1 - self.progress,
          });
        },
      });
    });

    // Image zoom on enter
    cards.forEach((card) => {
      const img = card.querySelector(".demo-card__image img");
      if (!img) return;

      gsap.set(img, { scale: 1.4 });

      ScrollTrigger.create({
        trigger: card,
        start: "top bottom",
        end: "top top",
        scrub: true,
        onUpdate: (self) => {
          gsap.set(img, {
            scale: 1.4 - self.progress * 0.4,
          });
        },
      });
    });

    // Text in / out per card
    cards.forEach((card) => {
      const description = card.querySelector(".demo-card__tags");
      const lines = card.querySelectorAll(".demo-card__title .line-mask .line");
      const linesDescr = card.querySelectorAll(".demo-card__descr .line-mask .line");

      if (!description || !lines.length) return;

      ScrollTrigger.create({
        trigger: card,
        start: "top 40%",
        onEnter: () => animateContentIn(lines),
        onLeaveBack: () => animateContentOut(lines),
      });
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        onEnter: () => animateContentInSecond(linesDescr, description),
        onLeaveBack: () => animateContentOutSecond(linesDescr, description),
      });
    });
  });
};
// --------------------------------------------- //
// Showcase - Landing Stacking Cards End
// --------------------------------------------- //

// --------------------------------------------- //
// Showcase - Projects ClipPath Demo Start
// --------------------------------------------- //
function mxdProjectsClip() {
  document.querySelectorAll(".mxd-showcase-clip").forEach((clip) => {
    const triggers = clip.querySelectorAll(".mxd-showcase-clip__trigger");
    const items = clip.querySelectorAll(".mxd-showcase-clip__item");

    triggers.forEach((trigger, index) => {
      const background = trigger.querySelector(".mxd-showcase-clip__bg");
      const item = items[index];

      if (index === 0) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: trigger,
            start: "top top",
            end: "bottom top",
            scrub: true,
            // markers: true,
          },
          defaults: { ease: "none" },
        });

        tl.fromTo(
          item,
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }
        );
      } else if (index === items.length - 1) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: trigger,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
            // markers: true,
          },
          defaults: { ease: "none" },
        });

        tl.fromTo(
          item,
          { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }
        );
      } else {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: trigger,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            // markers: true,
          },
          defaults: { ease: "none" },
        });

        tl.fromTo(
          item,
          { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }
        );

        tl.to(item, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
        });
      }

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
        defaults: { ease: "none" },
      });

      tl2.to(background, { yPercent: 50 });
    });
  });
};
// --------------------------------------------- //
// Showcase - Projects ClipPath Demo End
// --------------------------------------------- //

// --------------------------------------------- //
// Marquee - Two Lines Start
// --------------------------------------------- //
const initMarquees = () => {
  const items = [...document.querySelectorAll(".marquee--gsap")];
  if (items) {
    const marqueeObject = {
      top: {
        el: null,
        width: 0
      },
      bottom: {
        el: null,
        width: 0
      }
    };
    items.forEach((itemBlock) => {
      marqueeObject.top.el = itemBlock.querySelectorAll(".marquee__top");
      marqueeObject.bottom.el = itemBlock.querySelectorAll(".marquee__bottom");
      marqueeObject.top.width = marqueeObject.top.el.offsetWidth;
      marqueeObject.bottom.width = marqueeObject.bottom.el.offsetWidth;
      marqueeObject.top.el.innerHTML += marqueeObject.top.el.innerHTML;
      marqueeObject.bottom.el.innerHTML += marqueeObject.bottom.el.innerHTML;
      let dirFromLeft = "-=50%";
      let dirFromRight = "+=50%";
      let master = gsap
        .timeline()
        .add(marquee(marqueeObject.top.el, 70, dirFromLeft), 0)
        .add(marquee(marqueeObject.bottom.el, 70, dirFromRight), 0);
      let tween = gsap.to(master, { 
        duration: 1.5, 
        timeScale: 1, 
        paused: true 
      });
      let timeScaleClamp = gsap.utils.clamp(1, 6);
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          master.timeScale(timeScaleClamp(Math.abs(self.getVelocity() / 200)));
          tween.invalidate().restart();
        }
      });
    });
  }
};
const marquee = (item, time, direction) => {
  let mod = gsap.utils.wrap(0, 50);
  return gsap.to(item, {
    duration: time,
    ease: "none",
    x: direction,
    modifiers: {
      x: (x) => (direction = mod(parseFloat(x)) + "%")
    },
    repeat: -1
  });
};
initMarquees();
// --------------------------------------------- //
// Marquee - Two Lines End
// --------------------------------------------- //

// --------------------------------------------- //
// Marquee - One Line To Right Start
// --------------------------------------------- //
const initMarquee = () => {
  const items = [...document.querySelectorAll(".marquee-right--gsap")];
  if (items) {
    const marqueeObject = {
      el: null,
      width: 0
    };
    items.forEach((itemBlock) => {
      marqueeObject.el = itemBlock.querySelector(".marquee__toright");
      marqueeObject.width = marqueeObject.el.offsetWidth;
      marqueeObject.el.innerHTML += marqueeObject.el.innerHTML;
      //let dirFromLeft = "-=50%";
      let dirFromRight = "+=50%";
      let master = gsap
        .timeline()
        //.add(marquee(marqueeObject.el, 20, dirFromLeft), 0);
        .add(marqueeRight(marqueeObject.el, 70, dirFromRight), 0);
      let tween = gsap.to(master, { 
        duration: 1.5, 
        timeScale: 1, 
        paused: true 
      });
      let timeScaleClamp = gsap.utils.clamp(1, 6);
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          master.timeScale(timeScaleClamp(Math.abs(self.getVelocity() / 200)));
          tween.invalidate().restart();
        }
      });
    });
  }
};
const marqueeRight = (item, time, direction) => {
  let mod = gsap.utils.wrap(0, 50);
  return gsap.to(item, {
    duration: time,
    ease: "none",
    x: direction,
    modifiers: {
      x: (x) => (direction = mod(parseFloat(x)) + "%")
    },
    repeat: -1
  });
};
initMarquee();
// --------------------------------------------- //
// Marquee - One Line To Right End
// --------------------------------------------- //

// --------------------------------------------- //
// Marquee - One Line To Left Start
// --------------------------------------------- //
const initMarqueeLeft = () => {
  const items = [...document.querySelectorAll(".marquee-left--gsap")];
  if (items) {
    const marqueeObject = {
      el: null,
      width: 0
    };
    items.forEach((itemBlock) => {
      marqueeObject.el = itemBlock.querySelector(".marquee__toleft");
      marqueeObject.width = marqueeObject.el.offsetWidth;
      marqueeObject.el.innerHTML += marqueeObject.el.innerHTML;
      let dirFromLeft = "-=50%";
      // let dirFromRight = "+=50%";
      let master = gsap
        .timeline()
        .add(marquee(marqueeObject.el, 70, dirFromLeft), 0);
        // .add(marqueeRight(marqueeObject.el, 30, dirFromRight), 0);
      let tween = gsap.to(master, { 
        duration: 1.5, 
        timeScale: 1, 
        paused: true 
      });
      let timeScaleClamp = gsap.utils.clamp(1, 6);
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          master.timeScale(timeScaleClamp(Math.abs(self.getVelocity() / 200)));
          tween.invalidate().restart();
        }
      });
    });
  }
};
const marqueeLeft = (item, time, direction) => {
  let mod = gsap.utils.wrap(0, 50);
  return gsap.to(item, {
    duration: time,
    ease: "none",
    x: direction,
    modifiers: {
      x: (x) => (direction = mod(parseFloat(x)) + "%")
    },
    repeat: -1
  });
};
initMarqueeLeft();
// --------------------------------------------- //
// Marquee - One Line To Left End
// --------------------------------------------- //

// --------------------------------------------- //
// Divider - Scroll-Driven Clip-Path Reveal Start
// --------------------------------------------- //
function mxdDvStickyMedia() {
  const sections = document.querySelectorAll(".mxd-dv-sticky-img");
  if (!sections.length) return;

  const FULL = "inset(0% round 0%)";
  const CLIPPED = "inset(50% round 0%)";
  const formatIndex = i => String(i).padStart(2, "0");

  // Wait for all images inside a block to decode
  function waitForImages(overflows) {
    const imgs = Array.from(overflows)
      .flatMap(ovf => Array.from(ovf.querySelectorAll("img")));
    if (!imgs.length) return Promise.resolve();
    return Promise.all(
      imgs.map(img => {
        if (img.complete && (img.naturalWidth || img.naturalHeight))
          return Promise.resolve();
        if (img.decode) return img.decode().catch(() => {});
        return new Promise(res => (img.onload = img.onerror = res));
      })
    );
  }

  const debounce = (fn, wait = 120) => {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  };

  sections.forEach(section => {
    const sticky = section.querySelector(".mxd-dv-sticky-img__sticky");
    if (!sticky) return;

    const overflows = sticky.querySelectorAll(".images__overflow");
    const titles = sticky.querySelectorAll(".mxd-dv-sticky-img__titleitem h2");
    const numberBlock = sticky.querySelector(".mxd-dv-sticky-img__number");
    const counterCurrent = sticky.querySelector(".number__current");
    const counterTotal = sticky.querySelector(".number__total");
    const btnHolder = sticky.querySelector(".mxd-dv-sticky-img__btnholder");
    const progressEl = sticky.querySelector(".mxd-dv-sticky-img__progress");

    if (!overflows.length || !titles.length) return;
    if (!numberBlock || !counterCurrent || !counterTotal) return;

    const imagesCount = overflows.length;
    const steps = Math.max(0, imagesCount - 1);
    counterTotal.textContent = formatIndex(imagesCount);

    // Set initial before-scroll state
    function setInitialState() {
      const isFirstBlank = titles[0] && !titles[0].textContent.trim();
      overflows.forEach((ovf, i) => {
        gsap.set(ovf, {
          clipPath: i === 0 ? FULL : CLIPPED,
          autoAlpha: 1,
          willChange: "clip-path, opacity, transform",
          pointerEvents: (i === 0 && isFirstBlank) ? "auto" : "none"
        });
      });

      titles.forEach((t, i) => gsap.set(t, { autoAlpha: (!isFirstBlank && i === 0) ? 1 : 0, yPercent: 100 }));
      gsap.set(numberBlock, { autoAlpha: 0, y: 8 });
      if (btnHolder) gsap.set(btnHolder, { autoAlpha: 0, y: 8 });
      if (progressEl) gsap.set(progressEl, { transformOrigin: "left center", scaleX: 0 });
    }

    // How much scroll distance this section needs
    const computeTotalScroll = () =>
      steps * (window.innerHeight || document.documentElement.clientHeight);

    // Set correct height for each section independently
    const applySectionHeight = totalScroll => {
      const stickyH = sticky.getBoundingClientRect().height || window.innerHeight;
      section.style.minHeight = (stickyH + totalScroll) + "px";
    };

    waitForImages(overflows).then(() => {
      setInitialState();

      if (imagesCount < 2) {
        const tlShort = gsap.timeline();
        tlShort.to(numberBlock, { duration: 0.36, autoAlpha: 1, y: 0 });
        tlShort.to(titles[0], { duration: 0.36, yPercent: 0, autoAlpha: 1 }, "-=0.26");
        if (btnHolder) tlShort.to(btnHolder, { duration: 0.36, autoAlpha: 1, y: 0 }, "-=0.26");
        return;
      }

      const initialScroll = computeTotalScroll();
      applySectionHeight(initialScroll);

      const isFirstBlank = titles[0] && !titles[0].textContent.trim();
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        paused: true
      });

      if (!isFirstBlank) {
        tl.to(numberBlock, { duration: 0.32, autoAlpha: 1, y: 0 }, 0);
        tl.to(titles[0], { duration: 0.32, yPercent: 0, autoAlpha: 1 }, 0.05);
        if (btnHolder) tl.to(btnHolder, { duration: 0.32, autoAlpha: 1, y: 0 }, 0.05);
      }

      for (let i = 1; i < imagesCount; i++) {
        tl.to(overflows[i], { duration: 0.6, clipPath: FULL }, "+=0.12");
        if (isFirstBlank && i === 1) {
          tl.to(numberBlock, { duration: 0.28, autoAlpha: 1, y: 0 }, "-=0.48");
          if (btnHolder) tl.to(btnHolder, { duration: 0.28, autoAlpha: 1, y: 0 }, "<");
        }
        tl.to(titles[i - 1], { duration: 0.28, yPercent: -100, autoAlpha: 0 }, "-=0.48");
        tl.to(titles[i], { duration: 0.28, yPercent: 0, autoAlpha: 1 }, "<");
      }

      const st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=" + initialScroll,
        scrub: 0.6,
        pin: sticky,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        animation: tl,
        onUpdate(self) {
          if (progressEl)
            gsap.to(progressEl, {
              scaleX: self.progress,
              duration: 0.12,
              ease: "custom"
            });

          const idx = Math.round(self.progress * steps);
          counterCurrent.textContent = formatIndex(
            Math.min(imagesCount, idx + 1)
          );
        }
      });

      const onRefreshHandler = () => {
        const newScroll = computeTotalScroll();
        applySectionHeight(newScroll);
        st.end = "+=" + newScroll;

        tl.pause();
        tl.progress(st.progress, false);
      };

      ScrollTrigger.addEventListener("refresh", onRefreshHandler);

      window.addEventListener("resize", debounce(() => {
        ScrollTrigger.refresh();
      }, 150));

      ScrollTrigger.refresh();
    }).catch(() => setInitialState());
  });
}
// --------------------------------------------- //
// Divider - Scroll-Driven Clip-Path Reveal End
// --------------------------------------------- //

// --------------------------------------------- //
// Divider - Sticky Caption Start
// --------------------------------------------- //
function mxdDvStickyCaption() {
  document.querySelectorAll(".mxd-dv-sticky-cap").forEach((caption) => {

    const content = caption.querySelector(".mxd-dv-sticky-cap__content");
    const topArea = caption.querySelector(".mxd-dv-sticky-cap__top");
    const centerArea = caption.querySelector(".mxd-dv-sticky-cap__center");
    const bottomArea = caption.querySelector(".mxd-dv-sticky-cap__bottom");
    const scrollArea = caption.querySelector(".mxd-dv-sticky-cap__scroll");
    if (!content || !topArea || !centerArea || !bottomArea || !scrollArea) return;
    // 1. Flip from top → center when section hits top of viewport
    ScrollTrigger.create({
      trigger: caption,
      start: "top top",
      onEnter: () => flipTo(centerArea),
      onEnterBack: () => flipTo(centerArea),
      onLeaveBack: () => flipTo(topArea),
    });
    // 2. Flip from center → bottom when scroll area bottom touches bottom
    ScrollTrigger.create({
      trigger: scrollArea,
      start: "bottom bottom",
      onEnter: () => flipTo(bottomArea),
      onLeaveBack: () => flipTo(centerArea),
    });

    function flipTo(targetContainer) {
      // Avoid unnecessary re-append if already inside the target
      if (content.parentNode === targetContainer) return;
      const state = Flip.getState(content);
      targetContainer.appendChild(content);
      Flip.from(state, {
        duration: 0.6,
        ease: "none",
        absolute: true,
      });
    }

  });
}
// --------------------------------------------- //
// Divider - Sticky Caption End
// --------------------------------------------- //

// --------------------------------------------- //
// Animation - Common Animations Start
// --------------------------------------------- //
// Sliding object common animation
const mxdSlideObject = document.querySelectorAll(".mxd-slide-object");
mxdSlideObject.forEach((element) => {
  gsap.fromTo(element, {
    xPercent: 0,
    ease: 'custom',
  }, {
    xPercent: 120,
    scrollTrigger: {
      trigger: element,
      start: "top 70%",
      end: "bottom top",
      scrub: true,
      toggleActions: 'play none none reverse',
      // markers: true,
    }
  });
});
// Sliding object common animation
const mxdSlideDownObj = document.querySelectorAll(".mxd-slide-down-object");
mxdSlideDownObj.forEach((element) => {
  gsap.fromTo(element, {
    yPercent: 0,
    ease: 'custom',
  }, {
    yPercent: 160,
    scrollTrigger: {
      trigger: element,
      start: "top 40%",
      end: "bottom top",
      scrub: true,
      toggleActions: 'play none none reverse',
      markers: true,
    }
  });
});
// Sliding object common animation
const mxdSlideRightToLeft = document.querySelectorAll(".slide-right-to-left");
mxdSlideRightToLeft.forEach((element) => {
  gsap.fromTo(element, {
    xPercent: 10,
    autoAlpha: 0,
    ease: 'custom',
  }, {
    xPercent: 0,
    autoAlpha: 1,
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom 20%",
      scrub: true,
      toggleActions: 'play none none reverse',
      // markers: true,
    }
  });
});
// Sliding object common animation
const mxdSlideLeftToRight = document.querySelectorAll(".slide-left-to-right");
mxdSlideLeftToRight.forEach((element) => {
  gsap.fromTo(element, {
    xPercent: -10,
    autoAlpha: 0,
    ease: 'custom',
  }, {
    xPercent: 0,
    autoAlpha: 1,
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom 20%",
      scrub: true,
      toggleActions: 'play none none reverse',
      // markers: true,
    }
  });
});
// ClipPath Image Common Animations
const imageContainer = document.querySelectorAll(".mxd-clip-image");
imageContainer.forEach((element) => {
  const image = element.querySelector("img");
  gsap.set(element, { clipPath: "inset(0% 100% 1% 0%)" });
  gsap.set(image, { scale: 1.2 });
  let imageClipPath = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "top 50%",
      scrub: {
        scrub: true, 
        ease: "none" 
      },
      // markers: true
    },
  });
  imageClipPath.to(element, {
    clipPath: "inset(0% 0% 0% 0%)"
  }, "<");
  imageClipPath.to(image, {
    scale: 1,
  }, "<");
});
// Animation Slide Down for Line Elements
const animSlideDownWraps = document.querySelectorAll(".anim-uni-slide-down");
animSlideDownWraps.forEach((animSlideDownWrap) => {
  const animSlideDownEL = animSlideDownWrap.firstElementChild;
  gsap.fromTo(animSlideDownEL, {
    yPercent: -100,
    ease: "none",
  }, {
    yPercent: 0,
    scrollTrigger: {
      trigger: animSlideDownWrap,
      start: "top 90%",
      end: "bottom 70%",
      // markers: true,
      // scrub: 1,
      toggleActions: 'play none none reverse',
    }
  });
});
// Animation Slide Up for Line Elements (sync to .mxd-split-lines)
const animSlideUpWraps = document.querySelectorAll(".anim-uni-slide-up");
if (!animSlideUpWraps) {
  animSlideUpWraps.forEach((animSlideUpWrap) => {
    const animSlideUpEL = animSlideUpWrap.firstElementChild;
    gsap.fromTo(animSlideUpEL, {
      yPercent: 100,
      ease: "none",
    }, {
      yPercent: 0,
      scrollTrigger: {
        trigger: animSlideUpWrap,
        start: "top 90%",
        end: "top 70%",
        // markers: true,
        scrub: 1,
        toggleActions: 'play none none reverse',
      }
    });
  });
}
//Scroll Animation In Up
const animateInUp = document.querySelectorAll(".anim-uni-in-up");
animateInUp.forEach((element) => {
  gsap.fromTo(element, {
    opacity: 0,
    y: 50,
    ease: 'sine',
  }, {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: element,
      toggleActions: 'play none none reverse',
    }
  });
});
// Scroll Animation Fade In
const animateFadeIn = document.querySelectorAll(".anim-uni-fade-in");
animateFadeIn.forEach((element) => {
  gsap.fromTo(element, {
    opacity: 0,
    duration: 2,
    ease: "none",
  }, {
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: element,
      toggleActions: 'play none none reverse',
    }
  });
});
// Scroll Animation Clip In (for dividers elements)
const animateClipIn = document.querySelectorAll(".anim-uni-clip-in");
animateClipIn.forEach((element) => {
  gsap.fromTo(element, {
    clipPath: "inset(0% 100% 0% 0%)",
    ease: "custom",
  }, {
    clipPath: "inset(0% 0% 0% 0%)",
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      end: "bottom 70%",
      // markers: true,
      // scrub: 1,
      toggleActions: 'play none none reverse',
    }
  });
});
// Grid Animation 2 cards
if(document.querySelector(".animate-card-2")) {
  gsap.set(".animate-card-2", {y: 50, opacity: 0});
  ScrollTrigger.batch(".animate-card-2", {
    interval: 0.1,
    batchMax: 2,
    duration: 3,
    onEnter: batch => gsap.to(batch, {
      opacity: 1, 
      y: 0,
      ease: 'sine',
      stagger: {each: 0.15, grid: [1, 2]}, 
      overwrite: true
    }),
    onLeave: batch => gsap.set(batch, {opacity: 1, y: 0, overwrite: true}),
    onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
    onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 50, overwrite: true})
  });
  ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".animate-card-2", {y: 0, opacity: 1}));
};
// Grid Animation 3 cards
if(document.querySelector(".animate-card-3")) {
  gsap.set(".animate-card-3", {y: 50, opacity: 0});
  ScrollTrigger.batch(".animate-card-3", {
    interval: 0.1,
    batchMax: 3,
    duration: 3,
    onEnter: batch => gsap.to(batch, {
      opacity: 1, 
      y: 0,
      ease: 'sine',
      stagger: {each: 0.15, grid: [1, 3]}, 
      overwrite: true
    }),
    onLeave: batch => gsap.set(batch, {opacity: 1, y: 0, overwrite: true}),
    onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
    onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 50, overwrite: true})
  });
  ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".animate-card-3", {y: 0, opacity: 1}));
};
// Grid Animation 4 cards
if(document.querySelector(".animate-card-4")) {
  gsap.set(".animate-card-4", {y: 50, opacity: 0});
  ScrollTrigger.batch(".animate-card-4", {
    interval: 0.1,
    batchMax: 4,
    delay: 1000,
    onEnter: batch => gsap.to(batch, {
      opacity: 1, 
      y: 0,
      ease: 'sine',
      stagger: {each: 0.15, grid: [1, 4]}, 
      overwrite: true
    }),
    onLeave: batch => gsap.set(batch, {opacity: 1, y: 0, overwrite: true}),
    onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
    onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 50, overwrite: true})
  });
  ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".animate-card-4", {y: 0, opacity: 1}));
};
// --------------------------------------------- //
// Animation - Common Animations End
// --------------------------------------------- //

// --------------------------------------------- //
// Parallax - Ukiyo Images & Video Start
// --------------------------------------------- //
const images = document.querySelectorAll(".parallax-img");
const imagesSmall = document.querySelectorAll(".parallax-img-small");
const video = document.querySelectorAll(".parallax-video");
new Ukiyo(images,{
  scale: 1.4,
  speed: 1.5,
  externalRAF: false,
});
new Ukiyo(imagesSmall,{
  scale: 1.2,
  speed: 1.5,
  externalRAF: false
});
new Ukiyo(video,{
  scale: 1.4,
  speed: 1.5,
  externalRAF: false
});
// --------------------------------------------- //
// Parallax - Ukiyo Images & Video End
// --------------------------------------------- //

// --------------------------------------------- //
// Animation - Perspective List Start
// --------------------------------------------- //
function mxdPerspectiveList() {
  const mxdPerspectiveList = document.querySelectorAll(".mxd-perspective-list");
  if (!mxdPerspectiveList.length) return;
  mxdPerspectiveList.forEach((list) => {
    const items = list.querySelectorAll(".mxd-perspective-list__item");
    items.forEach((item) => {
      const inner = item.querySelector(".mxd-perspective-list__inner");
      if (!inner) return;
      gsap.set(inner, {
        rotateX: 0,
        opacity: 1,
        filter: "blur(0px)",
      });
      gsap.to(inner, {
        rotateX: 30,
        opacity: 0.3,
        filter: "blur(4px)",
        ease: "none",
        scrollTrigger: {
          trigger: item,
          start: "5% top",
          end: "bottom 40%",
          scrub: 0.6,
        },
      });
    });
  });
}
// --------------------------------------------- //
// Animation - Perspective List End
// --------------------------------------------- //

// --------------------------------------------- //
// Swiper Slider - Testimonials Start
// --------------------------------------------- //
const testimonialsSlider = document.querySelector("testimonials-slider");
if (!testimonialsSlider) {
  const swiper = new Swiper('.swiper-testimonials', {
    slidesPerView: 'auto',
    grabCursor: true,
    spaceBetween: 30,
    autoplay: true,
    delay: 3000,
    speed: 1000,
    loop: true,
    parallax: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};
// --------------------------------------------- //
// Swiper Slider - Testimonials End
// --------------------------------------------- //

// --------------------------------------------- //
// Swiper Slider - Inner Pages Demo Start
// --------------------------------------------- //
const innerDemoSlider = document.querySelector("mxd-demo-swiper");
if (!innerDemoSlider) {
  const swiper = new Swiper('.mxd-demo-swiper', {
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1600: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    loop: true,
    parallax: true,
    autoplay: { disableOnInteraction: false, enabled: true },
    grabCursor: true,
    speed: 1200,
    centeredSlides: true,
    keyboard: { enabled: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};
// --------------------------------------------- //
// Swiper Slider - Inner Pages Demo End
// --------------------------------------------- //

// --------------------------------------------- //
// Jquery - Jquery Dependent Components Start
// --------------------------------------------- //
$(function() {

  // --------------------------------------------- //
  // Menu Accordion Start
  // --------------------------------------------- //
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    var links = this.el.find('.main-menu__toggle');
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }
  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
        $this = $(this),
        $next = $this.next();
    $next.slideToggle();
    $this.parent().toggleClass('open');
    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };
  }
  var accordion = new Accordion($('#main-menu'), false);
  // --------------------------------------------- //
  // Menu Accordion End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Accordion Start
  // --------------------------------------------- //
  $(".mxd-accordion__title").on("click", function(e) {
    e.preventDefault();
    var $this = $(this);
    if (!$this.hasClass("accordion-active accordion-opened")) {
      $(".mxd-accordion__content").slideUp(400);
      $(".mxd-accordion__title").removeClass("accordion-active accordion-opened");
      $('.mxd-accordion__arrow').removeClass('accordion-rotate');
    }
    $this.toggleClass("accordion-active accordion-opened");
    $this.next().slideToggle();
    $('.mxd-accordion__arrow',this).toggleClass('accordion-rotate');
    });
  // --------------------------------------------- //
  // Accordion End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Contact Form Start
  // --------------------------------------------- //
  $("#contact-form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $('.contact').find('.form').addClass('is-hidden');
      $('.contact').find('.form__reply').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.contact').find('.form__reply').removeClass('is-visible');
        $('.contact').find('.form').delay(300).removeClass('is-hidden');
        th.trigger("reset");
      }, 5000);
    });
    return false;
  });
  // --------------------------------------------- //
  // Contact Form End
  // --------------------------------------------- //

});
// --------------------------------------------- //
// Jquery - Jquery Dependent Components End
// --------------------------------------------- //

// --------------------------------------------- //
// Next Project Arrow – Scroll-Connected Transition Start
// --------------------------------------------- //
function mxdFlipArrowOnScroll() {
  const wrappers = document.querySelectorAll(".mxd-flip-arrow");
  if (!wrappers.length) return;

  wrappers.forEach(wrapper => {
    const containerA = wrapper.querySelector(".arrow-container-1");
    const containerB = wrapper.querySelector(".arrow-container-2");
    const arrow = containerA.querySelector("svg");
    if (!containerA || !containerB || !arrow) return;

    gsap.set(arrow, { position: "absolute", left: 0, top: 0, });

    const getPositions = () => {
      const a = containerA.getBoundingClientRect();
      const b = containerB.getBoundingClientRect();
      return {
        startX: a.left,
        startY: a.top,
        endX: b.left,
        endY: b.top,
      };
    };

    let pos = getPositions();

    ScrollTrigger.create({
      trigger: wrapper,
      start: "top 80%",
      end: "top 10%",
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress;

        gsap.set(arrow, {
          x: gsap.utils.interpolate(0, pos.endX - pos.startX, p),
          y: gsap.utils.interpolate(0, pos.endY - pos.startY, p),
        });
      },

      onRefresh: () => {
        pos = getPositions();
      },
    });
  });
}
mxdFlipArrowOnScroll();
// --------------------------------------------- //
// Next Project Arrow – Scroll-Connected Transition End
// --------------------------------------------- //

// --------------------------------------------- //
// Color Switch Start
// --------------------------------------------- //
function mxdColorSwitcher() {
  const themeBtn = document.querySelector('#color-switcher');
  if (!themeBtn) return;

  function mxdSafeLocalGet(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function mxdSafeLocalSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      // storage unavailable
    }
  }
  function getCurrentTheme(){
    let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    // localStorage.getItem('template.theme') ? theme = localStorage.getItem('template.theme') : null;
    const storedTheme = mxdSafeLocalGet('template.theme');
    if (storedTheme) theme = storedTheme;
    return theme;
  }
  function loadTheme(theme){
    const root = document.querySelector(':root');
    if(theme === "light"){
      // Use commented line if you want to use Phosphor icon instead of custom
      // themeBtn.innerHTML = `<span class="switcher-text mxd-scramble">Night</span>
      //       <i class="ph-bold ph-moon-stars"></i>`;
      themeBtn.innerHTML = `<span class="switcher-text mxd-scramble">Night</span>
            <span class="switcher-icon night">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" version="1.1" viewBox="0 0 18 18">
                <path d="M7.7,0h7.7v2.6h-2.6v2.6h-2.6v7.7h2.6v2.6h2.6v2.6h-7.7v-2.6h-2.6v-2.6h-2.6v-7.7h2.6v-2.6h2.6V0Z"/>
              </svg>
            </span>`;
    } else {
      // Use commented line if you want to use Phosphor icon instead of custom
      // themeBtn.innerHTML = `<span class="switcher-text mxd-scramble">Day</span>
      //       <i class="ph-bold ph-sun-horizon"></i>`;
      themeBtn.innerHTML = `<span class="switcher-text mxd-scramble">Day</span>
            <span class="switcher-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" version="1.1" viewBox="0 0 18 18">
                <path d="M8,0h2v2h-2V0ZM2,2h2v2h-2v-2ZM14,2h2v2h-2v-2ZM6,4h6v2h2v6h-2v2h-6v-2h-2v-6h2v-2ZM0,8h2v2H0v-2ZM16,8h2v2h-2v-2ZM2,14h2v2h-2v-2ZM14,14h2v2h-2v-2ZM8,16h2v2h-2v-2Z"/>
              </svg>
            </span>`;
    }
    root.setAttribute('color-scheme', `${theme}`);
  };
  themeBtn.addEventListener('click', () => {
    let theme = getCurrentTheme();
    if(theme === 'dark'){
      theme = 'light';
    } else {
      theme = 'dark';
    }
    // localStorage.setItem('template.theme', `${theme}`);
    mxdSafeLocalSet('template.theme', theme);
    loadTheme(theme);
  });
  loadTheme(getCurrentTheme());
}
// --------------------------------------------- //
// Color Switch End
// --------------------------------------------- //

// --------------------------------------------- //
// Hero Scaling Video Start
// --------------------------------------------- //
function mxdHeroVideoScale() {
  const wrappers = document.querySelectorAll("[data-flip-element='wrapper']");
  const target = document.querySelector("[data-flip-element='target']");
  if (!wrappers.length || !target) { return; }

  let tl;
  function buildTimeline() {
    if (tl) {
      tl.kill();
      gsap.set(target, { clearProps: "all" });
    }
    tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrappers[0],
        start: "bottom center-=100",
        endTrigger: wrappers[wrappers.length - 1],
        end: "top center",
        // scrub: 0.25,
        scrub: 0.55
      }
    });
    wrappers.forEach((el, i) => {
      const next = wrappers[i + 1];
      if (!next) return;
      const thisCenter = el.getBoundingClientRect().top + window.pageYOffset + el.offsetHeight / 2;
      const nextCenter = next.getBoundingClientRect().top + window.pageYOffset + next.offsetHeight / 2;
      const offset = nextCenter - thisCenter;

        tl.add(Flip.fit(target, next, {
          duration: offset,
          ease: "none"
        }));
    });
  }
  buildTimeline();

  // Debounced resize handler
  let resizeTimer;
  function handleResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildTimeline, 100);
  }
  window.addEventListener("resize", handleResize);

  // Return cleanup function for Slater
  return () => {
    if (tl) {
      tl.kill();
    }
    window.removeEventListener("resize", handleResize);
    clearTimeout(resizeTimer);
  };
}
// --------------------------------------------- //
// Hero Scaling Video End
// --------------------------------------------- //

// --------------------------------------------- //
// Hero Portrait/Landscape Video Swap Start
// --------------------------------------------- //
function mxdHeroVideoSwap() {
  const video = document.getElementById("mxd-hero-06__video");
  if (!video) return;

  const mqPortrait = window.matchMedia("(max-aspect-ratio: 3/4)");
  let currentMode = null;

  function setPoster(isPortrait) {
    const poster = isPortrait ? video.dataset.posterPortrait : video.dataset.posterLandscape;
    if (video.poster !== poster) {
      video.poster = poster;
    }
  }

  function loadVideo(isPortrait) {
    const mode = isPortrait ? "portrait" : "landscape";
    if (mode === currentMode) return; // 🔑 no reload spam

    currentMode = mode;

    setPoster(isPortrait);
    video.pause();
    video.innerHTML = "";

    const mp4 = document.createElement("source");
    mp4.src = video.dataset[`${mode}Mp4`];
    mp4.type = "video/mp4";

    const webm = document.createElement("source");
    webm.src = video.dataset[`${mode}Webm`];
    webm.type = "video/webm";

    video.append(webm, mp4);
    video.load();

    video.play().catch(() => {});
  }

  // Initial load
  loadVideo(mqPortrait.matches);

  // React ONLY when breakpoint flips
  mqPortrait.addEventListener("change", e => {
    loadVideo(e.matches);
  });
}
// --------------------------------------------- //
// Hero Portrait/Landscape Video Swap End
// --------------------------------------------- //

// --------------------------------------------- //
// Hero 3D Images on Scroll Start
// --------------------------------------------- //
function mxdHero3dImages() {
  const container = document.querySelector(".mxd-hero-02");
  const imagesContainer = document.querySelector(".mxd-hero-02__images");
  const images = document.querySelectorAll(".hero-02__img");
  const coverImg = document.querySelector(".mxd-hero-02__cover-img");
  const introHeader = document.querySelector(".mxd-hero-02__intro h1");
  const outroHeader = document.querySelector(".mxd-hero-02__outro p");
  if (!imagesContainer || !coverImg || !introHeader || !outroHeader) {
    // console.log("Some 3d animation elements are lost");
    return;
  }
  if (!container) {
    // console.log("3d animation container not found");
    return;
  }

  let introHeaderSplit = null;
  let outroHeaderSplit = null;

  introHeaderSplit = SplitText.create(introHeader, { type: "words, chars" });
  gsap.set(introHeaderSplit.chars, { opacity: 1 });

  outroHeaderSplit = SplitText.create(outroHeader, { type: "words, chars" });
  gsap.set(outroHeaderSplit.chars, { opacity: 0 });
  gsap.set(outroHeader, { opacity: 1 });

  const scatterDirections = [
    { x: 1.3, y: 0.7 },
    { x: -1.5, y: 1.0 },
    { x: 1.1, y: -1.3 },
    { x: -1.7, y: -0.8 },
    { x: 0.8, y: 1.5 },
    { x: -1.0, y: -1.4 },
    { x: 1.6, y: 0.3 },
    { x: -0.7, y: 1.7 },
    { x: 1.2, y: -1.6 },
    { x: -1.4, y: 0.9 },
    { x: 1.8, y: 0.5 },
    { x: 1.1, y: -1.8 },
    { x: 0.9, y: 1.8 },
    { x: -1.9, y: 0.4 },
    { x: 1.0, y: -1.9 },
    { x: -0.8, y: 1.9 },
    { x: 1.7, y: -1.0 },
    { x: -1.3, y: -1.2 },
    { x: 0.7, y: 2.0 },
    { x: 1.25, y: -0.2 },
  ];

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const isMobile = screenWidth < 768;
  const scatterMultiplier = isMobile ? 2.5 : 0.5;

  const startPositions = Array.from(images).map(() => ({
    x: 0,
    y: 0,
    z: -1000,
    scale: 0,
  }));

  const endPositions = scatterDirections.map((dir) => ({
    x: dir.x * screenWidth * scatterMultiplier,
    y: dir.y * screenHeight * scatterMultiplier,
    z: 2000,
    scale: 1,
  }));

  images.forEach((img, index) => {
    gsap.set(img, startPositions[index]);
  });

  gsap.set(coverImg, {
    z: -1000,
    scale: 0,
    x: 0,
    y: 0,
  });

  ScrollTrigger.create({
    trigger: ".mxd-hero-02",
    start: "top top",
    end: `+=${window.innerHeight * 10}px`,
    pin: true,
    pinSpacing: true,
    scrub: 1,
    onUpdate: (self) => {
      const progress = self.progress;

      images.forEach((img, index) => {
        const staggerDelay = index * 0.03;
        const scaleMultiplier = isMobile ? 4 : 2;

        let imageProgress = Math.max(0, (progress - staggerDelay) * 4);

        const start = startPositions[index];
        const end = endPositions[index];

        const zValue = gsap.utils.interpolate(start.z, end.z, imageProgress);
        const scaleValue = gsap.utils.interpolate(
          start.scale,
          end.scale,
          imageProgress * scaleMultiplier
        );
        const xValue = gsap.utils.interpolate(start.x, end.x, imageProgress);
        const yValue = gsap.utils.interpolate(start.y, end.y, imageProgress);

        gsap.set(img, {
          z: zValue,
          scale: scaleValue,
          x: xValue,
          y: yValue,
        });
      });

      const coverProgress = Math.max(0, (progress - 0.7) * 4);
      const coverZValue = -1000 + 1000 * coverProgress;
      const coverScaleValue = Math.min(1, coverProgress * 2);

      gsap.set(coverImg, {
        z: coverZValue,
        scale: coverScaleValue,
        x: 0,
        y: 0,
      });

      if (introHeaderSplit && introHeaderSplit.chars.length > 0) {
        if (progress >= 0.6 && progress <= 0.75) {
          const introFadeProgress = (progress - 0.6) / 0.15;
          const totalChars = introHeaderSplit.chars.length;

          introHeaderSplit.chars.forEach((char, index) => {
            const charFadeProgress = index / totalChars;
            const fadeRange = 0.1;

            if (introFadeProgress >= charFadeProgress + fadeRange) {
              gsap.set(char, { opacity: 0 });
            } else if (introFadeProgress <= charFadeProgress) {
              gsap.set(char, { opacity: 1 });
            } else {
              const charOpacity = 1 - (introFadeProgress - charFadeProgress) / fadeRange;
              gsap.set(char, { opacity: charOpacity });
            }
          });
        } else if (progress < 0.6) {
          gsap.set(introHeaderSplit.chars, { opacity: 1 });
        } else if (progress > 0.75) {
          gsap.set(introHeaderSplit.chars, { opacity: 0 });
        }
      }

      if (outroHeaderSplit && outroHeaderSplit.chars.length > 0) {
        if (progress >= 0.8 && progress <= 0.95) {
          const outroRevealProgress = (progress - 0.8) / 0.15;
          const totalChars = outroHeaderSplit.chars.length;

          outroHeaderSplit.chars.forEach((char, index) => {
            const charRevealProgress = index / totalChars;
            const fadeRange = 0.1;

            if (outroRevealProgress >= charRevealProgress + fadeRange) {
              gsap.set(char, { opacity: 1 });
            } else if (outroRevealProgress <= charRevealProgress) {
              gsap.set(char, { opacity: 0 });
            } else {
              const charOpacity = (outroRevealProgress - charRevealProgress) / fadeRange;
              gsap.set(char, { opacity: charOpacity });
            }
          });
        } else if (progress < 0.8) {
          gsap.set(outroHeaderSplit.chars, { opacity: 0 });
        } else if (progress > 0.95) {
          gsap.set(outroHeaderSplit.chars, { opacity: 1 });
        }
      }
    },
  });
}
// --------------------------------------------- //
// Hero 3D Images on Scroll End
// --------------------------------------------- //

// --------------------------------------------- //
// Hero Inertia Start
// --------------------------------------------- //
function mxdHeroInertia() {
  const root = document.querySelector('.mxd-hero-07');
  if (!root) {
    // console.log("Inertia animation container not found");
    return;
  }

  let oldX = 0, 
      oldY = 0, 
      deltaX = 0,
      deltaY = 0

  root.addEventListener("mousemove", (e) => {
      // Calculate horizontal movement since the last mouse position
      deltaX = e.clientX - oldX;
      // Calculate vertical movement since the last mouse position
      deltaY = e.clientY - oldY;
      // Update old coordinates with the current mouse position
      oldX = e.clientX;
      oldY = e.clientY;
  })

  root.querySelectorAll('.mxd-hero-07__object').forEach(el => {

    // Add an event listener for when the mouse enters each media
    el.addEventListener('mouseenter', () => {

      const tl = gsap.timeline({ 
          onComplete: () => {
              tl.kill()
          }
      })
      tl.timeScale(1.2) // Animation will play 20% faster than normal

      const image = el.querySelector('img')
      tl.to(image, {
        inertia: {
            x: {
                velocity: deltaX * 30, // Higher number = movement amplified
                end: 0 // Go back to the initial position
            },
            y: {
                velocity: deltaY * 30, // Higher number = movement amplified
                end: 0 // Go back to the initial position
            },
        },
      })
      tl.fromTo(image, {
        rotate: 0
      }, {
        duration: 0.4,
        rotate:(Math.random() - 0.5) * 30, // Returns a value between -15 & 15
        yoyo: true, 
        repeat: 1,
        ease: 'power1.inOut' // Will slow at the begin and the end
      }, '<') // The animation starts at the same time as the previous tween
    })
  })
}
// --------------------------------------------- //
// Hero Inertia End
// --------------------------------------------- //

// --------------------------------------------- //
// Hero Horizontal Slider Start
// --------------------------------------------- //
function mxdHeroHorizontal() {
  const stickySection = document.querySelector(".mxd-hero-04__wrap");
  const slidesContainer = document.querySelector(".mxd-hero-04__slides");
  const slider = document.querySelector(".mxd-hero-04__slider");
  const slides = document.querySelectorAll(".mxd-hero-04__slide");
  const slideCount = slides.length;
  if (!stickySection) {
    // console.log("Inertia animation container not found");
    return;
  }

  // Initialize text positions
  slides.forEach((slide) => {
    const name = slide.querySelector(".mxd-hero-04__name p");
    const descr = slide.querySelector(".mxd-hero-04__descr p");
    gsap.set([name, descr], { yPercent: 120 });
  });

  let activeSlide = -1;

  ScrollTrigger.create({
    trigger: stickySection,
    start: "top top",
    end: () => `+=${window.innerHeight * (slideCount - 0.5)}`,
    scrub: true,
    pin: true,
    pinSpacing: true,
    invalidateOnRefresh: true,
    snap: {
      snapTo: 1 / (slideCount - 1),
      duration: { min: 0.2, max: 0.6 },
      ease: "none"
    },

    onUpdate: (self) => {
      const sliderWidth = slider.offsetWidth;
      const totalMove = slidesContainer.scrollWidth - sliderWidth;

      const progress = self.progress;
      const mainMove = progress * totalMove;

      // Move slides container
      gsap.set(slidesContainer, { x: -mainMove });

      const rawIndex = mainMove / sliderWidth;
      const baseSlide = Math.floor(rawIndex);
      const sliderProgress = rawIndex - baseSlide;

      // Determine text activation based on 2/3 visibility
      let activationIndex = sliderProgress > 0.33 ? baseSlide + 1 : baseSlide;
      activationIndex = Math.max(0, Math.min(slideCount - 1, activationIndex));

      // Parallax images
      slides.forEach((slide, index) => {
        const image = slide.querySelector("img");
        if (!image) return;

        if (index === baseSlide || index === baseSlide + 1) {
          const relativeProgress = index === baseSlide ? sliderProgress : sliderProgress - 1;
          gsap.set(image, {
            x: relativeProgress * sliderWidth * 0.25,
            scale: 1.25
          });
        } else {
          gsap.set(image, { x: 0, scale: 1.25 });
        }
      });

      // Animate titles
      if (activationIndex !== activeSlide) {
        activeSlide = activationIndex;

        slides.forEach((slide, index) => {
          const name = slide.querySelector(".mxd-hero-04__name p");
          const descr = slide.querySelector(".mxd-hero-04__descr p");

          if (index === activeSlide) {
            gsap.to(name, { yPercent: 0, duration: 0.7, ease: "power3.out" });
            gsap.to(descr, { yPercent: 0, duration: 0.7, delay: 0.08, ease: "power3.out" });
          } else {
            gsap.to([name, descr], { yPercent: 120, duration: 0.5, ease: "power2.in" });
          }
        });
      }
    }
  });
}
// --------------------------------------------- //
// Hero Horizontal Slider End
// --------------------------------------------- //

// --------------------------------------------- //
// Hero Banners Hover Animation - About Us Page Start
// --------------------------------------------- //
function mxdHeroBannersHover() {
  const container = document.querySelector(".banners-hover");
  if (!container) return;

  let activeGroup = null;
  let isTransitioning = false;

  const groups = [
    {
      trigger: document.querySelector(".banners-trigger-1"),
      banners: document.querySelectorAll(".headline-banner-01"),
    },
    {
      trigger: document.querySelector(".banners-trigger-2"),
      banners: document.querySelectorAll(".headline-banner-02"),
    },
  ];

  groups.forEach(group => {
    if (!group.trigger || !group.banners.length) return;

    gsap.set(group.banners, {
      clipPath: "inset(0% 0% 100% 0%)",
      y: 20,
    });

    group.tl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.5,
        ease: "hop",
      },
    }).to(group.banners, {
      clipPath: "inset(0% 0% 0% 0%)",
      y: 0,
    });
  });

  // Trigger logic
  groups.forEach(group => {
    if (!group.trigger || !group.tl) return;

    group.trigger.addEventListener("mouseenter", () => {
      if (isTransitioning || activeGroup === group) return;

      if (activeGroup) {
        isTransitioning = true;

        activeGroup.tl.eventCallback("onReverseComplete", () => {
          activeGroup = group;
          group.tl.play();
          isTransitioning = false;
        });

        activeGroup.tl.reverse();
      } else {
        activeGroup = group;
        group.tl.play();
      }
    });
  });

  container.addEventListener("mouseleave", () => {
    if (!activeGroup || isTransitioning) return;

    isTransitioning = true;

    activeGroup.tl.eventCallback("onReverseComplete", () => {
      activeGroup = null;
      isTransitioning = false;
    });

    activeGroup.tl.reverse();
  });
}
// --------------------------------------------- //
// Hero Banners Hover Animation - About Us Page End
// --------------------------------------------- //

// --------------------------------------------- //
// Hero Typed.js Plugin Settings - About Me Page Start
// --------------------------------------------- //
function mxdHeroTyped() {
  var animatedHeadline = $(".animated-type");
  if (!animatedHeadline) return;
  if(animatedHeadline.length){
    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      showCursor: true,
      cursorChar: '_',
      loop: true,
      typeSpeed: 70,
      backSpeed: 30,
      backDelay: 2500
    });
  }
}
// --------------------------------------------- //
// Hero Typed.js Plugin Settings - About Me Page End
// --------------------------------------------- //

