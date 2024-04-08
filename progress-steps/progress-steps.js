"use strict";

// Selectors
const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prev-button");
const nextBtn = document.getElementById("next-button");
const circles = document.querySelectorAll(".circle");

// Variables
const maxActive = circles.length;
let currentActive = 1;

// Functions

const update = function () {
  progress.style.width = `${((currentActive - 1) / (maxActive - 1)) * 100}%`;
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
};

const goToNextStep = function () {
  currentActive++;
  if (currentActive === maxActive) {
    nextBtn.disabled = true;
  }
  if (currentActive > 1) {
    prevBtn.disabled = false;
  }
  console.log(currentActive);
  update();
};

const goToPrevStep = function () {
  currentActive--;
  if (currentActive === 1) {
    prevBtn.disabled = true;
  }
  if (currentActive < maxActive) {
    nextBtn.disabled = false;
  }
  console.log(currentActive);
  update();
};

// Event Listeners
prevBtn.addEventListener("click", goToPrevStep);
nextBtn.addEventListener("click", goToNextStep);
