const questions = [
  "Are you a robot 🤖?",
  "Are you a ninja cat 🐱‍👤?",
  "Are you a dog 🐶?",
  "Are you a frog 🐸?",
];
const answers = [false, true, false, false];

let questionIndex = 0;
let correctAnswer = answers[questionIndex];

const myQuestion = document.querySelector(".question");
myQuestion.textContent = questions[questionIndex];

function setNewQuestion() {
  questionIndex += 1;
  correctAnswer = answers[questionIndex];
  myQuestion.textContent = questions[questionIndex];
}

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
