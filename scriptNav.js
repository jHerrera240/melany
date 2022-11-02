const menuEmail = document.querySelector('.image-menu-mobile');
const menuId = document.querySelector('#menu-mobile');
const buttonDesktop = document.querySelector('#button-desktop');
const buttonMobile = document.querySelector('#button-mobile');
menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu() {
    let menuIdClassList = menuId.classList.contains('inactive');
    let isDivClass = menuId.getAttribute("class");
    if (menuIdClassList) {
        menuId.setAttribute("class", "desktop-menu")
    } else {
        menuId.setAttribute("class", "desktop-menu inactive")
    }
}
function redirect() {
    window.location.href = "../Formulario/index.html";
}