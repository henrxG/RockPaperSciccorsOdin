let Paper = 1;
let Rock = 2;
let Scissors = 3;
let playerSelection = prompt("Rock, Paper or Scissors?")
let computerSelection=getComputerChoice();

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "Scissors";
  } else if (randomNumber === 2) {
    return "Paper";
  } else if (randomNumber === 3) {
    return "Rock";
  }
}


function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You lose! Paper beats Rock";
  }
}

console.log(playRound());