// ********************************************************
// >>>>>>>>>>>>>>>>>>>>    Variables   <<<<<<<<<<<<<<<<<<<<
// ********************************************************
const htmlTag = document.querySelector("html");
const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");
const menuUl = document.querySelector("#menuUl");

const darkThemeButton = document.querySelector("#darkTheme");
const themeImg = document.querySelector("#themeImg");
let isMenuActive = false;

const nextButton = document.querySelector("#next-arrow-btn");
const prevButton = document.querySelector("#prev-arrow-btn");
const nextSwiperButton = document.querySelector("#next-btn");
const prevSwiperButton = document.querySelector("#prev-btn");
const slideCount = document.querySelectorAll(".swiper-slide").length;
const slideWidth = document.querySelector(".swiper-slide").clientWidth;
let currentIndex = 0;

const buttons = document.querySelectorAll("#tabs label");



// \Variables

// *************************************************************
// >>>>>>>>>>>>>>>>>>>>    Event Listener   <<<<<<<<<<<<<<<<<<<<
// *************************************************************

// Hamburger Button
menuButton.addEventListener("click", function () {
  if (!isMenuActive) {
    showMenu();
  } else {
    hideMenu();
  }
});
// \Hamburger Button

// Close Menu When Clicked on Screen
document.addEventListener("click", function (event) {
  const isClickInside =
    menuUl.contains(event.target) || menuButton.contains(event.target);

  if (!isClickInside) {
    hideMenu();
  }
});
// \Close Menu When Clicked on Screen

// Dark Theme
darkThemeButton.addEventListener("click", function () {
  let currentTheme = htmlTag.className;
  let newTheme = currentTheme === "light" ? "dark" : "light";

  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});

// Check the theme that saved on localStorage
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light"; // Default theme = 'light'
  applyTheme(savedTheme);
});

let variable;
// Swiper - Testimonials
const testimonialsSwiper = new Swiper(".testimonials-swiper.swiper", {
  direction: "horizontal",
  spaceBetween: 10,
  slidesPerView: 1,
  allowTouchMove: false,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Slider Buttons

nextButton.addEventListener("click", function () {
  nextSwiperButton.click();

  variable = testimonialsSwiper.params.slidesPerView;

  if (currentIndex < slideCount - variable) currentIndex++;
  if (currentIndex === slideCount - variable) {
    nextButton.children[0].style.opacity = 0.2;
    nextButton.style.cursor = "default";
  }
  if (currentIndex !== slideCount - variable) {
    prevButton.children[0].style.opacity = 1;
    prevButton.style.cursor = "pointer";
  }
});

prevButton.addEventListener("click", function () {
  prevSwiperButton.click();

  if (currentIndex > 0) currentIndex--;
  if (currentIndex === 0) {
    prevButton.children[0].style.opacity = 0.2;
    prevButton.style.cursor = "default";
  }
  if (currentIndex !== 0) {
    nextButton.children[0].style.opacity = 1;
    nextButton.style.cursor = "pointer";
  }
});

// Tabs

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const contents = [...document.querySelector("#contents").children];
    contents.forEach((content) => content.classList.remove("block"));
    contents.forEach((content) => content.classList.add("hidden"));

    const targetTab = btn.getAttribute("data-button");

    document.querySelector(`#${targetTab}`).classList.add("block");
    document.querySelector(`#${targetTab}`).classList.remove("hidden");
  });
});

// ********************************************************
// >>>>>>>>>>>>>>>>>>>>    Functions   <<<<<<<<<<<<<<<<<<<<
// ********************************************************

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

// Set theme from localStorage
function applyTheme(theme) {
  htmlTag.className = theme;
  themeImg.src =
    theme === "light"
      ? "assets/images/icons/light-mode.svg"
      : "assets/images/icons/dark-mode.svg";
}

// ****************************************************
// >>>>>>>>>>>>>>>>>>>>    Tests   <<<<<<<<<<<<<<<<<<<<
// ****************************************************

// const signUp = document.getElementById("sign-up");
// const loginForm = document.getElementById("login-form");

// signUp.addEventListener('click', () => {
//   loginForm.classList.add('hidden');
// })

/*
// Slider Buttons

const slideCount = document.querySelectorAll(
  ".testimonials-swiper .swiper-slide"
).length;
let currentIndex = 1;
const sliderBtns = Array.from(
  document.querySelector("#arrow-container").children
);
sliderBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const sliderMethod = btn.getAttribute("data-slide");
    const btnClicked = document.querySelector(`#${sliderMethod}`);
    btnClicked.click();
    if (currentIndex >= 0 && currentIndex < slideCount)
      sliderMethod === "next-btn" ? currentIndex++ : currentIndex--;
    if (currentIndex == 0) {
      console.log("btn:",btn.firstChild);
      console.log(typeof (sliderBtns[0]));
      btn.classList.add('opacity-50');          
    }
    console.log("curent index", currentIndex);
    // console.log("btn", sliderMethod);
  });
});
*/

// const users = [];
// users.push(new Users('test', 'test', 'test', 'test', 'test'));
// localStorage.setItem("signupUsers", JSON.stringify(users));

// localStorage.setItem("signupUsers", JSON.stringify(users));

