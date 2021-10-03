/** Declare constants for DOM elements and possible choices */

const message = document.getElementById("results-message");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");

/** 
 * Add event listener for each choice
 */


  rock.addEventListener('click', function() {
    console.log("hey");
  })

  paper.addEventListener('click', function() {
    console.log("hey");  
  })

  scissors.addEventListener('click', function() {
    console.log("hey");
  })

  lizard.addEventListener('click', function() {
    console.log("hey");
  })

  spock.addEventListener('click', function() {
    console.log("hey");
  })
  

  /**
   * The main game function, generate random choices
   */

  




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


