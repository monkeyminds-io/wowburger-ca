/**
 * home-page.js
 * ----------------
 * DESCRIPTION:
 * This file contains the specific functionality for the Home Page.
 *
 * AUTHOR: Pau Ferrer @ Minimal Designs
 * CREATED AT: 06/03/2023
 * LAST UPDATE: 06/03/2023
 */

// BACKGROUND IMAGE ////////////////
// ➡️ Due to Webpack this is the only viable way.

// Imports
import heroImage from "../img/webp/hero-background.webp";

// DOM Elements
const hero = document.querySelector('[data-section="hero"]');

// Logic
hero.style.backgroundImage = `url(${heroImage}), linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 22.59%)`;

// VIEW OUR MENU CTA ANIMATIONS ////////////////
/* Hover effect */

// DOM elements
const heroCta = document.querySelector('[data-element="cta-scroll"]');

// Logic
heroCta.onmouseover = () => heroCta.children[0].classList.add("hovered");
heroCta.onmouseout = () => heroCta.children[0].classList.remove("hovered");

/* Click event */

// DOM Elements
const sectionMenu = document.querySelector("#our-menu");

// Functions
// Used to scroll to the set section in a perfect and smooth way
const scrollToSection = function (section, offset) {
  let elementPosition = section.getBoundingClientRect().top;
  let offSetPosition = elementPosition + window.pageYOffset - offset;
  window.scrollTo({
    top: offSetPosition,
    behavior: "smooth",
  });
};

// Logic
heroCta.addEventListener("click", (e) => {
  e.preventDefault();
  [heroCta, ...heroCta.children].forEach((cta) =>
    cta === e.target ? scrollToSection(sectionMenu, 40) : null
  );
});
