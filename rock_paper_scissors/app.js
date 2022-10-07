// store options for choices and result from span element by id
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

// all choices - query selector all used as picking out multiple of the same element with different ids. Could have given classname = button and selected by classname (if you are going to add more)
const possibleChoices = document.querySelectorAll("button");

// create userChoice and computerChoice outside of forEach so it can be accessed globally
let userChoice;
let computerChoice;
let result;
// Looping through the button elements, waiting for a click and onclick, changing the userChoice to be equal to the id of the button
possibleChoices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);
// generating computer choice
function generateComputerChoice() {
  // Would really use a switch statement here
  const random = Math.floor(Math.random() * possibleChoices.length) + 1; // (adds readability as index starts at 0); // math.floor rounds down to a random number

  if (random === 1) {
    computerChoice = "rock";
  }

  if (random === 2) {
    computerChoice = "paper";
  }
  if (random === 3) {
    computerChoice = "scissors";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

// get result
function getResult() {
  if (computerChoice === userChoice) {
    result = "Its a draw";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You win!";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "You lose!";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You win!";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "You lose!";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You win!";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "You lose!";
  }

  resultDisplay.innerHTML = result;
}
