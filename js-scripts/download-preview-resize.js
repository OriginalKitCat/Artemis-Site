document.addEventListener("DOMContentLoaded", () => {
    const img_preview = document.querySelector(".poster");
    if (!img_preview) {
        console.log("Fail (Internal JS FAIL)");
        return;
    }

    img_preview.addEventListener("mouseover", (e) => {
        img_preview.style.transform = "translateY(+100%)";
        console.log("poster_was_hovered")
    });

    img_preview.addEventListener("mouseleave", (e) => {
        img_preview.style.transform = "translate(0, 0)";
        console.log("mouse_left_poster")
    });
});