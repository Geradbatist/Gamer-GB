document.addEventListener("DOMContentLoaded", function () {
    const loginTab = document.getElementById("loginTab");
    const signupTab = document.getElementById("signupTab");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
  
    loginTab.addEventListener("click", function (e) {
      e.preventDefault();
      loginForm.classList.add("active");
      signupForm.classList.remove("active");
      loginTab.classList.add("active");
      signupTab.classList.remove("active");
    });
  
    signupTab.addEventListener("click", function (e) {
      e.preventDefault();
      signupForm.classList.add("active");
      loginForm.classList.remove("active");
      signupTab.classList.add("active");
      loginTab.classList.remove("active");
    });
  });
  