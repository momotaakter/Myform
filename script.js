document.addEventListener("DOMContentLoaded", function () {
    const navigateButton = document.getElementById("navigateButton");
    const backButton = document.getElementById("backButton");

    if (navigateButton) {
        navigateButton.addEventListener("click", function () {
            window.location.href = "rejistarPage.html";
        });
    }

    if (backButton) {
        backButton.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }
});




