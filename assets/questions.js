//All Variables

//Timer Variables

var timer = document.querySelector("#seconds");
var progressUpdate = document.getElementById("progress");
var timeRemaining = "0";

//Object

//do I need this?
var answerButton = document.querySelector("#answer-button");

var starterSection = document.querySelector("starter");

//* Store your questions as an array of objects in a separate file, `questions.js`, that follows this format: ```js//

var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "The statement is ended when you enter the _____",
    choices: ["quotes", "semicolon", "parentheses", "square brackets"],
    answer: "semicolon"
  },
];

var datatypes = questions[0]["choices"];
console.log(datatypes);

//* The length of the array in `questions.js` determines the length of play. Fifteen seconds per question is a good estimate, so 5 questions will result in a length of play of 75 seconds.//


//Timer Script (remember to rename these variables and whatnot)
function setTime() {

  var timeRemaining = "5";

  var timerInterval = setInterval(function() {
    timeRemaining--;
    timer.textContent = timeRemaining;

    if(timeRemaining === 0) {
      clearInterval(timerInterval);
      sendTimeIsUp();
    }

  }, 1000);
}

function sendTimeIsUp() {
  timer.textContent = "0";

  var timeIsUp = document.createElement("h1");
  timeIsUp.innerHTML = "Time is up!";
  progressUpdate.appendChild(timeIsUp);

}

function addChoices() {

  var li = document.createElement("li");
  li.textContent = datatypes;

  //want to button inside of list item//
  answerButton.appendChild(li);
}


startquizbtn.addEventListener("click", setTime);
startquizbtn.addEventListener("click", addChoices);

//End Timer Script

//Object Script



// //doesn't work but maybe come back to

// function hideElement() {
//   var startHidden = starterSection.setAttribute("style", "visibility: hidden;");
//   startHidden.appendChild(starter);

// }

// //doesn't work
// startquizbtn.addEventListener("click", hideElement);
// //doesn't work
// 

