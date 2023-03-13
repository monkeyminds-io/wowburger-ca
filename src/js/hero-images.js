/**
 * hero-images.js
 * ----------------
 * DESCRIPTION:
 * description
 *
 * AUTHOR: Pau Ferrer @ Minimal Designs
 * CREATED AT: 08/03/2023
 * LAST UPDATE: 08/03/2023
 */
// BACKGROUND IMAGE ////////////////
// ➡️ Due to Webpack this is the only viable way.
import heroImage from "../img/png/background-pattern.png";
const hero = document.querySelector('[data-section="hero"]');
hero.style.backgroundImage = `url(${heroImage})`;
