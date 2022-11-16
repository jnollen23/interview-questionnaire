/* 
    I want to create the entire question section. Once the user starts the question section it should pick 10 questions and display them on the screen.
    The user will then hit the next button and another random 10 questions will be selected without picking the previous 10 questions. Instead of this
    function picking 10 questions, it will be pick all 20 questions at 1 time to prevent any issues with figuring out what questions have been asked.

*/
var selectedQuestionIndexes = [];
var date = new Date();
var randomNumber = sfc32(Math.pow(date.getSeconds(), 4), Math.pow(date.getMilliseconds(),4), Math.pow(date.getFullYear(), 4), Math.pow(date.getUTCHours(),4));

/*
    In order to score the test I want to have all 20 questions on the page but hide them. That way they still exist and can be iterated through but the user
    wont see them, just the questions showing on the page currently. May even try and dynamically show questions based on page height. This wont function if
    the user resizes the window but when a user goes in for the test it will use the current window size to determine height.
*/
function GenerateQuestions() {

    var index = 0;
    for (var i = 0; i < 20; i++) {
        index = Math.floor(randomNumber() * questions.length);
        //Need to do a unique check but need more questions first
        selectedQuestionIndexes.push(index);
    }
}


/*
    Create a section of questions using an anchor point at rootID. The intention is to create blocks of questions as a page, with each set of questions
    appearing on different pages. When the user hits next it shows the next set and hides the previous set. To hide this set of questions we are passing
    a variable to ID the set for reference later.
*/
function CreateQuestionBlock(selectedIndexes, rootID, blockID) {
    var bodyBlock = document.getElementById(rootID);
    boddyBlock.setAttribute("data-ID", `"${blockID}"`)
    selectedIndexes.forEach((index) => {
        bodyBlock.appendChild(CreateQuestion(questions[index].question, questions[index].answers, questions[index].questionID))
    });

    return bodyBlock;
}


/* 
    In order to create the questions we pass a question object that contains at least a question element and answers element.
    question - The text for the question element
    answers - Possible answers to that question
    questionID - ID for question to have shorter names

    Returns - An element of type article with the question formated for html. 
            It assumes that the LI element is display:inline and adds a link break at the end

    The reason for this is during testing putting the checkbox before the LI caused the text for the li to appear on the line below the input.

 */
function CreateQuestion(question, answers, questionID) {
    var block = document.createElement("article");

    var quest = document.createElement("h3");
    quest.innerText = question;

    var answersList = document.createElement("ol");
    answersList.setAttribute("type", "A")

    var answersString = "";
    answers.forEach((element, i) => {
        answersString += `<div class='form-row'><input type='radio' id='${element}' name='${questionID}' value='${i}'/>
        <li start="${i + 1}"><label for='${element}'>${element}</label></li></div>`;
    });

    answersList.innerHTML = answersString;

    block.appendChild(quest);
    block.appendChild(answersList);

    return block;
}


/* 
    sfc32 is a random number generator created by Chris Doty-Humphrey and is in public domain
    returns a number between 0 and 1
*/
function sfc32(a, b, c, d) {
    return function () {
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

