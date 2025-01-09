const questions = [
    {
        type: 'js',
        category: 'JavaScript',
        question: '1. Which function displays a message box in JavaScript?',
        chooseOptions: ['alert()',
            'prompt()',
            'confirm()',
            'display()'],
        answer: 'alert()',
        selectedOption: ''
    },

    {
        type: 'js',
        category: 'JavaScript',
        question: '2. How do you declare an object in JavaScript? ',
        chooseOptions: ['et obj = []',
            'let obj = {}',
            'let obj = ()',
            'let obj = ""'],
        answer: 'let obj = {}',
        selectedOption: ''
    },
    {
        type: 'js',
        category: 'JavaScript',
        question: '3. What is the default value of an uninitialized variable in JavaScript?',
        chooseOptions: ['null',
            '0',
            'undefined',
            'NaN'],
        answer: 'undefined',
        selectedOption: ''
    },
    {
        type: 'js',
        category: 'JavaScript',
        question: '4.  How can you check if a value is an array in JavaScript?',
        chooseOptions: ['value.isArray()',
            'Array.isArray(value)',
            'typeof value === "array"',
            'value instanceof Array'],
        answer: 'Array.isArray(value)',
        selectedOption: ''
    },
    {
        type: 'js',
        category: 'JavaScript',
        question: '5.  Which method is used to convert a string to an integer in JavaScript?',
        chooseOptions: ['parseInteger()',
            'parseInt()',
            'toInteger()',
            'Number.parseInt()'],
        answer: 'parseInt()',
        selectedOption: ''
    },
    {
        type: 'js',
        category: 'JavaScript',
        question: '6.  Which of the following is used to check for strict equality in JavaScript?',
        chooseOptions: ['==',
            '!=',
            '===',
            ' <> '],
        answer: '===',
        selectedOption: ''
    },
    {
        type: 'js',
        category: 'JavaScript',
        question: '7. Which of these keywords is used to define a constant in JavaScript?',
        chooseOptions: ['const',
            ' let',
            'var',
            'fixed'],
        answer: 'const',
        selectedOption: ''
    },
    {
        type: 'js',
        category: 'JavaScript',
        question: '8. How can you write a comment in JavaScript?',
        chooseOptions: ['!-- comment --',
            '# comment',
            '// comment',
            '/** comment */'],
        answer: '// comment',
        selectedOption: ''
    },
    {
        type: 'js',
        category: 'JavaScript',
        question: '9. Which of the following methods can be used to find the length of a string in JavaScript?',
        chooseOptions: ['size',
            'length()',
            'length',
            'count'],
        answer: 'length',
        selectedOption: ''
    },
    {
        type: 'js',
        category: 'JavaScript',
        question: '10. What is the result of typeof null in JavaScript?',
        chooseOptions: ['object',
            'null',
            'undefined',
            'string'],
        answer: 'object',
        selectedOption: ''
    },
    //  python

    {
        type: 'python',
        category: 'Python',
        question: "1. What is the output of the following code?\n\nx = [1, 2, 3]\nprint(x[1:2])",
        chooseOptions: ["[1]", "[2]", "[1, 2]", "[2, 3]"],
        answer: '[2]',
        selectedOption: ''
    },
    {
        type: 'python',
        category: 'Python',
        question: "2. What does the 'len()' function do in Python?",
        chooseOptions: ["Returns the number of items in an object", "Returns the largest number in a list", "Returns the type of an object", "Returns the last item of a list"],
        answer: "Returns the number of items in an object",
        selectedOption: ""
    },
    {
        type: 'python',
        category: 'Python',
        question: "3. Which of the following is used to define a function in Python?",
        chooseOptions: ["def", "function", "func", "define"],
        answer: "def",
        selectedOption: ""
    },
    {
        type: 'python',
        category: 'Python',
        question: "4. What is the result of the expression '3' + 2 in Python?",
        chooseOptions: ["32", "5", "5", "TypeError"],
        answer: "'32'",
        selectedOption: ""
    },
    {
        type: 'python',
        category: 'Python',
        question: "5. How do you create a dictionary in Python?",
        chooseOptions: ["dict = {}", "dict = []", "dict = ()", "dict = set()"],
        answer: "dict = {}",
        selectedOption: ""
    },
    {
        type: 'python',
        category: 'Python',
        question: "6. What is the purpose of the 'break' statement in Python?",
        chooseOptions: ["To stop a loop", "To continue to the next iteration of a loop", "To create a new loop", "To exit a function"],
        answer: "To stop a loop",
        selectedOption: ""
    },
    {
        type: 'python',
        category: 'Python',
        question: "7. Which method is used to add an item to the end of a list in Python?",
        chooseOptions: ["add()", "append()", "insert()", "extend()"],
        answer: "append()",
        selectedOption: ""
    },
    {
        type: 'python',
        category: 'Python',
        question: "8. How would you define a tuple in Python?",
        chooseOptions: ["tuple = []", "tuple = {}", "tuple = ()", "tuple = set()"],
        answer: "tuple = ()",
        selectedOption: ""
    },
    {
        type: 'python',
        category: 'Python',
        question: "9. What will be the output of the following code?\n\nx = 'Hello'\nprint(x[1])",
        chooseOptions: ["H", "e", "l", "o"],
        answer: "e",
        selectedOption: ""
    },
    {
        type: 'python',
        category: 'Python',
        question: "10. What is the result of the expression 3 ** 2?",
        chooseOptions: ["9", "6", "3", "2"],
        answer: "9",
        selectedOption: ""
    },

    //adding questions of java
    {
        type: 'java',
        category: 'JAVA',
        question: "1. Which of the following is used to define a class in Java?",
        chooseOptions: ["class", "define", "new", "create"],
        answer: "class",
        selectedOption: ""
    },
    {
        type: 'java',
        category: 'JAVA',
        question: "2. Which of these is not a primitive data type in Java?",
        chooseOptions: ["int", "char", "String", "double"],
        answer: "String",
        selectedOption: ""
    },
    {
        type: 'java',
        category: 'JAVA',
        question: "3. Which method is used to start a thread in Java?",
        chooseOptions: ["start()", "run()", "init()", "execute()"],
        answer: "start()",
        selectedOption: ""
    },
    {
        type: 'java',
        category: 'JAVA',
        question: "4. What is the default value of a boolean variable in Java?",
        chooseOptions: ["true", "false", "0", "null"],
        answer: "false",
        selectedOption: ""
    },
    {
        type: 'java',
        category: 'JAVA',
        question: "5. Which of the following is the superclass of all classes in Java?",
        chooseOptions: ["Object", "Class", "String", "Serializable"],
        answer: "Object",
        selectedOption: ""
    },
    {
        type: 'java',
        category: 'JAVA',
        question: "6. What is the size of a char in Java?",
        chooseOptions: ["8 bits", "16 bits", "32 bits", "64 bits"],
        answer: "16 bits",
        selectedOption: ""
    },
    {
        type: 'java',
        category: 'JAVA',
        question: "7. What is the default value of an instance variable in Java?",
        chooseOptions: ["0", "null", "undefined", "depends on the type"],
        answer: "depends on the type",
        selectedOption: ""
    },
    {
        type: 'java',
        category: 'JAVA',
        question: "8. Which package is automatically imported in every Java program?",
        chooseOptions: ["java.lang", "java.util", "java.io", "java.net"],
        answer: "java.lang",
        selectedOption: ""
    },
    {
        type: 'java',
        category: 'JAVA',
        question: "9. Which keyword is used to prevent inheritance in Java?",
        chooseOptions: ["static", "final", "private", "protected"],
        answer: "final",
        selectedOption: ""
    },
    {
        type: 'java',
        category: 'JAVA',
        question: "10. What does JVM stand for?",
        chooseOptions: ["Java Virtual Method", "Java Variable Machine", "Java Virtual Machine", "Java Volume Manager"],
        answer: "Java Virtual Machine",
        selectedOption: ""
    },

    //addiing questions of html  
    {
        type: 'html',
        category: 'HTML',
        question: "1. Which of the following is used to create a hyperlink in HTML?",
        chooseOptions: ["link", "a", "href", "url"],
        answer: "a",
        selectedOption: ""
    },
    {
        type: 'html',
        category: 'HTML',
        question: "2. What does the img tag in HTML define?",
        chooseOptions: ["An image", "A paragraph", "A header", "A list item"],
        answer: "An image",
        selectedOption: ""
    },
    {
        type: 'html',
        category: 'HTML',
        question: "3. Which HTML element is used to define a table?",
        chooseOptions: ["table", "tr", "th", "td"],
        answer: "table",
        selectedOption: ""
    },
    {
        type: 'html',
        category: 'HTML',
        question: "4. Which of the following is the correct HTML element to define the title of a webpage?",
        chooseOptions: ["header", "title", "head", "h1"],
        answer: "title",
        selectedOption: ""
    },
    {
        type: 'html',
        category: 'HTML',
        question: "5. Which HTML tag is used to define an unordered list?",
        chooseOptions: ["ul", "li", "ol", "list"],
        answer: "ul",
        selectedOption: ""
    },
    {
        type: 'html',
        category: 'HTML',
        question: "6. Which of the following is used to create a form in HTML?",
        chooseOptions: ["form", "input", "textarea", "button"],
        answer: "form",
        selectedOption: ""
    },
    {
        type: 'html',
        category: 'HTML',
        question: "7. Which attribute is used to specify the destination URL in a hyperlink?",
        chooseOptions: ["href", "src", "action", "alt"],
        answer: "href",
        selectedOption: ""
    },
    {
        type: 'html',
        category: 'HTML',
        question: "8. Which tag is used to define a line break in HTML?",
        chooseOptions: ["br", "hr", "div", "p"],
        answer: "br",
        selectedOption: ""
    },
    {
        type: 'html',
        category: 'HTML',
        question: "9. What does the <meta> tag in HTML provide?",
        chooseOptions: ["Metadata", "Content", "Links", "Images"],
        answer: "Metadata",
        selectedOption: ""
    },
    {
        type: 'html',
        category: 'HTML',
        question: "10. Which tag is used to define the largest heading in HTML?",
        chooseOptions: ["h1", "h2", "h3", "h6"],
        answer: "h1",
        selectedOption: ""
    },

    //addiing questions of css  

    {
        type: 'css',
        category: 'CSS',
        question: "1. Which property is used to change the background color in CSS?",
        chooseOptions: ["background-color", "color", "bgcolor", "background"],
        answer: "background-color",
        selectedOption: ""
    },
    {
        type: 'css',
        category: 'CSS',
        question: "2. Which CSS property is used to change the font of an element?",
        chooseOptions: ["font-family", "font-style", "font-size", "text-style"],
        answer: "font-family",
        selectedOption: ""
    },
    {
        type: 'css',
        category: 'CSS',
        question: "3. Which of the following is used to create space between elements in CSS?",
        chooseOptions: ["margin", "padding", "border", "width"],
        answer: "margin",
        selectedOption: ""
    },
    {
        type: 'css',
        category: 'CSS',
        question: "4. How can you make a website layout responsive in CSS?",
        chooseOptions: ["By using media queries", "By using the float property", "By using fixed width", "By using text alignment"],
        answer: "By using media queries",
        selectedOption: ""
    },
    {
        type: 'css',
        category: 'CSS',
        question: "5. Which CSS property is used to change the font size of text?",
        chooseOptions: ["font-size", "font-weight", "text-size", "text-style"],
        answer: "font-size",
        selectedOption: ""
    },
    {
        type: 'css',
        category: 'CSS',
        question: "6. What does the `display: flex;` property do in CSS?",
        chooseOptions: ["It makes the element behave like a block", "It makes the element behave like an inline element", "It enables flexbox layout", "It hides the element"],
        answer: "It enables flexbox layout",
        selectedOption: ""
    },
    {
        type: 'css',
        category: 'CSS',
        question: "7. Which CSS property is used to change the text color?",
        chooseOptions: ["color", "text-color", "font-color", "background-color"],
        answer: "color",
        selectedOption: ""
    },
    {
        type: 'css',
        category: 'CSS',
        question: "8. Which property is used to set the space between lines of text?",
        chooseOptions: ["line-height", "letter-spacing", "text-indent", "word-spacing"],
        answer: "line-height",
        selectedOption: ""
    },
    {
        type: 'css',
        category: 'CSS',
        question: "9. What is the default value of the `position` property in CSS?",
        chooseOptions: ["static", "relative", "absolute", "fixed"],
        answer: "static",
        selectedOption: ""
    },
    {
        type: 'css',
        category: 'CSS',
        question: "10. Which property is used to add a shadow effect to text in CSS?",
        chooseOptions: ["text-shadow", "box-shadow", "shadow", "text-effect"],
        answer: "text-shadow",
        selectedOption: ""
    },

    //addiing questions of c/c++ 

    {
        type: 'c/c++',
        category: 'C/C++',
        question: "1. What is the size of an `int` in C/C++ on a 32-bit system?",
        chooseOptions: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
        answer: "4 bytes",
        selectedOption: ""
    },
    {
        type: 'c/c++',
        category: 'C/C++',
        question: "2. Which of the following is used to allocate memory dynamically in C?",
        chooseOptions: ["malloc", "new", "calloc", "Both malloc and calloc"],
        answer: "Both malloc and calloc",
        selectedOption: ""
    },
    {
        type: 'c/c++',
        category: 'C/C++',
        question: "3. Which keyword is used to define a constant in C/C++?",
        chooseOptions: ["const", "define", "constant", "static"],
        answer: "const",
        selectedOption: ""
    },
    {
        type: 'c/c++',
        category: 'C/C++',
        question: "4. In C++, which of the following is the correct way to declare a constructor?",
        chooseOptions: ["void Constructor()", "Constructor()", "constructor()", "constructor void()"],
        answer: "Constructor()",
        selectedOption: ""
    },
    {
        type: 'c/c++',
        category: 'C/C++',
        question: "5. Which of the following is not a valid loop in C/C++?",
        chooseOptions: ["for", "while", "do-while", "foreach"],
        answer: "foreach",
        selectedOption: ""
    },
    {
        type: 'c/c++',
        category: 'C/C++',
        question: "6. What is the default value of a local variable in C?",
        chooseOptions: ["0", "null", "undefined", "garbage value"],
        answer: "garbage value",
        selectedOption: ""
    },
    {
        type: 'c/c++',
        category: 'C/C++',
        question: "7. Which operator is used to access members of a structure in C?",
        chooseOptions: ["-", ".", "::", "&"],
        answer: ".",
        selectedOption: ""
    },
    {
        type: 'c/c++',
        category: 'C/C++',
        question: "8. What is the result of the expression `5 / 2` in C/C++?",
        chooseOptions: ["2.5", "2", "3", "undefined"],
        answer: "2",
        selectedOption: ""
    },
    {
        type: 'c/c++',
        category: 'C/C++',
        question: "9. Which of the following is a valid pointer declaration in C?",
        chooseOptions: ["int* ptr", "ptr* int", "int ptr*", "ptr int*"],
        answer: "int* ptr",
        selectedOption: ""
    },
    {
        type: 'c/c++',
        category: 'C/C++',
        question: "10. In C++, which of the following is used to create an object of a class dynamically?",
        chooseOptions: ["new", "malloc", "calloc", "allocate"],
        answer: "new",
        selectedOption: ""
    },


];


