"use client";

import React, { useEffect, useState } from "react";

export default function FloatingMenu() {
  const [isHiddenOnContact, setIsHiddenOnContact] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById("contact");

    const checkVisibility = () => {
      if (!contactSection) return;
      const rect = contactSection.getBoundingClientRect();
      // When the top of the contact section enters the viewport (with a 50px buffer)
      if (rect.top <= window.innerHeight * 0.85) {
        setIsHiddenOnContact(true);
      } else {
        setIsHiddenOnContact(false);
      }
    };

    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", checkVisibility, { passive: true });

    // Initial check
    checkVisibility();

    // Also use IntersectionObserver as a complementary high-performance trigger
    let observer: IntersectionObserver | null = null;
    if (contactSection && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsHiddenOnContact(true);
          } else {
            // Double-check with scroll position before showing again
            checkVisibility();
          }
        },
        {
          root: null,
          rootMargin: "0px 0px -15% 0px",
          threshold: 0.05,
        }
      );
      observer.observe(contactSection);
    }

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <button
      type="button"
      id="floating-menu-pill"
      className={`hero-menu-pill mxd-menu__toggle ${
        isHiddenOnContact ? "menu-pill-hidden" : ""
      }`}
      aria-label="Open Navigation Menu"
    >
      MENU
    </button>
  );
}
