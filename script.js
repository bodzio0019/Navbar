const button = document.body.querySelector(".button");
button.addEventListener("click", () => {
    document.body.querySelector("nav").classList.toggle("nav-js");
});