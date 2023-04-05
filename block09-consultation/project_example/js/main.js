const buttonShowMenu = document.querySelector("#buttonShowMenu");
const buttonHideMenu = document.querySelector("#buttonHideMenu");

const aside = document.querySelector("#aside");

buttonShowMenu.addEventListener("click", function() {
    aside.classList.remove("hidden");
});

buttonHideMenu.addEventListener("click", function() {
    aside.classList.add("hidden");
});