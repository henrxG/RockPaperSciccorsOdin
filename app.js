let humanScore = 0;
let computerScore = 0;

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log("Du hast asuwgewählt:", humanChoice);
    console.log("Der COmputer hat asugewählt:", computerChoice);

    if (humanChoice === computerChoice) {
        console.log("Unentschieden!");
    } else if (
        (humanChoice === "stein" && computerChoice === "schere") ||
        (humanChoice === "papier" && computerChoice === "stein") ||
        (humanChoice === "schere" && computerChoice === "papier")
    ) {
        console.log("Du hast gewonnen!");
        humanScore++;
    } else {
        console.log("Der Computer hat gewonnen!");
        computerScore++;
    }
    console.log("Dein score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let input = prompt("Wähle zwischen Schere, Stein und Papier!").toLowerCase();
    return input;
}

playGame();