const menu = document.querySelector(".header__mobile-menu");
const nav = document.querySelector(".navbar__container");
const list = document.querySelector(".header__navbarList");

menu.addEventListener("click", () =>{
    menu.classList.toggle("active");
    nav.classList.toggle("active");
});

nav.addEventListener("click", () =>{
    menu.classList.toggle("active");
    nav.classList.toggle("active");
});