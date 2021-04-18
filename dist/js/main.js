// select DOM items
const menuBar = document.querySelector('.menu-bar');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//set initial state of menu

let showMenu = false;
menuBar.addEventListener('click', toggleMenu);
function toggleMenu(){
    if(!showMenu){
        menuBar.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // set menu state
        showMenu = true;
     } else{
        menuBar.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // set menu state
        showMenu = false;
    }
}