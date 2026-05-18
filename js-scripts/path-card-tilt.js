document.addEventListener("DOMContentLoaded", () => {
    const path = document.querySelector(".path");
    if (!path) return; // graceful fallback

    path.addEventListener("mousemove", (e) => {
        const rect = path.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;
        path.style.transform = `
        translateX(50px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        `;
    });

    path.addEventListener("mouseleave", () => {
        path.style.transform = "translateX(50px) rotateX(0) rotateY(0)";
    });
});
