
// Retrieve player number guess
let guess = document.getElementById("player-guess");
let output = document.getElementById("output-area")

// Generate a random number for the player to guess between 1 and 100
let randomNumber = (Math.floor(Math.random() * 100)) + 1;

// Track the number of guesses so far
let guessNumber = 0;
let win = false;

window.addEventListener("keyup", function(event) {

    // Event 13 is the "enter" key on the keyboard
    if (event.keyCode === 13 && guessNumber <= 4) {
        processGuess();
    }

});

// This function reads and casts the integer input of the player and tells you what the result is
function processGuess () {

    // Clear the current output text
    output.innerHTML = "";

    // Read the user guess as an int
    let guessInt = parseInt(guess.value, 10);
    guess.value = "";

    if (guessInt < randomNumber) {
        output.innerHTML = "Needs to be bigger";
    } else if (guessInt > randomNumber) {
        output.innerHTML = "Needs to be smaller";
    } else if (guessInt === randomNumber) {
        output.innerHTML = "Success!";
        win = true;
    }

    // Check to see if the player lost
    if (win === false && guessNumber === 4) {
        output.innerHTML = "";
        output.innerHTML = "Game over";
    }

    guessNumber++;

}