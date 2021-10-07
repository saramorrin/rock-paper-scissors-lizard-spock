/** Declare constants for DOM elements and possible choices */

const message = document.getElementById("results-message");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");

/** Display results */

/** main game function to generate random computer choice */

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  const randomNumber = Math.floor(Math.random() * 5);
  return choices[randomNumber];
}

/** win function called when player has gained point */

function win(playerChoice, computerChoice) {
  let playerScoreValue = parseInt(playerScore.innerHTML) + 1;
  playerScore.innerHTML = playerScoreValue;
  message.innerHTML = playerChoice + " beats " + computerChoice + " you win! "
  playerImage.src = `assets/images/${playerChoice}-result.png`
  computerImage.src = `assets/images/${computerChoice}-result.png`;
  checkWinner();
 
}

/** lose function called when computer has gained point */

function lose(playerChoice, computerChoice) {
  let computerScoreValue = parseInt(computerScore.innerHTML) + 1;
  computerScore.innerHTML = computerScoreValue;
  message.innerHTML = playerChoice + " loses to " + computerChoice + " you lose! "
  playerImage.src = `assets/images/${playerChoice}-result.png`
  computerImage.src = `assets/images/${computerChoice}-result.png`;
  checkWinner();
}

/** draw function called when no points are gained */

function draw(playerChoice, computerChoice) {
  
  message.innerHTML = playerChoice + " equals " + computerChoice + " it's a draw! "
  playerImage.src = `assets/images/${playerChoice}-result.png`
  computerImage.src = `assets/images/${computerChoice}-result.png`;
  checkWinner();
}

/** check winner function is called after first to reach 5 points */

function checkWinner() {
  let playerScoreValue = parseInt(playerScore.innerHTML);
  let computerScoreValue = parseInt(computerScore.innerHTML);
  if (playerScoreValue === 5 || computerScoreValue === 5) {
    const winner = 
      playerScoreValue === 5
      ? "You win the game! Congratulations!"
      : "Computer wins the game! Try again next time!";
    alert(winner);
    return true;
  }
  return false;
}

/** reset game function after 5 points and winner has been declared */

compareInputs(playerChoice,computerChoice);
updateScore();
if (checkWinner()) {
  playerScoreValue = computerScoreValue = 0;
  updateScore();
}


/** The main game function, generate random choices */

function game(playerChoice) {
  const computerChoice = getComputerChoice();
  switch (playerChoice + computerChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
    case "rocklizard":
    case "lizardspock":
    case "spockscissors":
    case "scissorslizard":
    case "lizardpaper":
    case "paperspock":
    case "spockrock":
      win(playerChoice, computerChoice);
      break;
    case "scissorsrock":
    case "paperscissors":
    case "rockpaper":
    case "lizardrock":
    case "spocklizard":
    case "scissorsspock":
    case "lizardscissors":
    case "paperlizard":
    case "spockpaper":
    case "rockspock":
      lose(playerChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
    case "lizardlizard":
    case "spockspock":
      draw(playerChoice, computerChoice);
      break;
    
  }
  
/** add event listener for each possible choice */

}
function main() {
  rock.addEventListener('click', function() {
    game("rock");
  })

  paper.addEventListener('click', function() {
    game("paper");  
  })

  scissors.addEventListener('click', function() {
    game("scissors");
  })

  lizard.addEventListener('click', function() {
    game("lizard");
  })


  spock.addEventListener('click', function() {
    game("spock");
  })
}

  main();
  
/** the how to play modal */


var instructionModal = document.getElementById("myModal");

var instructionBtn = document.getElementById("myBtn");

var instructionSpan = document.getElementsByClassName("close")[0];

instructionBtn.onclick = function() {
  instructionModal.style.display = "block";
}

instructionSpan.onclick = function() {
  instructionModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == instructionModal) {
    instructionModal.style.display = "none";
  }
}

/** get in touch modal */

var getInTouchModal = document.getElementById("contactModal");

var getInTouchBtn = document.getElementById("contactBtn");

var getInTouchSpan = document.getElementsByClassName("close-contact")[0];

getInTouchBtn.onclick = function() {
  getInTouchModal.style.display = "block";
}

getInTouchSpan.onclick = function() {
  getInTouchModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == getInTouchModal) {
    getInTouchModal.style.display = "none";
  }
}