// selecting all elements

const main_page = document.querySelector(".main-page");
const start_option = main_page.querySelector(".option");
const quiz_box = document.querySelector(".quiz-box");
const result_box = document.querySelector(".result-box");
const chooseOptionsElement = document.querySelector(".choose-options");
const questionElement = document.querySelector(".questions");
const subName = document.querySelector(".sub-name");
// for(let i = 0; i < questions.length; i++){
    subName.innerHTML = questions[0].category;
// }


const questionCount = document.querySelector(".questions-count");
// questionCount.innerHTML= currentQuestionIndex+1/questions.length; 
// start Quiz function

function startQuiz() {
    main_page.style.display = "none";
    quiz_box.style.display = "block";
    showQuestion();
    startTimer();
    checkAnswer();
}

// Show Question function
let currentQuestionIndex = 0;
let score = 0;
let timer;
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = `<h2>${currentQuestion.question}</h2>`;
    chooseOptionsElement.innerHTML = "";
    for (let i = 0; i < currentQuestion.chooseOptions.length; i++) {

        chooseOptionsElement.innerHTML += `<button  id="option-btn" onclick ="checkAnswer('${currentQuestion.chooseOptions[i]}')">${currentQuestion.chooseOptions[i]}</button>`
        // chooseOptionsElement.innerHTML += `<button class="option"
        //                                onclick="checkAnswer('${currentQuestion.options[i]}')">
        //                                ${currentQuestion.options[i]}</button>`

    }

}

