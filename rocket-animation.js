const rocket = document.querySelector(".SLS-rocket");

window.addEventListener("scroll", () => {
    const triggerPoint = window.innerHeight * 0.5;
    if (window.scrollY > triggerPoint) {
        rocket.classList.add("fly");
    } else {
        rocket.classList.remove("fly");
    }
});
