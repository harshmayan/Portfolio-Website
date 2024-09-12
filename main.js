/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // ass a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

//toggle functionality


const themeSwitch = document.getElementById('theme-switch');

// Get all sections in the page
const sections = document.querySelectorAll('section');

themeSwitch.addEventListener('change', () => {
    // Check if the switch is toggled on
    if (themeSwitch.checked) {
        // Change background colors or other styles for all sections when the light is "on"
        document.body.style.backgroundColor = '#1c1f2e'; // Example dark blue background

        // Loop through each section and change background
        sections.forEach(section => {
            section.style.backgroundColor = '#1a1a2e'; // Blue background for all sections
        });
    } else {
        // Revert to original background color when light is "off"
        document.body.style.backgroundColor = '#333'; // Original color

        // Loop through each section and reset background
        sections.forEach(section => {
            section.style.backgroundColor = '#333'; // Reset to original color for all sections
        });
    }
});





