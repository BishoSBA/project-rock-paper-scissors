const plays = ["rock", "paper", "scissors"];
let playerSelection, computerSelection;

//Chooses a random option between Rock, Paper and Scissors
function computerPlay() {
    return plays[Math.floor(Math.random()*3)];
}

//Completes a round of Rock-Paper-Scissors between the player and the computer
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    do {
        playerSelection = prompt("Choose between: Rock, Paper, Scissors").toLowerCase();
    } while (!plays.includes(playerSelection));

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

function game() {
    let roundResult = "";
    let computerWinCount = 0;
    let playerWinCount = 0;

    for(let i = 0;i < 5; i++) {
        roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult[4] == "W");
        if (roundResult[4] == "W") {
            playerWinCount++;
        } else if (roundResult[4] == "L") {
            computerWinCount++;
        } else 
    
        console.log(roundResult);
    }
    if (playerWinCount > computerWinCount) {
        console.log(`Congratz! You Won!`);
    } else if(computerWinCount > playerWinCount) {
        console.log(`You lost, Hard luck`);
    } else {
        console.log(`The game was a Tie`);
    }
}

game();