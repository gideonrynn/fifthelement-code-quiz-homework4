//* Store your questions as an array of objects in a separate file, `questions.js`, that follows this format: ```js//

var questions = [
  {
    title: "The Fifth Element was written by _______.",
    choices: ["John Stamos", "Luc Besson", "Sting", "Maggie Smith"],
    answer: "Luc Besson"
  },
  {
    title: "Ruby Rhod is played by ________.",
    choices: ["Bruce Willis", "Chris Tucker", "Gary Oldman", "Milla Jovovich"],
    answer: "Chris Tucker"
  },
  {
    title: "Zorg's full name is ________.",
    choices: ["Jean Zorg", "Baptiste Zorg", "Jean Baptiste Emmanuel Zorg", "Gary Zorg"],
    answer: "Jean Baptiste Emmanuel Zorg"
  },
  {
    title: "The fifth element is _______.",
    choices: ["love", "water", "earth", "wind"],
    answer: "love"
  },
  {
    title: "Milla Jovovich was __ years old when she landed the role of this movie.",
    choices: ["19", "21", "33", "80"],
    answer: "19"
  }
];

//Set variables that will be updated by JavaScript through timer and click events

var timer = document.querySelector("#seconds");
var progressUpdate = document.getElementById("progress");

//may not need this
var timeRemaining = "0";

var choicesList = document.querySelector("#choices-list");
var starterSection = document.querySelector(".starter");
var titlePlaceholder = document.querySelector(".title");

//Starts off as zero. This will be logged into localStorage so that the user can view high scores at a later date. The timer #seconds will pull into here as well
var score = "0";

//this is the question object/array we are currently on
var currentQuestion = "0";

var userSelection = "";

//variables that store clicks from the user

function displayQuestions() {

  var question = questions[currentQuestion];
  titlePlaceholder.innerHTML = questions[currentQuestion]["title"];

  for (var i = 0; i < questions[currentQuestion]["choices"].length; i++) {
    var li = document.createElement("li");
    

    var button = document.createElement("button");
    button.textContent = questions[currentQuestion]["choices"][i];
    li.setAttribute("data-choice", i);

    choicesList.appendChild(li); 
    li.appendChild(button);
  }

}

//Timer Script (remember to rename these variables and whatnot)
function setTime() {

  //var timeRemaining was created globally
  timeRemaining = "5";

  var timerInterval = setInterval(function() {
    timeRemaining--;
    timer.textContent = timeRemaining;

    if(timeRemaining === 0) {
      clearInterval(timerInterval);
      sendTimeIsUp();
    }

  }, 1000);

  displayQuestions()
}

function sendTimeIsUp() {
  timer.textContent = "0";

  var timeIsUp = document.createElement("h5");
  timeIsUp.innerHTML = ("<hr>" + "Time is up!");
  progressUpdate.appendChild(timeIsUp);

}


function hideStart() {
  starterSection.setAttribute('style', 'display:none');
}


startquizbtn.addEventListener("click", setTime);
startquizbtn.addEventListener("click", hideStart);

//End Timer Script

//Object Script



