
// Import audio toggling code from index.js

let ambienceAudio = document.getElementById("ambience");
let entertext = document.getElementById("quest-continue");

// Grab the document text render areas (title and form)
let questTitle = document.getElementById("quest-title");
let questForm = document.getElementById("quest-form");

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

// Flicker enter text
setInterval(function() {
    entertext.style.display = (entertext.style.display == 'none' ? '' : 'none');
}, 750);

// Read the user input from the console

// Which quest the player is on
let questNumber = 0;

// Titles of the quest chapters (kinda hard coded lol)
titles =  ["Chapte 0: Introduction", "Chapter 1: RNG!!!", "Chapter 2: Input Required", "Chapter 3: Hmm... Decisions", "Chapter 4: Trial and Error", "Chapter 5: Playtest"],
// Corresponding chapter text of the quest chapters
chapters = [
    "Greetings brave traveller! Welcome to Runestone: Gloom Celebrities, the #4 rated fantasy RPG game on the iOS free to play fantasy RPG section! I am Grandorf, the level 4 mage NPC, and I see that you come here to seek the Chaos Emerald! A brave soul you are indeed! The Chaos Emerald is hidden behind a vast labyrinth, guarded by a safe with a security pin nearly impossible to crack. You, brave traveller, need to reverse-engineer the safe algorithm in order to retrieve this Chaos Emerald. We’ve talked enough, let us begin!",
    "Your first quest is to complete the code simulating the safe’s random number generator. Generate a random integer between 1 and 100 using the follow code: (random.randint(1,101)); store it in a variable called random_safe",
    "Your next quest is to take an input from the user. In the same program as the previous line, store the user input in a variable called player_guess",
    "Excellent! Now, print out whether the user guess is greater than, less than, or equal to, the randomly generated number",
    "Final step: have the user have 5 guesses (hint: use a for loop). If the player guesses the correct number, output: Success! Chaos Emerald obtained! If not, output Needs to be bigger, or, Needs to be smaller, for each case. If the player fails all cases, output Game over",
    "Now let's get to cracking! Test out your code a few times and feel free to add a story to it!!!"
]

window.addEventListener("keyup", function(event) {
    // Event 13 is the "enter" key on the keyboard
    if (event.keyCode === 13 && questNumber <= 5) {
        // Increment the level
        questNumber++;
        renderQuest();
    }
});

function renderQuest () {
    questTitle.innerHTML = "";
    questForm.innerHTML = "";
    questTitle.innerHTML = titles[questNumber];
    questForm.innerHTML = chapters[questNumber];
}

// Render the intro text (questNumber = 0)
renderQuest();