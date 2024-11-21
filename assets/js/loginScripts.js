const showHideBtn = document.querySelector("#show-password");
const passwordInput = document.querySelector(
  'input[data-input-password="password"]'
);
const userEmail = document.querySelector('input[type="email"]');

const loginForm = document.querySelector("#login-form");

// Show/Hide password
showHideBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showHideBtn.src = "http://127.0.0.1:5501/assets/images/icons/hidden.svg";
  } else {
    passwordInput.type = "password";
    showHideBtn.src = "http://127.0.0.1:5501/assets/images/icons/eye.svg";
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const savedUsers = JSON.parse(localStorage.getItem("signupUsers"));
  let emailIsExist = savedUsers.some(
    (user) =>
      user.email === userEmail.value && user.password === passwordInput.value
  );
  if (!emailIsExist) incorrectUser();
  else {
    const userInfo = savedUsers.filter(
      (user) => user.email === userEmail.value
    )[0];
    showLoginSuccess(userInfo);

    loginForm.reset();
  }
});

const closeBtns = document.querySelectorAll(".close-btn");
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    closeBtn.parentElement.classList.add("hidden");
  });
});

function showLoginSuccess(u) {
  
  const loginBox = document.querySelector("#login-text");
  loginBox.innerText = `Dear ${u.fname} ${u.lname}, welcome to your panel.`;
  loginBox.parentElement.classList.remove("hidden");
  
}

function incorrectUser() {
  document.querySelector("#error-box").classList.remove("hidden");
}
