// declaring seconds variable and conncting it to element with id= timer
var seconds = document.getElementById("timer");

// adding an eventlistener to listen for clicks of selectors with start class
document.querySelector(".start").addEventListener("click", () => {
    startQuiz();
});

// adding an eventlistener to listen for clicks of selectors with start class
document.querySelector(".stop").addEventListener("click", () => {
    stopQuiz();
});

// base time 
var seconds = 60;
var score = 0;
var trialNum = 0;

var questionCount =-1;
var questionAttempted = 0;

const questionStorage = [
    {
    question: "Which character is used to indicate an end tag?",
    rightAnswer:"/",
    answerAlt1: "^",
    answerAlt2: "*",
    answerAlt3: "/",
    answerAlt4: "<",
},{
    question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    rightAnswer:"alt",
    answerAlt1: "alt",
    answerAlt2: "longdesc",
    answerAlt3: "src",
    answerAlt4: "title",
},{
    question: "In HTML, onblur and onfocus are:",
    rightAnswer:"Event attributes",
    answerAlt1: "Style attributes",
    answerAlt2: "Event attributes",
    answerAlt3: "HTML elements",
    answerAlt4: "hover elements",
},{
    question: "In HTML, which attribute is used to specify that an input field must be filled out?",
    rightAnswer:"required",
    answerAlt1: "formvalidate",
    answerAlt2: "placeholder",
    answerAlt3: "required",
    answerAlt4: "validate",
},{
    question: "Which input type defines a slider control?",
    rightAnswer:"slider",
    answerAlt1: "range",
    answerAlt2: "controls",
    answerAlt3: "search",
    answerAlt4: "slider",
}    
];

function timer(){
    var timeStart = Date.now();
    var delta = 0;
// creating an interval to count seconds by taking Date.now and subtracting it off start time ever 1000ms. ==> will subtract 1s off. 
    var intervalId = setInterval(function(){
        var second = Date.now() - timeStart;
        Math.floor(seconds / 1000);
        seconds--;
        if(seconds===0){
            clearInterval(intervalId)
        }
        if(seconds<=-1){
            seconds = 60; 
        }
// every second seconds is updated to element with id timer
        seconds.innerHTML = seconds;
        document.getElementById("timer").innerHTML = seconds
},1000)
}

function writeQuestion() {
    questionCount++
    if (questionCount === 5) {
        seconds = 1;
        postGrade(score,questionAttempted);
    } else {
    var newQuestionPosition = questionCount
    console.log(questionCount)

    // creating element for question & appendings 
    var newQuestion = document.createElement("div");
    newQuestion.textContent = questionStorage[newQuestionPosition].question;
    newQuestion.setAttribute("class","q");
    document.getElementById("quiz-question-container").appendChild(newQuestion);

// to create elements for questions & answers & appending 
        var newAnswer = document.createElement("div");
        newAnswer.textContent = questionStorage[newQuestionPosition].answerAlt1;
        console.log(questionStorage[newQuestionPosition].answerAlt1);
        newAnswer.setAttribute("class","answer");
        newAnswer.setAttribute("id","q");
        document.getElementById("quiz-question-container").appendChild(newAnswer);

        var newAnswer = document.createElement("div");
        newAnswer.textContent = questionStorage[newQuestionPosition].answerAlt2;
        console.log(questionStorage[newQuestionPosition].answerAlt2);
        newAnswer.setAttribute("class","answer");
        newAnswer.setAttribute("id","q");
        document.getElementById("quiz-question-container").appendChild(newAnswer);

        var newAnswer = document.createElement("div");
        newAnswer.textContent = questionStorage[newQuestionPosition].answerAlt3;
        console.log(questionStorage[newQuestionPosition].answerAlt3);
        newAnswer.setAttribute("class","answer");
        newAnswer.setAttribute("id","q");
        document.getElementById("quiz-question-container").appendChild(newAnswer);

        var newAnswer = document.createElement("div");
        newAnswer.textContent = questionStorage[newQuestionPosition].answerAlt4;
        console.log(questionStorage[newQuestionPosition].answerAlt4);
        newAnswer.setAttribute("class","answer");
        newAnswer.setAttribute("id","q");
        document.getElementById("quiz-question-container").appendChild(newAnswer);

        document.querySelectorAll(".answer").forEach((answer) => {
            answer.addEventListener("click", (evt) => {
              if (
                evt.currentTarget.innerText === questionStorage[newQuestionPosition].rightAnswer) {
                    score++;
                    questionAttempted++;
                    console.log(`Answer Saved - Right! ${score}/${questionAttempted}`);
                    writeQuestion();
                }
                else {
                    questionAttempted++;
                    console.log(`Answer Saved - Wrong! ${score}/${questionAttempted}`);
                    writeQuestion();
                }
            })

        })
     }
        
}

function startQuiz() {
    writeQuestion();
    timer();
}

function saveanswer() {
    console.log("Answer Saved");
    writeQuestion();
}

function stopQuiz() {
    seconds = 1;
    postGrade(score,questionAttempted);
}

function postGrade(score, questionAttempted) {
    trialNum++
    var finalScore = `${score}/${questionAttempted}`;

    var newUserAttempt = document.createElement("p");
    newUserAttempt.setAttribute("id","trialNumber");
    newUserAttempt.textContent = `Trial Number ${trialNum}`;
    document.getElementById("pleaderboards").appendChild(newUserAttempt);

    var newScoreAttempt = document.createElement("p");
    newScoreAttempt.setAttribute("id","score");
    newScoreAttempt.textContent = finalScore;
    document.getElementById("pleaderboards").appendChild(newScoreAttempt);

    var resetButton = document.createElement("button");
    resetButton.setAttribute('class','resetbutton');
    resetButton.textContent = "reset";
    document.getElementById("buttons").appendChild(resetButton);

    document.querySelector(".resetbutton").addEventListener("click", () => {
        resetQuiz();
    });
}

function resetQuiz() {
    seconds = 60;
    questionAttempted = 0;
    score = 0;

    const removeanswers = document.getElementsByClassName("answer");
    while(removeanswers.length > 0){
        removeanswers[0].parentNode.removeChild(removeanswers[0]);
    }
    const removequestions = document.getElementsByClassName("q");
    while(removequestions.length > 0){
        removequestions[0].parentNode.removeChild(removequestions[0]);
    }
    const removeresetbuttom = document.getElementsByClassName("resetbutton");
    while(removeresetbuttom.length > 0){
        removeresetbuttom[0].parentNode.removeChild(removeresetbuttom[0]);
    }
}





