// const rocket = document.querySelector(".SLS-rocket");

// window.addEventListener("scroll", () => {
//     const triggerPoint = window.innerHeight * 0.5;
//     if (window.scrollY > triggerPoint) {
//         rocket.classList.add("fly");
//     } else {
//         rocket.classList.remove("fly");
//     }
// });

document.addEventListener("DOMContentLoaded", () => {
    const rocket = document.querySelector(".SLS-rocket");

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        const speed = 0.5;
        const moveY = scrollY * speed;
        rocket.style.transform = `translate(-50%, -${moveY}px)`;
    });
});