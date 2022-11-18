/*
Questions are in the questions.js in order to allow that specific block of code to not clutter the main script
*/
/*
    To DO
        -Create High Score Table - X
        -Do scoring - X
        -Create questions
        -Do the CSS
 */

var questionCount = 20;
var currentQuestion;
var questionIndex = 0;
var timeout;
var timeLeft = 300;
var currentScore = 0;

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
    if(questions[selectedQuestionIndexes[questionIndex]].correctAnswer == event.target.dataset.id){
        currentScore++;
        console.log(currentScore);
    }
    else WrongAnswer();

    questionIndex++;
    if (questionIndex < selectedQuestionIndexes.length){
        ShowNextQuestion(selectedQuestionIndexes[questionIndex]);
    }
    else EndQuiz();
}

function BeginTest(e) {
    e.preventDefault();

    selectedQuestionIndexes = GenerateIndexes(questionCount, questions.length);
    currentScore = 0;
    questionIndex = 0;
    timeLeft = 300;
    StartClock();
    document.getElementById('intro').setAttribute('hidden', 'true');
    document.getElementById('questions-area').removeAttribute('hidden');
    ShowNextQuestion(selectedQuestionIndexes[questionIndex]);
}

function WrongAnswer() {
    clearInterval(timeout);
    timeLeft -= 5;
    UpdateClock();
    StartClock();
}

function StartClock() {
    timeout = setInterval(() => {
        if (timeLeft > 0)
            timeLeft--;
        else EndQuiz();
        UpdateClock();
    }, 1000);
}

function EndQuiz() {
    clearInterval(timeout)
    document.getElementById('points-record').innerText = currentScore;
    document.getElementById("questions-area").setAttribute('hidden', 'true');
    document.getElementById("final-scoring").removeAttribute('hidden');
}

function UpdateClock() {
    document.getElementById('clock').innerText = `${Math.floor(timeLeft / 60)}:${timeLeft % 60}`;
}

function ClearClock() { document.getElementById('clock').innerText = ""; }

function SubmitName(e) {
    e.preventDefault();
    var name = document.getElementById('applicant-name').value;
    document.getElementById('applicant-name').value = '';
    if (name != '') {
        StoreScore(currentScore, name)
        document.getElementById('final-scoring').setAttribute('hidden', true);
        document.getElementById('high-scores').removeAttribute('hidden');
    }
}

function LeaveHighScores() {
    document.getElementById('high-scores').setAttribute('hidden', true);
    document.getElementById('intro').removeAttribute('hidden');
}

function GoToHighScores() {
    document.getElementById('intro').setAttribute('hidden', true);
    document.getElementById('high-scores').removeAttribute('hidden');
}

document.getElementById('start-test').addEventListener('click', BeginTest);
document.getElementById('save-score').addEventListener('click', SubmitName);
document.getElementById('go-home').addEventListener('click', LeaveHighScores);
document.getElementById('go-scores').addEventListener('click', GoToHighScores);

HighScoreTable();


