/**
 * homePage.js
 * ----------------
 * DESCRIPTION:
 * This file contains the specific functionality for the Home Page.
 *
 * AUTHOR: Pau Ferrer @ Minimal Designs
 * CREATED AT: 06/03/2023
 * LAST UPDATE: 06/03/2023
 */
// HOME PAGE ////////////////

// BACKGROUND IMAGE ////////////////

// ➡️ Due to Webpack this is the only viable way.
import homeHeroImage from "../img/webp/hero-background.webp";
const homeHero = document.querySelector('[data-section="hero"]');
homeHero.style.backgroundImage = `url(${homeHeroImage}), linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 22.59%)`;

// VIEW OUR MENU CTA ANIMATION ////////////////
const heroCta = document.querySelector('[data-element="cta-scroll"]');
heroCta.onmouseover = () => heroCta.children[0].classList.add("hovered");
heroCta.onmouseout = () => heroCta.children[0].classList.remove("hovered");
