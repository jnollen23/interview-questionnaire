/*
Questions are in the questions.js in order to allow that specific block of code to not clutter the main script
*/
/*
    To DO
        -Create High Score Table
        -Do scoring
        -Create questions
        -Do the CSS
 */

selectedQuestionIndexes = GenerateIndexes(20, questions.length);
var currentQuestion;
var questionCount = 1;
var timeout;
var timeLeft = 300;
var score = 0;

function ShowNextQuestion(index) {
    var question = questions[index]
    var questionHTML = CreateQuestion(question.question, question.answers, question.questionID, AnswerClicked);
    var bodyBlock = document.getElementById("questions");

    if (currentQuestion !== undefined)
        bodyBlock.removeChild(currentQuestion);

    bodyBlock.appendChild(questionHTML);
    currentQuestion = questionHTML;
}

function AnswerClicked(event) {
    event.preventDefault();
    if(questionCount < selectedQuestionIndexes.length)
        ShowNextQuestion(selectedQuestionIndexes[questionCount++]);
    else EndQuiz();
}

function BeginTest(e){
    e.preventDefault();
    timeLeft = 300;
    StartClock();
    document.getElementById('intro').setAttribute('hidden', 'true');
    document.getElementById('questions-area').removeAttribute('hidden');
    ShowNextQuestion(0);
}

function WrongAnswer(){
    clearInterval(timeout);
    timeLeft -= 5;
    ClearClock();
    UpdateClock();
    StartClock();
}

function StartClock(){
    timeout = setInterval(() => {
        if(timeLeft > 0)
            timeLeft--;
        else EndQuiz();
        UpdateClock();
    }, 1000);
}

function EndQuiz(){
    clearInterval(timeout)
    document.getElementById('points-record').innerText = score;
    document.getElementById("questions-area").setAttribute('hidden', 'true');
    document.getElementById("final-scoring").removeAttribute('hidden');
}

function UpdateClock(){
    document.getElementById('clock').innerText = `${Math.floor(timeLeft / 60)}:${timeLeft % 60}`;
}

function ClearClock(){document.getElementById('clock').innerText = "";}

function SaveScore(e){
    e.preventDefault();
    var name = document.getElementById('applicant-name');
    var score = localStorage.getItem(name)
    if(score !== null){
        if(score < this.score)
            localStorage.setItem(name, this.score);
    } 
    else localStorage.setItem(name, this.score);
}

document.getElementById('start-test').addEventListener('click', BeginTest);
document.getElementById('save-score').addEventListener('click', SaveScore)




