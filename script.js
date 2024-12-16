const mobileMenu = document.querySelector(".mobile-menu");
const navBar = document.querySelector(".nav-bar");

let menuOpener = mobileMenu.addEventListener("click", () => {
    navBar.classList.toggle("active")
    document.body.classList.toggle("hidden")
});

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});