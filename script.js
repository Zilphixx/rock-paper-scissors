
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



//alert(getPlayerChoice());
//alert(getComputerChoice());