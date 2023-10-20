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
console.log(getComputerChoice());