/**
 * order-now.js
 * ----------------
 * DESCRIPTION:
 * description
 *
 * AUTHOR: Pau Ferrer @ Minimal Designs
 * CREATED AT: 08/03/2023
 * LAST UPDATE: 08/03/2023
 */

// ORDER OBJECT ////////////////
const order = {
  burgers: [],
  drinks: [],
};

// DOM Elements ////////////////
const form = document.querySelector('[data-component="order-now-form"]');
const inputs = form.querySelectorAll("input");
const slider = document.querySelector('[data-component="slider"]');
const slides = document.querySelectorAll('[data-element="slide"]');

// SYSTEM VARIABLES ////////////////
const formSteps = [
  "burgers",
  "drinks",
  "customizeOrder",
  "login",
  "checkout",
  "success",
];
let currentSlide = 0;

// FUNCTIONS ////////////////
const setOrderData = function (slide) {
  const step = parseInt(slide.getAttribute("data-form-step"));
  const inputs = slide.querySelectorAll("input");
  inputs.forEach((input) => {
    if (input.checked) {
      const values = input.value.split(", ");
      const item =
        values[0] === "thick-shakes" || values[0] === "sundaes"
          ? {
              name: values[0],
              flavor: values[1],
              qualtity: parseInt(values[2]),
              price: parseFloat(values[3]),
            }
          : {
              name: values[0],
              size: values[1],
              qualtity: parseInt(values[2]),
              price: parseFloat(values[3]),
            };
      order[formSteps[step - 1]].push(item);
    }
  });
  console.log(order); // LOGGER ///////////////////////////////////////////////////////////////
};

const updateOrder = function (slide) {};

const checkout = function (slide) {};

const nextSlide = function () {
  currentSlide++;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${currentSlide}00%)`;
  });
};

// LOGIC ////////////////
slides.forEach((slide) => {
  const next = slide.querySelector("a");
  next.onclick = (e) => {
    e.preventDefault();
    slide.getAttribute("data-form-step") === "1" ||
    slide.getAttribute("data-form-step") === "2"
      ? setOrderData(slide)
      : slide.getAttribute("data-form-step") === "3"
      ? updateOrder(slide)
      : checkout(slide);
    nextSlide();
  };
});
