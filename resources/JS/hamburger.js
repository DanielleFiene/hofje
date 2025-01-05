// Get the hamburger icon and menu
const hamburger = document.querySelector('.nav__hamburger');
const menu = document.querySelector('.nav__menu');

// Add event listener for the hamburger click
hamburger.addEventListener('click', () => {
    menu.classList.toggle('open'); // Toggle the open class on the menu
});
