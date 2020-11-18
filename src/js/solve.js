
// Import audio toggling code from index.js

let ambienceAudio = document.getElementById("ambience");

let first = true;

function togglePause() {
    if(ambienceAudio.paused && ambienceAudio.currentTime > 0 && !ambienceAudio.ended) {
        ambienceAudio.play();
    } else {
        ambienceAudio.pause();
    }
}

// Execute a function when the user releases a key on the keyboard
window.addEventListener("keyup", function(event) {
    // Event 77 is the "m" key on the keyboard
    if (event.keyCode === 77) {
        if (first) {
            ambienceAudio.play();
            first = !first;
        } else {
            togglePause();
        }
    }
});

// Read the user input from the console

