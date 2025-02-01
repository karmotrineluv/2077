document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-icon");
  const menu = document.querySelector(".menu-links");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("open");
    hamburger.classList.toggle("open");
  });
});
