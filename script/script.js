let body = document.querySelector('body');

let menuBurger = document.querySelector('.menu_burger');
menuBurger.addEventListener('click', function () {
    let menu = document.querySelector('.menu');
    let body = document.querySelector('body');
    body.classList.toggle('lock');
    menuBurger.classList.toggle('active');
    menu.classList.toggle('active');
})