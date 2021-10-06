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


function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  const randomNumber = Math.floor(Math.random() * 5);
  return choices[randomNumber];
}

function win(playerChoice, computerChoice) {
  let playerScoreValue = parseInt(playerScore.innerHTML) + 1;
  playerScore.innerHTML = playerScoreValue;
  message.innerHTML = playerChoice + " beats " + computerChoice + " you win! "
  playerImage.src = `assets/images/${playerChoice}-result.png`
  computerImage.src = `assets/images/${computerChoice}-result.png`
 
}

function lose(playerChoice, computerChoice) {
  let computerScoreValue = parseInt(computerScore.innerHTML) + 1;
  computerScore.innerHTML = computerScoreValue;
  message.innerHTML = playerChoice + " loses to " + computerChoice + " you lose! "
  playerImage.src = `assets/images/${playerChoice}-result.png`
  computerImage.src = `assets/images/${computerChoice}-result.png`
}

function draw(playerChoice, computerChoice) {
  
  message.innerHTML = playerChoice + " equals " + computerChoice + " it's a draw! "
  playerImage.src = `assets/images/${playerChoice}-result.png`
  computerImage.src = `assets/images/${computerChoice}-result.png`
}


function checkWinner() {
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
  
/** Add event listener for each choice */

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
  
/** How To Play Modal */


var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/** Get In Touch Modal */


var modal = document.getElementById("contactModal");

var btn = document.getElementById("contactBtn");

var span = document.getElementsByClassName("close-contact")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


