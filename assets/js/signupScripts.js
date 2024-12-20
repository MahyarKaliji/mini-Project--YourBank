const closeBtnErr = document.getElementById("closePopUpError");
const errorBox = document.getElementById("error-box");

const showHideBtn = document.querySelector("#show-password");
const showHideReBtn = document.querySelector("#show-re-password");
const passwordInput = document.querySelector(
  'input[data-input-password="password"]'
);
const rePasswordInput = document.querySelector(
  'input[data-input-password="repassword"]'
);

let passwordFlag = false;
let reTypePasswordFlag = false;

function Users(fname, lname, phone, email, password) {
  this.fname = fname;
  this.lname = lname;
  this.phone = phone;
  this.email = email;
  this.password = password;
}

const signUpForm = document.querySelector("#signUp-form");

signUpForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const savedUsers = JSON.parse(localStorage.getItem("signupUsers")) || [];

  let isDuplicate = savedUsers.some((user) => user.email === email);

  if (isDuplicate) {
    duplicateUserError();
  } else {
    savedUsers.push(
      new Users(firstName, lastName, phoneNumber, email, password)
    );
    localStorage.setItem("signupUsers", JSON.stringify(savedUsers));
    showSignupSuccess();
    signUpForm.reset();
    rePasswordInput.parentElement.style.border = "none";
  }
});

// Duplicate Checker

function duplicateUserError() {
  errorBox.classList.remove("hidden");
}

const closeBtns = document.querySelectorAll(".close-btn");
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    closeBtn.parentElement.classList.add("hidden");
  });
});

function showSignupSuccess() {
  document.getElementById("success-box").classList.remove("hidden");
}

showHideBtn.addEventListener("click", () => {
  if (!passwordFlag) {
    passwordInput.type = "text";
    showHideBtn.src = "./assets/images/icons/hidden.svg";
    passwordFlag = true;
  } else {
    passwordInput.type = "password";
    showHideBtn.src = "./assets/images/icons/eye.svg";
    passwordFlag = false;
  }
});

showHideReBtn.addEventListener("click", () => {
  if (!reTypePasswordFlag) {
    rePasswordInput.type = "text";
    showHideReBtn.src = "./assets/images/icons/hidden.svg";
    reTypePasswordFlag = true;
  } else {
    rePasswordInput.type = "password";
    showHideReBtn.src = "./assets/images/icons/eye.svg";
    reTypePasswordFlag = false;
  }
});

// reType Password Checker
rePasswordInput.addEventListener("input", (e) => {
  if (e.target.value !== passwordInput.value) {
    // console.log(e.target.value);
    rePasswordInput.parentElement.style.border = "1px solid red";
  } else {
    rePasswordInput.parentElement.style.border = "1px solid #CAFF33";
  }
});
