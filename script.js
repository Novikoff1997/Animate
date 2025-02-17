"use strict";

const firstUnit = document.querySelector(".first-unit");
const text = document.querySelector(".second-text");
const button = document.querySelector(".start-button");
const buttonReset = document.querySelector(".reset");

let active = false;
let count = 0;
let count2 = 0;
let idInterval;

const animate = () => {
  count++;
  idInterval = requestAnimationFrame(animate);
  if (count <= 50) {
    firstUnit.style.left = `${count}%`;
  } else {
    cancelAnimationFrame(idInterval);
  }
};
const secondAnimate = () => {
  count2++;
  idInterval = requestAnimationFrame(secondAnimate);
  if (count2 <= 40) {
    text.style.fontSize = `${count2}px`;
    text.style.opacity = "1";
  } else {
    cancelAnimationFrame(idInterval);
  }
};

document.addEventListener("click", (event) => {
  if (event.target !== button && event.target !== buttonReset) {
    if (active) {
      cancelAnimationFrame(idInterval);
      active = false;
    } else {
      idInterval = requestAnimationFrame(animate);
      active = true;
    }
  }
});

button.addEventListener("click", (event) => {
  if (active) {
    idInterval = requestAnimationFrame(secondAnimate);
    active = false;
  } else {
    cancelAnimationFrame(idInterval);
    active = true;
  }
});

buttonReset.addEventListener("click", () => {
  active = false;
  count = 0;
  count2 = 0;
  firstUnit.removeAttribute("style");
  text.removeAttribute("style");
  cancelAnimationFrame(idInterval);
});
