/**
 * navbar.js
 * ----------------
 * DESCRIPTION:
 * This file contains the functionality for the Navbar.
 *
 * AUTHOR: Pau Ferrer @ Minimal Designs
 * CREATED AT: 06/03/2023
 * LAST UPDATE: 06/03/2023
 */
// DOM ELEMENTS ////////////////
const nav = document.querySelector('[data-component="nav"]');
const burger = nav.querySelector('[data-element="burger"]');
const menu = nav.querySelector('[data-element="menu"]');

// FUNCTIONS ////////////////

// Toggles CSS classes to create open menu animation
const openNavMenu = function () {
  menu.classList.toggle("opened");
  [...burger.children].forEach((line) => line.classList.toggle("opened"));
};

// EVENTS ////////////////

// Click event to trigger the open menu animation
nav.addEventListener("click", (e) => {
  e.preventDefault();
  [burger, ...burger.children].forEach((clickable) =>
    e.target === clickable ? openNavMenu() : null
  );
});

// Scroll event to add background to the nav
window.onscroll = function () {
  if (window.scrollY > 0) {
    nav.classList.add("scrolling");
    [...burger.children].forEach((line) => line.classList.add("black"));
    [...menu.children].forEach((link) => link.classList.add("black"));
    nav.children[0].children[3].children[0].classList.add("black");
  } else {
    nav.classList.remove("scrolling");
    [...burger.children].forEach((line) => line.classList.remove("black"));
    [...menu.children].forEach((link) => link.classList.remove("black"));
    nav.children[0].children[3].children[0].classList.remove("black");
  }
};
