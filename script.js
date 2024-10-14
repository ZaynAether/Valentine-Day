document.addEventListener("DOMContentLoaded", function () {
    const yesButtons = document.querySelectorAll(".yesBtn");
    const noButtons = document.querySelectorAll(".noBtn");
    const readyButton = document.getElementById("readyBtn");
    const questions = document.querySelectorAll(".question");
    const surpriseDiv = document.getElementById("surprise");

    let currentQuestion = 0;

    function showNextQuestion() {
        questions[currentQuestion].classList.add("hidden");
        currentQuestion++;
        if (currentQuestion < questions.length) {
            questions[currentQuestion].classList.remove("hidden");
        } else {
            surpriseDiv.classList.remove("hidden");
        }
    }

    yesButtons.forEach(button => {
        button.addEventListener("click", showNextQuestion);
    });

    noButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Aww, but let's keep going!");
            showNextQuestion();
        });
    });

    readyButton.addEventListener("click", function () {
        questions[currentQuestion].classList.add("hidden");
        surpriseDiv.classList.remove("hidden");
    });
});
