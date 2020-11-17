
let entertext = document.getElementById("game-text");

setInterval(function() {
    entertext.style.display = (entertext.style.display == 'none' ? '' : 'none');
}, 500);

// Execute a function when the user releases a key on the keyboard
window.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        window.location = "quest.html";
    }
});
