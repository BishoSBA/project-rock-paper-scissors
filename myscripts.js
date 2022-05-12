const plays = ["rock", "paper", "scissors"];

function computerPlay() {
    return plays[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (!playerSelection in plays) {
        return console.error("Invalid Entry");
    }

    if (playerSelection == computerSelection) {
        return "You tied!"
    }
    else if (playerSelection == "rock") {
        if(computerSelection == "paper") {
            return "You Lose! Paper beats Rock"
        }
        else {
            return "You Win! Rock beats Scissors"
        }
    }
    else {
        if(computerSelection == "paper") {
            return "You Win! Scissors beats Paper"
        }
        else {
            return "You Lose! Rock beats Scissors"
        }
    }
}

let computerSelection = computerPlay();
let playerSelection = "rock";

console.log(playRound(playerSelection, computerSelection));