let menu_bar = document.getElementById("menu_bar");
let wrong_bar = document.getElementById("wrong_bar");
let mobile_nav_menu = document.getElementById("mobile_nav_menu");

menu_bar.addEventListener("click", () => {
  mobile_nav_menu.classList.toggle("mobile-nav");
  wrong_bar.classList.toggle("menu-close-icon");
  menu_bar.style.display = "none";
});
wrong_bar.addEventListener("click", () => {
  mobile_nav_menu.classList.toggle("mobile-nav");
  wrong_bar.classList.toggle("menu-close-icon");
  menu_bar.style.display = "block";
});
