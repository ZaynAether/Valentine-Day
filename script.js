document.getElementById("myButton").addEventListener("click", function() {
    const surpriseDiv = document.getElementById("surpriseMessage");
    surpriseDiv.textContent = "You're the peanut butter to my jelly! ❤️";
    surpriseDiv.classList.remove("hidden");
});
