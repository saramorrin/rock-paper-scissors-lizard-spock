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
  playerScore++;
  playerScore.innerHTML = playerScore;
  computerScore.innerHTML = computerScore;
  message.innerHTML = playerChoice + "beats" + computerChoice + " you win! ";
 
}

function lose() {
  console.log("lose");
}

function draw() {
  console.log("draw");
}

/**
   * The main game function, generate random choices
   */

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
  
/** 
 * Add event listener for each choice
 */

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
  

  

  




// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


