"use client";

import React, { useEffect, useState } from "react";

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHiddenOnContact, setIsHiddenOnContact] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById("contact");

    const checkVisibility = () => {
      // If menu is open, never hide it
      if (document.body.classList.contains("menu-open")) {
        setIsHiddenOnContact(false);
        return;
      }
      if (!contactSection) return;
      const rect = contactSection.getBoundingClientRect();
      // When contact top enters within bottom 85% of screen
      if (rect.top <= window.innerHeight * 0.85) {
        setIsHiddenOnContact(true);
      } else {
        setIsHiddenOnContact(false);
      }
    };

    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", checkVisibility, { passive: true });
    checkVisibility();

    // Observe body for "menu-open" class added/removed by app.js
    const observer = new MutationObserver(() => {
      const isMenuOpen = document.body.classList.contains("menu-open");
      setIsOpen(isMenuOpen);
      if (isMenuOpen) {
        setIsHiddenOnContact(false);
      } else {
        checkVisibility();
      }
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    // Listen for clicks on links in the overlay menu so button resets to MENU
    const handleMenuLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".mxd-menu a")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleMenuLinkClick);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
      document.removeEventListener("click", handleMenuLinkClick);
      observer.disconnect();
    };
  }, []);

  return (
    <button
      type="button"
      id="floating-menu-pill"
      className={`hero-menu-pill mxd-menu__toggle ${isOpen ? "is-menu-open" : ""} ${
        isHiddenOnContact && !isOpen ? "menu-pill-hidden" : ""
      }`}
      aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <span className="menu-pill-inner">
          <svg
            className="menu-close-svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          <span className="menu-pill-text">CLOSE</span>
        </span>
      ) : (
        <span className="menu-pill-inner">
          <span className="menu-pill-text">MENU</span>
        </span>
      )}
    </button>
  );
}
