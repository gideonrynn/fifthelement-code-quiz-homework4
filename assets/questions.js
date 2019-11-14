//All Variables

//Timer Variables

var timer = document.querySelector("#seconds");
var progressUpdate = document.getElementById("progress");
var timeRemaining = "0";

//Object

var answerList = document.querySelector("#answer-list");

var starterSection = document.querySelector(".starter");

var titlePlaceholder = document.querySelector(".title");

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

  addChoices()
}

function sendTimeIsUp() {
  timer.textContent = "0";

  var timeIsUp = document.createElement("h5");
  timeIsUp.innerHTML = ("<hr>" + "Time is up!");
  progressUpdate.appendChild(timeIsUp);

}

function addChoices() {

  for (var i = 0; i < questions[i].choices.length; i++) {

  var li = document.createElement("li");
  li.textContent = questions[i].choices;
  li.setAttribute("data-index", i);

  var questionHeader = document.createElement("h5")
  questionHeader.textContent = questions[i]["title"];
  answerList.appendChild(li);
  titlePlaceholder.appendChild(questionHeader);

  }
}

function hideStart() {
  starterSection.setAttribute('style', 'display:none');
}


startquizbtn.addEventListener("click", setTime);
startquizbtn.addEventListener("click", hideStart);

//End Timer Script

//Object Script



