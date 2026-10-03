import React from "react";

export default function NavigationHeader() {
  return (
    <header id="header" className="mxd-header mxd-header-permanent">
      <div className="mxd-header__controls loading-fade">
        <a className="btn mxd-header__link slide-right-up" href="#contact" aria-label="Say Hello">
          <span className="btn-caption mxd-scramble">Say Hello</span>
          <i>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
              <path d="M18,0v14.4h-3.6v-7.2h-3.6v-3.6H3.6V0h14.4ZM7.2,10.8h3.6v-3.6h-3.6s0,3.6,0,3.6ZM3.6,14.4h3.6v-3.6h-3.6v3.6ZM0,18h3.6v-3.6H0v3.6Z" />
            </svg>
          </i>
        </a>
        <button
          type="button"
          className="hero-menu-pill mxd-menu__toggle"
          aria-label="Open Navigation Menu"
        >
          MENU
        </button>
      </div>
    </header>
  );
}
