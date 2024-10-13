const correctAnswer = "4";

function checkAnswer() {
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

   if (!userAnswer) {
        document.getElementById('feedback').textContent = "Please select an answer.";
        return;
    }

   if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);
