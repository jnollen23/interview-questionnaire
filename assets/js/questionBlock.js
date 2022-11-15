/* 
    I want to create the entire question section. Once the user starts the question section it should pick 10 questions and display them on the screen.
    The user will then hit the next button and another random 10 questions will be selected without picking the previous 10 questions. Instead of this
    function picking 10 questions, it will be pick all 20 questions at 1 time to prevent any issues with figuring out what questions have been asked.

*/
var selectedQuestionIndexes = [];

/*
    Passing the current 10 questions to be shown on screen to this function which will return the question block for the screen
*/
function CreateQuestionBlock(selectedIndexes, rootID){
    var bodyBlock = document.getElementById(rootID);
    selectedIndexes.forEach((index)=>{
        bodyBlock.appendChild(CreateQuestion(questions[index]))
    });

    return bodyBlock;
}


/* 
    In order to create the questions we pass a question object that contains at least a question element and answers element.
    questionObj.question - The text for the question element
    questionObj.answers - Possible answers to that question
    questionObj.questionID - ID for question to have shorter names

    Returns - An element of type article with the question formated for html. 
            It assumes that the LI element is display:inline and adds a link break at the end

    The reason for this is during testing putting the checkbox before the LI caused the text for the li to appear on the line below the input.

 */
function CreateQuestion(questionObj) {
    var block = document.createElement("article");

    var quest = document.createElement("h3");
    quest.innerText = questionObj.question;

    var answers = document.createElement("ol");
    answers.setAttribute("type", "A")

    var answersString = "";
    questionObj.answers.forEach((element, i) => {
        answersString += `<div class='form-row'><input type='radio' id='${element}' name='${questionObj.questionID}'/><li start="${i + 1}"><label for='${element}'>${element}</label></li></div>`
    });

    answers.innerHTML = answersString;

    block.appendChild(quest);
    block.appendChild(answers);

    return block;
}


/* 
    sfc32 is a random number generator created by Chris Doty-Humphrey and is in public domain
    returns a number between 0 and 1
*/
function sfc32(a, b, c, d) {
    return function() {
      a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0; 
      var t = (a + b) | 0;
      a = b ^ b >>> 9;
      b = c + (c << 3) | 0;
      c = (c << 21 | c >>> 11);
      d = d + 1 | 0;
      t = t + d | 0;
      c = c + t | 0;
      return (t >>> 0) / 4294967296;
    }
}

