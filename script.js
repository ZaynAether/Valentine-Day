document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("surpriseButton");
    const surpriseDiv = document.getElementById("surprise");

    button.addEventListener("click", function () {
        surpriseDiv.classList.toggle("hidden"); // Show/hide surprise
    });
});
