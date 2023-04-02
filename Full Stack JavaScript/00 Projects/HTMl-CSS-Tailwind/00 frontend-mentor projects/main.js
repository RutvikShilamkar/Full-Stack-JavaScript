const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const primaryHeader = document.querySelector(".primary-header");
const navItem = document.querySelector(".navigate")

navToggle.addEventListener("click",()=>{
    primaryNav.hasAttribute("data-visible")? navToggle.setAttribute("aria-expanded", false) : navToggle.setAttribute("aria-expanded", true);

    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
});

navItem.onclick() = function() {
    navToggle.click();
}