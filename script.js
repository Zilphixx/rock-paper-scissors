function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3) + 1;

  //RETURN STRING DEPENDING ON THE RANDOM NUMBER 
  if (choice === 1) {
    return "ROCK";
  } else if (choice === 2) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function playRound(playerSelection, computerSelection) {
  
  let result = "";

  if (playerSelection === 'ROCK') {
    if (computerSelection === 'ROCK') {
      result = "It's a draw! Rock is equal to Rock";
    } else if (computerSelection === 'PAPER') {
      result = "You lose! Paper beats Rock";
    } else if (computerSelection === 'SCISSORS') {
      result = "You win! Rock beats Scissors";
    }
  } else if (playerSelection === 'PAPER') {
    if (computerSelection === 'ROCK') {
      result = "You win! Paper beats Rock";
    } else if (computerSelection === 'PAPER') {
      result = "It's a draw! Paper is equal to Paper";
    } else if (computerSelection === 'SCISSORS') {
      result = "You lose! Scissors beats Paper";
    }
  } else if (playerSelection === 'SCISSORS') {
    if (computerSelection === 'ROCK') {
      result = "You lose! Rock beats Scissors";
    } else if (computerSelection === 'PAPER') {
      result = "You win! Scissors beats Paper";
    } else if (computerSelection === 'SCISSORS') {
      result = "It's a draw! Scissors is equal to Scissors";
    }
  }

  return result;
}


const yourScore = document.querySelector("#your-score");
const enemyScore = document.querySelector("#enemy-score");
const buttons = document.querySelectorAll("button");
const resultContainer = document.querySelector(".result");
const text = document.createElement("p");

let result = "";
let playerScore = 0;
let computerScore = 0;
let gameResult = "";

yourScore.textContent += playerScore;
enemyScore.textContent += computerScore;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    result = playRound(button.textContent, getComputerChoice());
    if (result.includes("win")) {
      text.textContent = result; 
      resultContainer.appendChild(text);
      playerScore += 1;
      yourScore.textContent = `Your score: ${playerScore}`;
      scoreChecking();
    } else {
      text.textContent = result; 
      resultContainer.appendChild(text);
      computerScore += 1;
      enemyScore.textContent = `Enemy score: ${computerScore}`;
      scoreChecking();
    }

  });
});

function scoreChecking() {

  const tryAgain = document.createElement("button");
  tryAgain.textContent = "Try Again";

  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      text.textContent = "You win! Congratulations!";
      resultContainer.appendChild(text);
      resultContainer.appendChild(tryAgain);
      tryAgain.addEventListener("click", () => {
        location.reload();
      });
      buttons.forEach((button) => {
        button.disabled = true;
      });
    } else {
      text.textContent = "You lose! Better luck next time.";
      resultContainer.appendChild(text);
      resultContainer.appendChild(tryAgain);
      tryAgain.addEventListener("click", () => {
        location.reload();
      });
      buttons.forEach((button) => {
        button.disabled = true;
      });
    }
  } 
}
