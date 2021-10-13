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
  document.body.removeChild(document.querySelector(".correct"));
  if (questionIndex < questions.length) {
    correctAnswer = answers[questionIndex];
    myQuestion.textContent = questions[questionIndex];
    updateProgress();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  document.body.removeChild(document.querySelector(".question-card"));
  const finishElement = document.createElement("p");
  finishElement.textContent = "Yay you made it 🎉";
  document.body.append(finishElement);
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
  setTimeout(setNewQuestion, 2000);
}

function disableButtons() {
  yesButton.disabled = true;
  noButton.disabled = true;
}
