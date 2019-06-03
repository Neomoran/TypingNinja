//When the browser window immediadely loads run init() fx
window.addEventListener("load", init);
//level of gameplay as an object
let levels = {
  superEasy: 10, //10 seconds
  easy: 5, //5 seconds
  medium: 3, //3 seconds
  hard: 2 //3 seconds
};
//Change levels
let currentLevel = levels.superEasy;
//Switching to next levels
/*
let currentLevel = levels.easy;
let currentLevel = levels.medium;
let currentLevel = levels.hard;
*/

//Global variables
let time = 5; //Time starts counting at 5 seconds when game is not being played yet
let score = 0; //Initial score before game starts
let isPlaying;

//DOM elements
const wordInput = document.querySelector("#word-input"); //Grab the input element for typing the displayed words
const currentWord = document.querySelector("#current-word"); //Current word to be displayed always 'Africa'
const scoreDisplay = document.querySelector("#score"); //Grab the span element with id 'score'
const timeDisplay = document.querySelector("#time"); //Grab the span element with id 'time'
const message = document.querySelector("#message"); //Grab the h4 element after input to display message
const seconds = document.querySelector("#seconds"); //Grab the p with span to display level in seconds

//Array with names of Countries to be displayed as items
const words = [
  "Nigeria",
  "Kenya",
  "Botswana",
  "Namibia",
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
  "Central African Republic",
  "Benin",
  "Libya"
];

//The init function, when window opens, it fires up.
function init() {
  seconds.innerHTML = currentLevel; //Displays # of seconds of the current level on the UI
  showWord(words); //Calls the  showWord fx to load random word from const words passed as a parameter
  wordInput.addEventListener("input", startMatch); //start matching wordInput value using startmatch()
  setInterval(countdown, 1000); //calling the countdown() every second

  //check game status, if game is on or over
  setInterval(checkStatus, 500);
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

//Matches currentword from the array to the word input by the player
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "<i class='fas fa-smile fa-3x'></>"; //if it matches, a smile icon pops up
    message.style.color = "yellowgreen"; //
    return true;
  } else {
    message.innerHTML = "<i class='fas fa-frown fa-3x'></>"; //If it does not match, show frown icon
    message.style.color = "orange";
    return false;
  }
}

//The showWard fx that shows random word from const word array
function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length); //Pulls a random index from the array const words
  currentWord.innerHTML = words[randIndex]; //Display the random word on the ui
}

//count down timer fx
function countdown() {
  //make sure time is not run out
  if (time > 0) {
    //decrement
    time--;
  } else if (time === 0) {
    //game ends
    isPlaying = false; //And the player isn't playing
  }
  timeDisplay.innerHTML = time; //show the time on the ui
}

//check game status fx
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game over!!";
    message.style.color = "yellowgreen";
    score = -1;
  }
}
