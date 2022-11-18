/* 
    Putting questions in its own file as I expect it to grow large and dont want it to make it hard to read.
    Need to create a system to store questions for dynamic reading later.
    Creating an array of question objects that can be added to in the future
 */
var questions = [
    {
        question: "What is HTML?",
        answers: ["Hyper Text Marker Language", "Hypno Tester Mark Lorie", "HyperText Markup Langauge", "Hypsters Talk Much Love"],
        correctAnswer: 2,
        questionID: 0
    },
    {
        question: "What is a Tag in HTML?",
        answers: ["Marking the beginning and end of an element", "A method to mark an item", "A way to mark the price of an object", "Another name for a stub"],
        correctAnswer: 0,
        questionID: 1
    },
    {
        question: "What is the differnce between a Tag and an Element in HTML?",
        answers: ["There is no difference just different terms for the same thing", "A tag holds an HTML element, and an element holds the content ", "An element holds a tag, and a tag holds the content", "A tag holds the price of an object, and an element holds the object"],
        correctAnswer: 1,
        questionID: 2
    },
    {
        question: "What are attributes in HTML?",
        answers: ["An elements height, width, and depth", "Key words used inside an element to control the tag", "Information about the character of an element", "They provide additional information about elements"],
        correctAnswer: 3,
        questionID: 3
    },
    {
        question: "What is an Anchor Tag in HTML?",
        answers: ["A tag that other elements can have absolute positions use as a reference", "The tag used to provide a hypertext link", "The bottom of a page", "There is no anchor tag"],
        correctAnswer: 1,
        questionID: 4
    },
    {
        question: "What is the Clear Tag in HTML?",
        answers: ["A tag used to show text as the background of that text", "Sanitizes users input", "Add a clear line in the document", "There is no clear tag"],
        correctAnswer: 3,
        questionID: 5
    },
    {
        question: "What is HTML5?",
        answers: ["The 5th verion of HTML", "A programming langauge for beginners", "The best application for HTML", "A video game about Hyper Tensile Market Loads"],
        correctAnswer: 0,
        questionID: 6
    },
    {
        question: "True/False: Comments make it harder to read code.",
        answers: ["True", "False"],
        correctAnswer: 1,
        questionID: 7
    },
    {
        question: "What is the Marquee Tag in HTML?",
        answers: ["A great header tag to help grab visitors attention", "The newest tag to do scrolling text", "An outdated tag that should not be used", "A tag to do scrolling text but cant control what happens on the edges"],
        correctAnswer: 2,
        questionID: 8
    },
    {
        question: "What is Semantic HTML?",
        answers: ["A way to use tags to provide meaning to both browser and developer", "Using good descriptive class names", "Tags that provide presentation rather then meaning", "Something that used to be common for webpage development but is now replaced by javascript"],
        correctAnswer: 0,
        questionID: 9
    },
    {
        question: "What is an image map?",
        answers: ["A map of the world", "An image with clickable areas", "An image of a map for the local area based on your brower's default location", "A descriptive tag to tell the browser there is a map in the image"],
        correctAnswer: 1,
        questionID: 10
    },
    {
        question: "Why use the Embed tag in HTML?",
        answers: ["Embed video into your web page", "Insert external applications which are generrally multimedia content", "To insert images into a web page", "There is no embed tag"],
        correctAnswer: 1,
        questionID: 11
    },
    {
        question: "What are void elements?",
        answers: ["HTML elements which do not need or have closing tags", "An element that does not have a tag", "Elements with no default behavior", "There is no such thing as void elements"],
        correctAnswer: 0,
        questionID: 12
    },
    {
        question: "What are void tags?",
        answers: ["A joke tag that was added but functions just like a span tag", "A tag that does not contain elements", "Tags with no default behavior", "There is no such thing as void tags"],
        correctAnswer: 3,
        questionID: 13
    },
    {
        question: "How does one not store data about a user for use after the user leaves the webpage?",
        answers: ["Writing information to the server database", "Using a cookie", "Using the localstorage variable", "As a javascript variable"],
        correctAnswer: 3,
        questionID: 14
    },
    {
        question: "How do you show white space at the beginning or end of an element?",
        answers: ["Use #nbsp", "Just add a space", "Use &nbsp", "Add the css property white-space:leave"],
        correctAnswer: 2,
        questionID: 15
    },
    {
        question: "True/False: HTML combined with CSS and JavaScript can make video games.",
        answers: ["True", "False"],
        correctAnswer: 0,
        questionID: 16
    },
    {
        question: "What is CSS?",
        answers: ["Cascading Style Sheets", "Comma Separated Sheets", "Cost Service Sales", "Useless"],
        correctAnswer: 0,
        questionID: 17
    },
    {
        question: "True/False: CSS is does not make good looking webpages.",
        answers: ["True", "False"],
        correctAnswer: 1,
        questionID: 18
    },
    {
        question: "Does this block of code produce an infinite loop?<br><code>for(var i = 0; i < 100; i++){<br>y++;<br>i--;<br>}</code>",
        answers: ["Yes", "No"],
        correctAnswer: 0,
        questionID: 19
    },
    {
        question: "What is the time element of intervals?",
        answers: ["Seconds", "Centiseconds", "Milliseconds", "Decaseconds"],
        correctAnswer: 2,
        questionID: 20
    },
    {
        question: "What is the ASCII table",
        answers: ["The encoding of alphanumeric characters used by computers", "The abbrevation of the different html elements", "Character codes for the Asian alphabet", "I dont know"],
        correctAnswer: 0,
        questionID: 21
    },
    {
        question: "What school is the most prestigious School in Georgia?",
        answers: ["Georgia", "Emory", "Georgia Tech", "North Georgia"],
        correctAnswer: 2,
        questionID: 22
    },
    {
        question: "Who is the most prestigious mascot?",
        answers: ["Swoop the Eagle", "Uga", "Buzz", "Nigel the Nighthawk"],
        correctAnswer: 2,
        questionID: 23
    },
    {
        question: "What is 435 % 5 equal to?",
        answers: ["0", "3", "4", "5"],
        correctAnswer: 0,
        questionID: 24
    },
    {
        question: "What is 5 ^ 5 equal to?",
        answers: ["10", "25", "125", "3125"],
        correctAnswer: 3,
        questionID: 25
    },
    {
        question: "How do you make text large without changing the style?",
        answers: ["Give it a p tag", "Give it a header tag", "Give it a lp tag", "You cant change font size without changing style"],
        correctAnswer: 1,
        questionID: 26
    },
    {
        question: "Which one of these is a loop in JavaScript?",
        answers: ["While", "Circle", "Pizza", "Loop"],
        correctAnswer: 0,
        questionID: 27
    },
    {
        question: "JS is to HTML as _______ is to Building",
        answers: ["Tools", "Pizza", "School", "Sweater"],
        correctAnswer: 0,
        questionID: 28
    },
    {
        question: "What is an API?",
        answers: ["Programmers talking to each other", "How your computer talks to other computers", "Public functions that allow the programmer to interact with other programs", "A boring pizza party"],
        correctAnswer: 2,
        questionID: 29
    },
    {
        question: "What is a flex box?",
        answers: ["A container that allows the elements inside to be automatically arranged depending on the viewport size", "A flexiable container for text to make sure it takes up an entire row", "The location of a great party your not invited too", "Does not allow responsive element design based on viewport size."],
        correctAnswer: 0,
        questionID: 30
    },
    {
        question: "What does var(--default-bg-color) do in CSS",
        answers: ["Computes the background color", "Makes --default-bg-color a variable", "Clears the value in --default-bg-color","Reads the variable value --default-bg-color"],
        correctAnswer: 3,
        questionID: 31
    }
];