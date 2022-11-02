const menu = document.querySelector(".header__mobile-menu");
const nav = document.querySelector(".navbar__container");
const list = document.querySelectorAll(".header__navbar__text");

menu.addEventListener("click", navActive )

nav.addEventListener("click", navActive )

function navActive () {
    menu.classList.toggle("active");
    nav.classList.toggle("active");
}