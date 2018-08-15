window.addEventListener("load", init);

//available levels
let levels = {
  superEasy:10,
  easy: 5,
  medium: 3,
  hard: 2
};
//To change levels
let currentLevel = levels.superEasy;
//Global variables
let time = 5;
let score = 0;
let isPlaying;

//DOM elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "Nigeria",
  "Kenya",
  "Botswana",
  "Morocco",
  "Egypt",
  "Ethiopia",
  "Seychelles",
  "Mozambique",
  "Zanzibar",
  "Djibouti",
  "Uganda",
  "Somalia",
  "Burundi",
  "Malawi",
  "Eritrea",
  "Madagascar",
  "Congo",
  "Cameroon",
  "Algeria",
  "Burkina Faso",
  "Zimbabwe",
  "Sudan",
  "Comoros",
  "Lesotho",
  "Rwanda",
  "Angola",
  "Mali",
  "Tanzania",
  "Chad",
  "South Africa",
  "Zambia",
  "Swaziland",
  "Tunisia",
  "Niger",
  "Sierra Leone",
  "Ivory Coast",
  "Togo",
  "Cape Verde",
  "Benin",
  "Libya"
];

//The init function, when window opens, it fires up.
function init() {
  //show number of seconds in UI
  seconds.innerHTML = currentLevel;

  //load random word from array
  showWord(words);
  //start matching on word input
  wordInput.addEventListener("input", startMatch);
  //call countdown every second
  setInterval(countdown, 1000);

  //check game status, if game is on or over
  setInterval(checkStatus, 50);
}

//start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  //if score is -1 display 0.
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

//Match current word to the word input
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "<i class='fas fa-heart'></>";
    message.style.color = "yellowgreen";
    return true;
  } else {
    message.innerHTML = "<i class='fas fa-thumbs-down'></>";
    message.style.color = "orange";
    return false;
  }
}

//pick and show random word
function showWord(words) {
  //create a random index from the array
  const randIndex = Math.floor(Math.random() * words.length);
  //output the random word
  currentWord.innerHTML = words[randIndex];
}
//count down timer function
function countdown() {
  //make sure time is not run out
  if (time > 0) {
    //decrement
    time--;
  } else if (time === 0) {
    //game is over
    isPlaying = false;
  }
  //show time
  timeDisplay.innerHTML = time;
}
//check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game over!!";
    message.style.color = "yellowgreen";
    score = -1;
  }
}
