//Calling the needed elements from html
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

//making the handburger to display x when clicked and display the menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

//for the hamburger to go off while each list is clicked
document.querySelector(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
