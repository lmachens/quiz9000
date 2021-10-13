const questions = [
  {
    question: "Are you a robot 🤖?",
    answer: false,
  },
  {
    question: "Are you a ninja cat 🐱‍👤?",
    answer: true,
  },
  {
    question: "Are you a dog 🐶?",
    answer: false,
  },
  {
    question: "Are you a frog 🐸?",
    answer: false,
  },
  {
    question: "Are you a camel 🐫?",
    answer: true,
  },
  {
    question: "Are you a clown 🤡?",
    answer: true,
  },
];

let questionIndex = 0;
let correctAnswer = questions[questionIndex].answer;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = questions[questionIndex].question;
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
    correctAnswer = questions[questionIndex].answer;
    myQuestion.textContent = questions[questionIndex].question;
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

function createMyElement(tagName, properties) {
  const element = document.createElement(tagName);
  element.className = properties.className;
  element.textContent = properties.textContent;
  return element;
}

function printAnswerIsIncorrect() {
  document.body.append(
    createMyElement("p", {
      className: "incorrect",
      textContent: "Your answer is incorrect 😭",
    })
  );
  disableButtons();
}

function printAnswerIsCorrect() {
  const p = createMyElement("p", {
    className: "correct",
    textContent: "Your answer is correct 😁",
  });

  document.body.append(p);
  setTimeout(setNewQuestion, 2000);
}

function disableButtons() {
  yesButton.disabled = true;
  noButton.disabled = true;
}
