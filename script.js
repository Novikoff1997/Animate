"use strict";

const firstUnit = document.querySelector(".first-unit");
const text = document.querySelector(".second-text");
const button = document.querySelector(".start-button");
const buttonReset = document.querySelector(".reset");

let active = false;
let active2 = false;
let count = 0;
let count2 = 0;
let idInterval;
let idInterval2;

const firstAnimate = () => {
  count++;
  idInterval = requestAnimationFrame(firstAnimate);
  if (count <= 50) {
    firstUnit.style.left = `${count}%`;
  } else {
    cancelAnimationFrame(idInterval);
  }
};
const secondfirstAnimate = () => {
  count2++;
  idInterval2 = requestAnimationFrame(secondfirstAnimate);
  if (count2 <= 40) {
    text.style.fontSize = `${count2}px`;
    text.style.opacity = "1";
  } else {
    cancelAnimationFrame(idInterval2);
  }
};

document.addEventListener("click", (event) => {
  if (event.target !== button && event.target !== buttonReset) {
    if (active) {
      cancelAnimationFrame(idInterval);
      active = false;
    } else {
      idInterval = requestAnimationFrame(firstAnimate);
      active = true;
    }
  }
});

button.addEventListener("click", () => {
  if (active2) {
    cancelAnimationFrame(idInterval2);
    active2 = false;
  } else {
    idInterval2 = requestAnimationFrame(secondfirstAnimate);
    active2 = true;
  }
});

buttonReset.addEventListener("click", () => {
  active = false;
  active2 = false;

  count = 0;
  count2 = 0;
  firstUnit.removeAttribute("style");
  text.removeAttribute("style");
  cancelAnimationFrame(idInterval);
  cancelAnimationFrame(idInterval2);
});