function checkAnswer() {
    const selectedOption = document.querySelector("#option-btn");
    if (selectedOption === questions[currentQuestionIndex].answer) {
        score++;
        console.log(score);
    }
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// result function
function showResult() {
    quiz_box.style.display = "none";
    result_box.style.display = "block";
    document.querySelector(" #score span").textContent = `${(score / questions.length) * 100}%`;
    const totalQuestion = document.querySelector("#totalQuestion span");
    totalQuestion.textContent = `${questions.length}`;
    const totalScore = document.querySelector("#correct span");
}

// startTimer()
function startTimer() {
    let timeLeft = 10;
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer("");
        } else {
            document.querySelector(".time-left span").textContent = `${timeLeft} sec`;
            timeLeft--;
        }
    }, 1000);
}



function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    result_box.style.display = "none";
    quiz_box.style.display = "block";
    showQuestion();
    startTimer();
}




document.querySelector(".main-page form").addEventListener("submit", (e) => {
    e.preventDefault();
    startQuiz();
});
document.querySelector("#next-btn").addEventListener("click", () => {
    checkAnswer("");
});
document.querySelector("#restart-btn").addEventListener("click", () => {
    restartQuiz();
});
document.querySelector("#home").addEventListener("click", () => {
    location.reload();
});

document.querySelector("#submit").addEventListener("click", () => {
    showResult();

});

