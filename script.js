const button = document.body.querySelector(".button");
button.addEventListener("click", () => {
    document.body.querySelector("nav").classList.toggle("nav-js");
    document.body.querySelector(".line-1").classList.toggle("line-1-js");
    document.body.querySelector(".line-2").classList.toggle("line-2-js");
    document.body.querySelector(".line-3").classList.toggle("line-3-js");
    document.body.querySelector(".line-4").classList.toggle("line-4-js");
});