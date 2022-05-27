const plays = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;
let roundResult;
let computerWinCount = 0;
let playerWinCount = 0;
let gameLength = 5;

//Chooses a random option between Rock, Paper and Scissors
function computerPlay() {
	return plays[Math.floor(Math.random() * 3)];
}

//Adds event listener to all weapon options
const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
	btn.addEventListener("click", function () {
		playerSelection = btn.value;
		game();
	});
});

//Selects html parts to be updated
const divRoundResult = document.querySelector(".round-result");
const spanPlayerWinCount = document.querySelector("#playerWinCount");
const spanComputerWinCount = document.querySelector("#computerWinCount");

//Completes a round of Rock-Paper-Scissors between the player and the computer
function playRound(playerSelection, computerSelection) {
	computerSelection = computerPlay();

	if (playerSelection == computerSelection) {
		return "You tied!";
	} else if (playerSelection == "rock") {
		if (computerSelection == "scissors") {
			playerWinCount++;
			return "You Win! Rock beats Scissors";
		} else if (computerSelection == "paper") {
			computerWinCount++;
			return "You Lose! Paper beats Rock";
		}
	} else if (playerSelection == "paper") {
		if (computerSelection == "rock") {
			playerWinCount++;
			return "You Win! Paper beats Rock";
		} else if (computerSelection == "scissors") {
			computerWinCount++;
			return "You Lose! Scissors beats Rock";
		}
	} else if (playerSelection == "scissors") {
		if (computerSelection == "paper") {
			playerWinCount++;
			return "You Win! Scissors beats Paper";
		} else if (computerSelection == "rock") {
			computerWinCount++;
			return "You Lose! Rock beats Scissors";
		}
	}
}

function checkWinner() {
	if (playerWinCount >= gameLength || computerWinCount >= gameLength) {
		return true;
	} else return false;
}

function game() {
	roundResult = playRound(playerSelection, computerSelection);
	divRoundResult.textContent = roundResult;
	spanComputerWinCount.textContent = computerWinCount;
	spanPlayerWinCount.textContent = playerWinCount;

	if (checkWinner()) {
		if (playerWinCount == 5) {
			roundResult = "Congratz! The Player Wins the game!";
		} else if (computerWinCount == 5) {
			roundResult = "The Computer wins the game!";
		}
		divRoundResult.textContent = roundResult;
		playerWinCount = 0;
		computerWinCount = 0;
	}
}
