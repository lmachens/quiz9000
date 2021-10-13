const questions = [
  "Are you a robot 🤖?",
  "Are you a ninja cat 🐱‍👤?",
  "Are you a dog 🐶?",
  "Are you a frog 🐸?",
  "Are you a camel 🐫?",
];
const answers = [false, true, false, false, true];

let questionIndex = 0;
let correctAnswer = answers[questionIndex];

const myQuestion = document.querySelector(".question");
myQuestion.textContent = questions[questionIndex];
updateProgress();

function updateProgress() {
  const progressElement = document.querySelector(".progress");
  // progressElement.textContent = "Question " + (questionIndex + 1) + "/" + questions.length;
  progressElement.textContent = `Question ${questionIndex + 1}/${
    questions.length
  }`;
}

function setNewQuestion() {
  questionIndex += 1;
  correctAnswer = answers[questionIndex];
  myQuestion.textContent = questions[questionIndex];
  updateProgress();
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
