import React from "react";
import { NavItem } from "@/types/portfolio";

const NAV_ITEMS: NavItem[] = [
  { id: "hero", number: "/ 01", caption: "Home", href: "#hero" },
  { id: "projects", number: "/ 02", caption: "Projects", href: "#projects" },
  { id: "achievements", number: "/ 03", caption: "Achievements", href: "#achievements" },
  { id: "contact", number: "/ 04", caption: "Contact", href: "#contact" },
];

export default function NavigationMenu() {
  return (
    <nav className="mxd-menu" aria-label="Portfolio Menu">
      <div className="mxd-menu__backdrop" />

      {/* Menu Overlay */}
      <div className="mxd-menu__overlay">
        <div className="mxd-menu__content" data-lenis-prevent>
          {/* Menu Media Portrait */}
          <div className="mxd-menu__media">
            <div className="menu-media__wrapper">
              <img
                src="/img/arnav_sketch_menu.webp"
                alt="Arnav Singh architectural portrait"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>
          </div>

          {/* Main Navigation Links */}
          <div className="mxd-menu__navigation">
            <div className="mxd-menu__inner">
              <div className="mxd-menu__left">
                <div className="main-menu">
                  <div className="main-menu__content">
                    <ul id="main-menu" className="main-menu__accordion">
                      {NAV_ITEMS.map((item, index) => (
                        <li key={item.id} className="main-menu__item">
                          {index === 0 && <div className="main-menu__divider divider-top" />}
                          <a className="main-menu__toggle" href={item.href}>
                            <div className="main-menu__link">
                              <span className="main-menu__number">{item.number}</span>
                              <span className="main-menu__caption">{item.caption}</span>
                            </div>
                            <div className="main-menu__arrow">
                              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
                                <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                              </svg>
                            </div>
                          </a>
                          <div className="main-menu__divider divider-bottom" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
