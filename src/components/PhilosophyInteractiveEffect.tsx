"use client";

import { useEffect } from "react";

export default function PhilosophyInteractiveEffect() {
  useEffect(() => {
    const section = document.getElementById("services");
    if (!section) return;

    let isDistorting = false;
    let distortTimeout: NodeJS.Timeout | null = null;
    let prevActiveIndex = -1;
    let rafId: number | null = null;

    const checkProximity = () => {
      const content = section.querySelector<HTMLElement>(".mxd-dv-sticky-cap__content");
      const captionText = section.querySelector<HTMLElement>(".mxd-dv-sticky-cap__text.permanent");
      const items = section.querySelectorAll<HTMLElement>(".scroll-images-row__item");

      if (!content || !captionText || items.length === 0) {
        rafId = requestAnimationFrame(checkProximity);
        return;
      }

      const textRect = captionText.getBoundingClientRect();
      const textCenterX = textRect.left + textRect.width / 2;
      const textCenterY = textRect.top + textRect.height / 2;

      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      let maxProximity = 0;
      let activeItemIndex = -1;

      for (let index = 0; index < items.length; index++) {
        const item = items[index];
        const obj = item.querySelector<HTMLElement>(".scroll-images-row__obj");
        if (!obj) continue;
        const rect = obj.getBoundingClientRect();

        // If card is far off-screen, clear any glow and continue
        if (rect.bottom < -100 || rect.top > viewportHeight + 100) {
          obj.classList.remove("has-edge-glow");
          continue;
        }

        const objCenterX = rect.left + rect.width / 2;
        const objCenterY = rect.top + rect.height / 2;
        const dx = Math.abs(objCenterX - textCenterX);

        // Calculate actual physical overlap with the text
        const overlapTop = Math.max(rect.top, textRect.top);
        const overlapBottom = Math.min(rect.bottom, textRect.bottom);
        const overlapHeight = Math.max(0, overlapBottom - overlapTop);

        // Proximity is based on whether the card is actually behind the text
        let proximity = 0;
        if (overlapHeight > 0) {
          // Card is physically behind the text
          const coverageRatio = Math.min(1, overlapHeight / (textRect.height * 0.35));
          proximity = coverageRatio * coverageRatio * (3 - 2 * coverageRatio);
        }

        // Horizontal factor: check if horizontally close or overlapping
        const isHorizontalOverlap = rect.right > textRect.left - 40 && rect.left < textRect.right + 40;
        if (isHorizontalOverlap) {
          proximity = proximity * 1.15;
        } else {
          const maxLateral = viewportWidth * 0.65;
          const lateralFactor = Math.max(0.2, 1 - (dx / maxLateral));
          proximity = proximity * lateralFactor;
        }

        proximity = Math.max(0, Math.min(1, proximity));

        if (proximity > maxProximity) {
          maxProximity = proximity;
          activeItemIndex = index;
        }

        // Card edge glow when near or on text
        const distToTextCenter = Math.hypot(objCenterX - textCenterX, objCenterY - textCenterY);
        if (distToTextCenter < 380) {
          obj.classList.add("has-edge-glow");
        } else {
          obj.classList.remove("has-edge-glow");
        }
      }

      // --- ADAPTIVE TYPOGRAPHY TRANSITION ---
      if (maxProximity > 0.25) {
        content.classList.add("philosophy-text-illuminated");

        // Trigger subtle horizontal distortion & blur on entry (~150-250ms)
        if (prevActiveIndex !== activeItemIndex && maxProximity > 0.32 && !isDistorting) {
          isDistorting = true;
          captionText.classList.add("is-distorting");
          if (distortTimeout) clearTimeout(distortTimeout);
          distortTimeout = setTimeout(() => {
            captionText.classList.remove("is-distorting");
            isDistorting = false;
          }, 220);
        }
      } else {
        content.classList.remove("philosophy-text-illuminated");
      }

      prevActiveIndex = activeItemIndex;

      rafId = requestAnimationFrame(checkProximity);
    };

    rafId = requestAnimationFrame(checkProximity);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (distortTimeout) clearTimeout(distortTimeout);
    };
  }, []);

  return null;
}
