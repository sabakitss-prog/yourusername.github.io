let score = 0;

function checkAnswer(button, correct) {
  if (button.classList.contains("correct") || button.classList.contains("wrong")) {
    return;
  }

  if (correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
  }

  document.getElementById("score").innerText = "Score: " + score;
}
