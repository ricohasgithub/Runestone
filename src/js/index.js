
let entertext = document.getElementById("game-text");
let ambienceAudio = document.getElementById("ambience");

let first = true;

function togglePause() {
    if(ambienceAudio.paused && ambienceAudio.currentTime > 0 && !ambienceAudio.ended) {
        ambienceAudio.play();
    } else {
        ambienceAudio.pause();
    }
}

setInterval(function() {
    entertext.style.display = (entertext.style.display == 'none' ? '' : 'none');
}, 500);

// Execute a function when the user releases a key on the keyboard
window.addEventListener("keyup", function(event) {
    // Event 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        window.location = "quest.html";
    } else if (event.keyCode === 77) {
        if (first) {
            ambienceAudio.play();
            first = !first;
        } else {
            togglePause();
        }
    }
});
