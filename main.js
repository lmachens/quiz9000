const correctAnswer = false;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = "Are you a robot 🤖?";

const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === true) {
    alert("This is correct 😁");
  } else {
    alert("This is incorrect 😭");
  }
};

const noButton = document.querySelector(".no");
noButton.onclick = function () {
  if (correctAnswer === false) {
    alert("This is correct 😁");
  } else {
    alert("This is incorrect 😭");
  }
};
