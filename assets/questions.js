//Questions stored as an array of objects. New questions can be added here for display on quiz by adding another object
var questions = [
  {
    title: "The Fifth Element was written by _______.",
    choices: ["John Stamos", "Luc Besson", "Sting", "Maggie Smith"],
    answer: "Luc Besson"
  },
  {
    title: "Ruby Rhod (character) is played by which actor/actress?",
    choices: ["Bruce Willis", "Chris Tucker", "Gary Oldman", "Milla Jovovich"],
    answer: "Chris Tucker"
  },
  {
    title: "Zorg's full name is ________.",
    choices: ["Jean Zorg", "Baptiste Zorg", "Jean Baptiste Emmanuel Zorg", "Gary Zorg"],
    answer: "Jean Baptiste Emmanuel Zorg"
  },
  {
    title: "'Sir, are you classified as human?'",
    choices: ["Yes.", "It's nice to see you again, Father.", "Negative, I am a meat popsicle.", "Anyone else want to negotiate?"],
    answer: "Negative, I am a meat popsicle."
  },
  {
    title: "Milla Jovovich was __ years old when she landed the role of Leloo.",
    choices: ["19", "21", "33", "80"],
    answer: "19"
  },
  {
    title: "The fifth element is _______.",
    choices: ["love", "water", "earth", "wind"],
    answer: "love"
  },
];

//Set variables that will be updated by JavaScript through timer and click events

var timer = document.querySelector("#seconds");
var timeRemaining = "0";

//will be updated with progress text at different stages of the quiz
var progressUpdate = document.getElementById("progress");
var progressSection = document.querySelector(".progressSection");

//create variables for divs/ids
var choicesList = document.querySelector("#choices-list");
var starterSection = document.querySelector(".starter");
var titlePlaceholder = document.querySelector(".title");
var quizComponents = document.querySelector(".quiz-components")
var highScoresSection = document.querySelector(".high-scores");
var closerSection = document.querySelector(".closer");
var holderSpot = document.querySelector(".holder");
var newInitials = document.querySelector("#newinitials");

//will display on quiz complete page and be logged into localStorage so that the user can view high scores at a later date.
var userScore = document.querySelector("#user-score");

//question object/array we are currently on
var currentQuestion = "0";

//didn't get this to work for local storage as a part of addToLocalStorage function
var savedHighScores = JSON.parse(localStorage.getItem("savedHighScores"))|| [];
console.log(savedHighScores);


//All Functions

//decrement time from 100 once Start Quiz button is clicked. update timer div in html from timeRemaining
function runTimer() {

  timeRemaining = "100";

  var timerInterval = setInterval(function() {
    timeRemaining--;
    timer.textContent = timeRemaining;

    if (currentQuestion <= questions.length) {
    
  }

    if(timeRemaining === 0) {
      clearInterval(timerInterval);
      timer.textContent = "0";
      progressUpdate.innerHTML = ("Time is up!");
    }

  }, 1000);

}

//
function displayQuestions() {

  starterSection.setAttribute('style', 'display:none');

  //set variable for the "current question" that we are on in the questions object. current question number will be updated in chooseAnswer function
  var question = questions[currentQuestion];
  var currentQTitle = questions[currentQuestion].title;

  titlePlaceholder.innerHTML = currentQTitle;
  choicesList.innerHTML = "";

  //create for loop that will run through each choice string in the object
  for (var i = 0; i < question.choices.length; i++) {

      //set variables for new li(s) and current set of answers 
      var li = document.createElement("li");
      var currentAnsList = questions[currentQuestion].choices[i];

      //set text and current id to answer as unique identifier for comparison
      li.textContent = currentAnsList;
      li.setAttribute("id", currentAnsList);

      //append to list
      choicesList.append(li); 
      }
}

function chooseAnswer() {
  
  var choiceClicked = event.target.id;
  var li = document.querySelectorAll(li);
  var currentAns = questions[currentQuestion].answer;

  //if the li clicked has an id that matches the current answer, indicate the answer is correct and add 15 to timeRemaining/score - else subtract 15. in both cases, move on to the next question (+1)
  if (choiceClicked === currentAns) {
    progressUpdate.innerHTML = "Correct! +15 points";
    timeRemaining = timeRemaining + 15;
    currentQuestion = +currentQuestion + 1;
} 
  else {
    progressUpdate.innerHTML = "Wrong! -15 points";
    timeRemaining = timeRemaining - 15;
    currentQuestion = +currentQuestion + 1;
  }
  
  //if the current question count is more than the number of questions in the array, show the quiz complete section - else continue with quiz by going to the next question

  if (currentQuestion >= questions.length) {
    showFinalScore();
  }
    else {
    displayQuestions();
    }
  
}


//hide quiz and progress sections, display quiz complete section, final score and input for user to add initials
function showFinalScore() {

  quizComponents.setAttribute("style", "display:none");
  progressSection.setAttribute("style", "display:none")

  closerSection.setAttribute("style", "");

  userScore.innerHTML = timeRemaining;

}

//return array of stored values in local storage and display on page
function viewAllScores () {

  highScoresSection.setAttribute("style", "");
  closerSection.setAttribute("style", "display:none");

  holderSpot.innerHTML = savedHighScores;
}

//**didn't get this to work for local storage
//get user initials (input), and current user score, and add to local storage as an array, add each total score object to the existing array
function addToLocalStorage () {

  var userCurrentName = newInitials.value;
  var userCurrentScore = userScore.innerHTML;

  var totalscore = {
    score: userCurrentScore, 
    name: userCurrentName
  }
 
  savedHighScores.push(totalscore);
  console.log(savedHighScores);

  localStorage.setItem("scoresupdate", savedHighScores);

  viewAllScores();

}

function clearScores () {
  localStorage.clear(savedHighScores);
}

//kick off timer and hide the starter div with click events connected to the Start Button
startquizbtn.addEventListener("click", runTimer);
startquizbtn.addEventListener("click", displayQuestions);
choicesList.addEventListener("click", chooseAnswer);
submitbtn.addEventListener("click", addToLocalStorage);
clearbtn.addEventListener("click", clearScores);
viewhighscores.addEventListener("click", viewAllScores);




