document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".download_button").addEventListener("click", async () => {
        const response = await fetch("https://raw.githubusercontent.com/OriginalKitCat/Artemis-Site/main/poster/poster.pdf");
        const blob = await response.blob();

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = "poster.pdf";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    });
});
