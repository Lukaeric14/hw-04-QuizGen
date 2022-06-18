// declaring seconds variable and conncting it to element with id= timer
var seconds = document.getElementById("timer");

// adding an eventlistener to listen for clicks of selectors with start class
document.querySelector(".start").addEventListener("click", () => {
    startQuiz();
    timer();
});

// adding an eventlistener to listen for clicks of selectors with start class
document.querySelector(".stop").addEventListener("click", () => {
    stopQuiz();
});
// base time 
var seconds = 60;
var score = 0;
var userName;


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

var questionCount =-1;
var questionAttempted = 0;

var questionStorage = [
    {
    question: "this is my first question",
    rightAnswer:"this is the correct answer",
    answerAlt1: "this is the wrong answer",
    answerAlt2: "this is the wrong answer",
    answerAlt3: "this is the wrong answer",
    answerAlt4: "this is the correct answer",
},{
    question: "this is my second question",
    rightAnswer:"this is the correct answer",
    answerAlt1: "this is the correct answer",
    answerAlt2: "this is the wrong answer",
    answerAlt3: "this is the wrong answer",
    answerAlt4: "this is the wrong answer",
},{
    question: "this is my third question",
    rightAnswer:"this is the correct answer",
    answerAlt1: "this is the correct answer",
    answerAlt2: "this is the wrong answer",
    answerAlt3: "this is the wrong answer",
    answerAlt4: "this is the wrong answer",
},{
    question: "this is my fourth question",
    rightAnswer:"this is the correct answer",
    answerAlt1: "this is the wrong answer",
    answerAlt2: "this is the wrong answer",
    answerAlt3: "this is the correct answer",
    answerAlt2: "this is the wrong answer",
},{
    question: "this is my fifth question",
    rightAnswer:"this is the correct answer",
    answerAlt1: "this is the wrong answer",
    answerAlt2: "this is the correct answer",
    answerAlt3: "this is the wrong answer",
    answerAlt4: "this is the wrong answer",
}    
];

function writeQuestion() {
    questionCount++
    if (questionCount === 5) {
        alert("Quiz is finished");
        postGrade(score,questionAttempted);
    } else {
    var newQuestionPosition = questionCount
    console.log(questionCount)

    // creating element for question & appendings 
    var newQuestion = document.createElement("div");
    newQuestion.textContent = questionStorage[newQuestionPosition].question;
    document.body.appendChild(newQuestion);

// to create elements for questions & answers & appending 
        var newAnswer = document.createElement("div");
        newAnswer.textContent = questionStorage[newQuestionPosition].answerAlt1;
        console.log(questionStorage[newQuestionPosition].answerAlt1);
        newAnswer.setAttribute("class","answer");
        document.body.appendChild(newAnswer);

        var newAnswer = document.createElement("div");
        newAnswer.textContent = questionStorage[newQuestionPosition].answerAlt2;
        console.log(questionStorage[newQuestionPosition].answerAlt2);
        newAnswer.setAttribute("class","answer");
        document.body.appendChild(newAnswer);

        var newAnswer = document.createElement("div");
        newAnswer.textContent = questionStorage[newQuestionPosition].answerAlt3;
        console.log(questionStorage[newQuestionPosition].answerAlt3);
        newAnswer.setAttribute("class","answer");
        document.body.appendChild(newAnswer);

        var newAnswer = document.createElement("div");
        newAnswer.textContent = questionStorage[newQuestionPosition].answerAlt4;
        console.log(questionStorage[newQuestionPosition].answerAlt4);
        newAnswer.setAttribute("class","answer");
        document.body.appendChild(newAnswer);

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

    function nextQuestion() {
        writeQuestion();
}
}

function saveanswer() {
    
    console.log("Answer Saved");
    writeQuestion();
}

function postGrade(score, questionAttempted) {
    console.log("attempted to run");
    var finalScore = score/questionAttempted;
    var finalScoreH3 = "hello"
    document.createElement("h3");
    document.getElementById("leaderboards").appendChild(finalScoreH3);
    finalScoreP.textContent = 'username';
    var finalScoreP = "p";
    document.createElement("p");
    document.getElementById("leaderboards").appendChild(finalScoreP);
    finalScoreP.textContent = finalScore;

}

function stopQuiz() {
    seconds = 1;
    postGrade(score,questionAttempted);
}



