import "./style.scss";

// Variables
const selection = document.querySelectorAll(".choice");
const replay = document.querySelector("#replay");
const roundResults = document.querySelector(".round-results");
const playerScore = document.querySelector("#player-score");
const playerPick = document.querySelector(".player--choice");
const computerScore = document.querySelector("#computer-score");
const computerPick = document.querySelector(".computer--choice");

let computerChoices = ["Rock", "Paper", "Scissors"];
let playerPoints = 0;
let computerPoints = 0;
let playerChoice;

// Functions

function computerPlay() {
  let result =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return result;
}


function handleReplay() {
  location.reload();
}

function getPlayerChoice(e) {
  let playerSelection = e.target.id;
  playerChoice = e.target.textContent;
}

// Event Listeners

replay.addEventListener("click", handleReplay);
selection.forEach(button => button.addEventListener("click", getPlayerChoice));
