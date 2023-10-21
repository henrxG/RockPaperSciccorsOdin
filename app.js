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
    return "Du verlierst Papier schlägt Stein";
  }
  if(playerSelection === "Paper" && computerSelection === "Rock") {
    return "Du gewinnst Papier schlägt Stein";
  }
  if(playerSelection === "Scissors" && computerSelection === "Rock") {
    return "Du verlierst Stein schlägt Schere";
  }
  if(playerSelection === "Rock" && computerSelection === "Scissors") {
    return "Du gewinnst Stein schlägt Schere";
  }
  if(playerSelection === "Paper" && computerSelection === "Scissors") {
    return "Du verlierst Schere schlägt Papier";
  }
  if(playerSelection === "Scissors" && computerSelection === "Paper") {
    return "Du gewinnst Schere schlägt Papier";
  }
  if(playerSelection === computerSelection) {
    return "Unentschieden";
  }
}

console.log(playRound());