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
  computerPick.textContent = result;
  return result;
  console.log(result);
}

function playRound(playerSelection, computerSelection) {
  let roundWinCombo = `${playerSelection}-${computerSelection}`;
  let playerWinCombo = [`Rock-Scissors`, `Scissors-Paper`, `Paper-Rock`];

  if (playerSelection === computerSelection) {
    roundResults.textContent = "Tie!";
    console.log(playerSelection, computerSelection);
  } else if (playerWinCombo.includes(roundWinCombo)) {
    playerScore.textContent = ++playerPoints;
    console.log(playerSelection, computerSelection);
    roundResults.textContent = `${playerSelection} beats ${computerSelection}! You win!`;
  } else {
    computerScore.textContent = ++computerPoints;
    console.log(playerSelection, computerSelection);
    roundResults.textContent = `${computerSelection} beats ${playerSelection}! You lose!`;
  }

  
}

function handleReplay() {
  location.reload();
}

function getPlayerChoice(e) {
  let playerSelection = e.target.id;
  playerPick.textContent = e.target.id;
  playRound(playerSelection, computerPlay());
}

// Event Listeners

replay.addEventListener("click", handleReplay);
selection.forEach(button => button.addEventListener("click", getPlayerChoice));
