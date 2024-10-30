const htmlTag = document.querySelector("html");
const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");
const menuUl = document.querySelector("#menuUl");
const darkThemeButton = document.querySelector("#darkTheme");
const themeImg = document.querySelector("#themeImg");
let isMenuActive = false;

// Hamburger Button
menuButton.addEventListener("click", function () {
  // menuUl.classList.toggle("-translate-y-full");
  // menuUl.classList.toggle("hidden");
  // console.log("hamburger");
  if (!isMenuActive) {
    showMenu();
  } else {
    hideMenu();
  }
});

//
document.addEventListener("click", function (event) {
  const isClickInside =
    menuUl.contains(event.target) || menuButton.contains(event.target);

  if (!isClickInside) {
    hideMenu();
  }
});

// Dark Theme
darkThemeButton.addEventListener("click", function () {
  // document.querySelector("html").classList.toggle("dark");

  let currentTheme = htmlTag.className;
  let newTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);

//   if (
//     themeImg.src != "http://127.0.0.1:5500/assets/images/icons/dark-mode.svg"
//   ) {
//     themeImg.src = "http://127.0.0.1:5500/assets/images/icons/dark-mode.svg";
//   } else {
//     themeImg.src = "http://127.0.0.1:5500/assets/images/icons/light-mode.svg";
//   }
});

// Set theme from localStorage
function applyTheme(theme) {
  htmlTag.className = theme;
  themeImg.src =
    theme === "light"
      ? "http://127.0.0.1:5500/assets/images/icons/light-mode.svg"
      : "http://127.0.0.1:5500/assets/images/icons/dark-mode.svg";
}

// Check the theme that saved on localStorage
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light"; // Default theme = 'light'
  applyTheme(savedTheme);
});

// Functions

function showMenu() {
  menuUl.classList.remove("hidden");

  setTimeout(function () {
    menuUl.classList.remove("-translate-y-full");
  }, 100);

  isMenuActive = true;
}

function hideMenu() {
  menuUl.classList.add("-translate-y-full");
  setTimeout(function () {
    menuUl.classList.add("hidden");
  }, 400);

  isMenuActive = false;
}