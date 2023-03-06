/**
 * scripts.js
 * ----------------
 * DESCRIPTION:
 * Contains all the scripts for the website.
 *
 * AUTHOR: Pau Ferrer @ Minimal Designs
 * CREATED AT: 05/03/2023
 * LAST UPDATE: 05/03/2023
 */

// NAVBAR ANIMATION ////////////////
const nav = document.querySelector('[data-component="nav"]');
const burger = nav.querySelector('[data-element="burger"]');
const menu = nav.querySelector('[data-element="menu"]');

const openNavMenu = function () {
  menu.classList.toggle("opened");
};

nav.addEventListener("click", (e) => {
  e.preventDefault();
  [burger, ...burger.childNodes].forEach((clickable) =>
    e.target === clickable ? openNavMenu() : null
  );
});
