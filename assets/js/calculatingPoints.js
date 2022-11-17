/*
    Need to figure out how to count the points. Each radio group uses the questionID as the grouping mechanism and I can use that to figure out which one
    is selected. I do need to come up with a way to get the questionID. First step will be assuming I know the questionID and that the questionID is the
    index of the questions. Radio Buttons do not 
*/

function CalculateScore(){
    var points = 0;
    selectedQuestionIndexes.forEach(index =>{
        points += CheckIfCorrect(questions[index].questionID, questions[index].correctAnswer);
    });
    return points;
}


/* 
    Will determine if the user selected the correct answer for a given question
 */
function CheckIfCorrect(groupName, correctAsnswer){
    var radioGroup = document.querySelectorAll(`input[name='${groupName}']`);
    var points = 0;
    var answered = false;
    radioGroup.forEach(radio=>{
        if(radio.checked && radio.value == correctAsnswer) {
            points = 2;
            console.log("Found Answer");
        }

        if(radio.checked) answered = -1;
    })
    return points + answered;
}
