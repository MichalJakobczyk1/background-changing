import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

const button1 = document.querySelector(".main__button--1");
const button2 = document.querySelector(".main__button--2");
const button3 = document.querySelector(".main__button--3");
const button4 = document.querySelector(".main__button--4");
const body = document.querySelector(".body");

button1.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--background",
    "url(/src/assets/img/photo-1.jpg)"
  );
});

button2.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--background",
    "url(/src/assets/img/photo-2.jpg)"
  );
});

button3.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--background",
    "url(/src/assets/img/photo-3.jpg)"
  );
});

button4.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--background",
    "url(/src/assets/img/photo-4.jpg)"
  );
});
