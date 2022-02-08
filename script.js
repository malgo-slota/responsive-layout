const hamburger = document.querySelector(".nav-toggle");
const navContent = document.querySelector(".nav-content");

hamburger.addEventListener("click", () => {
    navContent.classList.toggle("nav-content--visible");
})