let Papier = 1;
let Stein = 2;
let Schere = 3;
let playerSelection = prompt("Stein Papier oder Schere?")
let computerSelection=getComputerChoice();

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "Schere";
  } else if (randomNumber === 2) {
    return "Papier";
  } else if (randomNumber === 3) {
    return "Stein";
  }
}


function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Stein" && computerSelection === "Papier") {
    return "Du verlierst Papier schlägt Stein";
  }
  if(playerSelection === "Papier" && computerSelection === "Stein") {
    return "Du gewinnst Papier schlägt Stein";
  }
  if(playerSelection === "Schere" && computerSelection === "Stein") {
    return "Du verlierst Stein schlägt Schere";
  }
  if(playerSelection === "Stein" && computerSelection === "Schere") {
    return "Du gewinnst Stein schlägt Schere";
  }
  if(playerSelection === "Papier" && computerSelection === "Schere") {
    return "Du verlierst Schere schlägt Papier";
  }
  if(playerSelection === "Schere" && computerSelection === "Papier") {
    return "Du gewinnst Schere schlägt Papier";
  }
  if(playerSelection === computerSelection) {
    return "Unentschieden";
  }
}

console.log(playRound());