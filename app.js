let Paper = 1;
let Rock = 2;
let Scissors = 3;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return Scissors;
  } else if (randomNumber === 2) {
    return Paper;
  } else if (randomNumber === 3) {
    return Rock;
  }
}
const playerSelection = "rock";
  const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
    if(playerSelection ===1 && computerSelection === 1){
      return "Unentschieden";
    } else if (playerSelection === 1 && computerSelection === 2){
      return "Du hast gewonnen";
    } else if (playerSelection === 1 && computerSelection === 3){
      return "Du hast verloren";
    } else if (playerSelection === 2 && computerSelection === 1){
      return "Du hast verloren";
    } else if (playerSelection === 2 && computerSelection === 2){
      return "Unentschieden";
    } else if (playerSelection === 2 && computerSelection === 3){
      return "Du hast gewonnen";
    } else if (playerSelection === 3 && computerSelection === 1){
      return "Du hast gewonnen";
    } else if (playerSelection === 3 && computerSelection === 2){
      return "Du hast verloren";
    } else if (playerSelection === 3 && computerSelection === 3){
      return "Unentschieden";
    }
  }
  console.log(playRound);