
//FUNCTION THAT RETURNS RANDOM SELECTION OF ROCK PAPER SCISSORS
function getComputerChoice() {
  //VARIABLE TO STORE RANDOM NUMBER FROM 1 TO 3
  const CHOICE = Math.floor(Math.random() * 3) + 1;

  //RETURN STRING DEPENDING ON THE RANDOM NUMBER ROCK IF 1, PAPER IF 2 AND SCISSORS IF 3
  if (CHOICE === 1) {
    return "ROCK";
  } else if (CHOICE === 2) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

//FUNCTION THAT GETS THE PLAYER CHOICE 
function getPlayerChoice() {
  //VARIABLE TO STORE USER INPUT
  const CHOICE = prompt('Enter your round: (rock, paper, scissors)', '');

  //MAKE USER INPUT UPPERCASE TO MAKE COMPARISON EASIER
  const convertedChoice = CHOICE.toUpperCase();

  //RETURN THE PLAYER CHOICE TO CONVERTED UPPERCASE
  return convertedChoice;
}

//FUNCTION FOR COMPARING THE PLAYER AND COMPUTER CHOICE 
function playRound(playerSelection, computerSelection) {
  
  //VARIABLE TO HOLD THE PLAYER CHOICE, COMPUTER CHOICE AND THE RESULT
  let player = 0;
  let computer = 0;
  let result = "";

  //CONVERT PLAYER CHOICE TO NUMBER TO MAKE EASIER COMPARISON
  if (playerSelection === 'ROCK') {
    player = 1;
  } else if (playerSelection === 'PAPER') {
    player = 2;
  } else if (playerSelection === 'SCISSORS') {
    player = 3;
  }

  //CONVERT COMPUTER CHOICE TO NUMBER TO MAKE COMPARISON EASIER
  if (computerSelection === 'ROCK') {
    computer = 1;
  } else if (computerSelection === 'PAPER') {
    computer = 2;
  } else if (computerSelection === 'SCISSORS') {
    computer = 3;
  }

  //COMPARE THE PLAYER AND COMPUTER CHOICE 
  if (player === 1) {
    if (computer === 1) {
      result = "It's a draw! Rock is equal to Rock";
    } else if (computer === 2) {
      result = "You lose! Paper beats Rock";
    } else if (computer === 3) {
      result = "You win! Rock beats Scissors";
    }
  } else if (player === 2) {
    if (computer === 1) {
      result = "You win! Paper beats Rock";
    } else if (computer === 2) {
      result = "It's a draw! Paper is equal to Paper";
    } else if (computer === 3) {
      result = "You lose! Scissors beats Paper";
    }
  } else if (player === 3) {
    if (computer === 1) {
      result = "You lose! Rock beats Scissors";
    } else if (computer === 2) {
      result = "You win! Scissors beats Paper";
    } else if (computer === 3) {
      result = "It's a draw! Scissors is equal to Scissors";
    }
  }

  //RETURN THE RESULT
  return result;
}

//FUNCTION TO MAKE THE GAME 5 ROUNDS 
function game() {

  //VARIABLE TO HOLD RESULT CHECKER GAME RESULT, PLAYER SCORE, AND COMPUTER SCORE
  let result = "";
  let gameResult = "";
  let playerScore = 0;
  let computerScore = 0;

  //PLAY THE GAME 5 TIMES
  //FIRST GAME
  result = playRound(getPlayerChoice(), getComputerChoice());
  if (result.includes('win')) {
    console.log(result);
    playerScore += 1;
    console.log('Your Score: ' + playerScore + ' \nEnemy Score: ' + computerScore);
  } else {
    console.log(result);
    computerScore += 1;
    console.log('Your Score: ' + playerScore + ' \nEnemy Score: ' + computerScore);
  }

  //SECOND GAME
  result = playRound(getPlayerChoice(), getComputerChoice());
  if (result.includes('win')) {
    console.log(result);
    playerScore += 1;
    console.log('Your Score: ' + playerScore + ' \nEnemy Score: ' + computerScore);
  } else {
    console.log(result);
    computerScore += 1;
    console.log('Your Score: ' + playerScore + ' \nEnemy Score: ' + computerScore);
  }

  //THIRD GAME
  result = playRound(getPlayerChoice(), getComputerChoice());
  if (result.includes('win')) {
    console.log(result);
    playerScore += 1;
    console.log('Your Score: ' + playerScore + ' \nEnemy Score: ' + computerScore);
  } else {
    console.log(result);
    computerScore += 1;
    console.log('Your Score: ' + playerScore + ' \nEnemy Score: ' + computerScore);
  }

  //FOURTH GAME
  result = playRound(getPlayerChoice(), getComputerChoice());
  if (result.includes('win')) {
    console.log(result);
    playerScore += 1;
    console.log('Your Score: ' + playerScore + ' \nEnemy Score: ' + computerScore);
  } else {
    console.log(result);
    computerScore += 1;
    console.log('Your Score: ' + playerScore + ' \nEnemy Score: ' + computerScore);
  }

  //FIFTH GAME
  result = playRound(getPlayerChoice(), getComputerChoice());
  if (result.includes('win')) {
    console.log(result);
    playerScore += 1;
    console.log('Your Score: ' + playerScore + ' \nEnemy Score: ' + computerScore);
  } else {
    console.log(result);
    computerScore += 1;
    console.log('Your Score: ' + playerScore + ' \nEnemy Score: ' + computerScore);
  }
  


  //COMPARE THE SCORE
  if (playerScore > computerScore) {
    gameResult = "You win! Very good!";
  } else {
    gameResult = "You lose! Not very good!";
  }

  return gameResult;
}


//PRINTS THE GAME RESULT
console.log(game());




//alert(getPlayerChoice());
//alert(getComputerChoice());