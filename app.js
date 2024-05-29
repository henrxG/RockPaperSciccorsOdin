let Papier = 1;
let Stein = 2;
let Schere = 3;
let playerSelection;
let computerSelection;
let result;
let playerScore = 0;
let computerScore = 0;

const schere = document.querySelector('#schere');
const papier = document.querySelector('#papier');
const stein = document.querySelector('#stein');

function getComputerChoice() {
  const choices = ['Schere', 'Stein', 'Papier'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Unentschieden";
  } else if (
    (playerSelection === "Schere" && computerSelection === "Papier") ||
    (playerSelection === "Papier" && computerSelection === "Stein") ||
    (playerSelection === "Stein" && computerSelection === "Schere")
  ) {
    playerScore++;
    return "Du gewinnst! " + playerSelection + " schlägt " + computerSelection;
  } else {
    computerScore++;
    return "Du verlierst! " + computerSelection + " schlägt " + playerSelection;
  }
}

function game(playerSelection) {
  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);
  const resultDiv = document.createElement('div');
  resultDiv.textContent = result;
  document.body.appendChild(resultDiv);

  const scoreDiv = document.createElement('div');
  scoreDiv.textContent = `Spieler: ${playerScore}, Computer: ${computerScore}`;
  document.body.appendChild(scoreDiv);

  if (playerScore >= 5) {
    alert("Du hast gewonnen!");
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore >= 5) {
    alert("Der Computer hat gewonnen!");
    playerScore = 0;
    computerScore = 0;
  }
}

schere.addEventListener('click', () => {
    game("Schere");
});

papier.addEventListener('click', () => {
    game("Papier");
});

stein.addEventListener('click', () => {
    game("Stein");
});

game();