const randomChoice = ['rock', 'scissors', 'paper']

function getComputerChoice (){
  const choice = randomChoice[Math.floor(Math.random()* randomChoice.length)]
  return choice;
};

getComputerChoice();

function checkWinner(playerSelection, computerSelection){
  if(playerSelection == computerSelection){
    return "Tie"
  }
  else if (
    playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock'
  ){
    return 'Player' ;
  }
  else {
    return 'Computer' ;
  }
};

function playRound(playerSelection, computerSelection){
  const result = checkWinner(playerSelection,computerSelection);

  if(result == 'Tie') {
    return "it's a tie"
  }
  else if (result == 'Player'){
    return `you win! ${playerSelection} beats ${computerSelection}`
  }
  else {
    return `you Loose! ${computerSelection} beats ${playerSelection}`
  }
}

function getHumanChoice (){
  let validateInput = false
  if(validateInput == false) {
    let choice = prompt("rock paper scissor");
    if (choice == null){
      continues;
    }

    let choiceTolowercase = choice.toLowerCase();
    if(randomChoice.includes(choiceTolowercase)){
      validateInput = true;
      return choiceTolowercase
    }
  }
}

function playGame(){
  for(let i=1; i<= 6; i++){

const playerSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
  }
}

playGame()
