//* Store your questions as an array of objects in a separate file, `questions.js`, that follows this format: ```js//

var questions = [
  {
    title: "1. The Fifth Element was written by _______",
    choices: ["John Stamos", "Luc Besson", "Sting", "Maggie Smith"],
    answer: "Luc Besson"
  },
  {
    title: "2. Ruby Rhod is played by ________",
    choices: ["Bruce Willis", "Chris Tucker", "Gary Oldman", "Milla Jovovich"],
    answer: "Chris Tucker"
  },
  {
    title: "3. Zorg's middle name is ________",
    choices: ["Jean", "Baptiste", "Emmanuel", "Zorg"],
    answer: "Emmanuel"
  },
  {
    title: "4. The fifth element is _______",
    choices: ["love", "water", "earth", "wind"],
    answer: "love"
  },
  {
    title: "5. Milla Jovovich was __ years old when she landed the role of this movie.",
    choices: ["19", "21", "33", "80"],
    answer: "19"
  }
];

//All Variables

//Timer Variables
var timer = document.querySelector("#seconds");
var progressUpdate = document.getElementById("progress");
var timeRemaining = "0";

//Object Variables
var answerList = document.querySelector("#answer-list");
var starterSection = document.querySelector(".starter");
var titlePlaceholder = document.querySelector(".title");

//Timer Script (remember to rename these variables and whatnot)

function addChoices() {

  for (var i = 0; i < questions.length; i++) {

  var li = document.createElement("li");
  li.textContent = questions[i]["choices"];

  var questionHeader = document.createElement("h5")
  questionHeader.textContent = questions[i]["title"];
  answerList.appendChild(li);
  titlePlaceholder.appendChild(questionHeader);


  }
}

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


function hideStart() {
  starterSection.setAttribute('style', 'display:none');
}


startquizbtn.addEventListener("click", setTime);
startquizbtn.addEventListener("click", hideStart);


//End Timer Script

//Object Script



