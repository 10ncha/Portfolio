// @ts-check

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(SplitText);

  const container = document.querySelector(`.main-container`);
  const navToggle = document.querySelector(`.nav-menu-toggle`);
  const menuOverlay = document.querySelector(`.menu-overlay`);
  const menuContent = document.querySelector(`.menu-content`);
  const menuLogo = document.querySelector(`.menu-logo`);
  const menuLinksWrapper = document.querySelector(`.menu-links-wrapper`);
  const linkHighlighter = document.querySelector(`.link-highlighter`);

  let currentX = 0;
  let targetX = 0;
  const lerpFactor = 0.05;

  let currentHighlighterX = 0;
  let targetHighlighterX = 0;
  let currentHighlighterWidth = 0;
  let targetHighlighterWidth = 0;

  let isMenuOpen = false;
  let isMenuAnimating = false;

  const menuLinks = document.querySelectorAll(`.menu-link a`);
  menuLinks.forEach((link) => {
    const chars = link.querySelectorAll(`span`);
    chars.forEach((char, charIndex) => {
      const split = new SplitText(char, { type: "chars" });
      split.chars.forEach((char) => {
        char.classList.add("char");
      });
      if (charIndex === 1) {
        gsap.set(split.chars, { y: "110%" });
      }
    });
  });
});
