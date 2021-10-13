const correctAnswer = false;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = "Are you a robot 🤖?";

const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === true) {
    printAnswerIsCorrect();
  } else {
    printAnswerIsIncorrect();
  }
};

const noButton = document.querySelector(".no");
noButton.onclick = function () {
  if (correctAnswer === false) {
    printAnswerIsCorrect();
  } else {
    printAnswerIsIncorrect();
  }
};

function printAnswerIsIncorrect() {
  const p = document.createElement("p");
  p.className = "incorrect";
  p.textContent = "Your answer is incorrect 😭";
  document.body.append(p);
  disableButtons();
}

function printAnswerIsCorrect() {
  const p = document.createElement("p");
  p.className = "correct";
  p.textContent = "Your answer is correct 😁";
  document.body.append(p);
  setNewQuestion();
}

function disableButtons() {
  yesButton.disabled = true;
  noButton.disabled = true;
}

function setNewQuestion() {
  myQuestion.textContent = "Are you a ninja cat 🐱‍👤?";
}
