const timeElement = document.querySelector("#time");
const wrapperElement = document.querySelector(".wrapper");
const btnElement = document.querySelector("#start");
const divContainerElement = document.querySelector(".divContainer");
const hElement = document.querySelector("#title");
const orderedListElement = document.querySelector("#q-list");
const finishDiv = document.querySelector(".finish-section");
const finalScore = document.querySelector("#result");
const errorMessage = document.querySelector("#errorMessage");
const initialInput = document.querySelector("#inputInitial").value;
const submitElement = document.querySelector(".btn btn-primary mb-2");
const responseDivElement = document.querySelector("#response");
const finalPageElement = document.querySelector(".final-page");
const initialAndScore = document.querySelector("#staticEmail");
const startPageElement = document.querySelector(".start-page");

//Constants are block-scoped, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment, and it can't be re-declared.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const




// Create an  array of questions
const displayQuestions = [
    {
        title: "The following are true of Javascript, with the EXCEPTION of:",
        choices: ["it is a programming language", "Java and Javascript are the same thing", "it is most often for dynamic client-side scripts on webpages, but it is also often used on the server-side", "primarily used in the browser, enabling developers to manipulate webpage content through the DOM"],
        answer: "Java and Javascript are the same thing. The two programming languages are significantly different in their syntax, semantics, and use cases. See https://developer.mozilla.org/en-US/docs/Glossary/JavaScript#learn_more for more information",
    },
    {
        title: "An ARRAY is defined as...",
        choices: ["a block of code designed to perform a particular task.", "Assigning values to variables and add them together", "used for storing and manipulating text", "are used to store multiple values in a single variable"],
        answer: "are used to store multiple values in a single variable - An array is a special variable, which can hold more than one value at a time. See W3schools for more information on arrays ",
    },
    {
        title: "Which of the following is an example of Camel case or Lower camel case?",
        choices: ["first_name, last_name, master_card, inter_city", "FirstName, LastName, MasterCard, InterCity", "firstName, lastName, masterCard, interCity", "first-name, last-name, master-card, inter-city"],
        answer: "firstName, lastName, masterCard, interCity. as a side note - Hyphens are not allowed in JavaScript. They are reserved for subtractions.",
    },
    {
        title: "The statement provided is true or false, select between the two options",
        choices: ["JavaScript syntax defines two types of values: Fixed values are called Literals. Variable values are called Variables.Numbers are written with or without decimals, Strings are text, written within double or single quotes, variables are used to store data values.",],

        answer: "True",
    },
    {   
        title: "A Javascript Boolean can have how many values?",
        choices: ["1", "2", 
        "3", "4"],
        answer: "1 true or false You can use the Boolean() function to find out if an expression is true:",
    }
]

//Questions were pulled from documentation by w3schools and mozilla 
//
//

 /**Create next question to be added to the HTML document dynamically*/
function displayQuestions() {
    const what_kind_of_bear_is_bestTitle = question[i].title
    hElement.textContent = what_kind_of_bear_is_bestTitle
    const what_kind_of_bear_is_bestFact1BearsBlackBears = question[i].choices[0];
    const what_kind_of_bear_is_bestFact2Beets = question[i].choices[1];
    const what_kind_of_bear_is_bestFact3BattleStarGalactica = question[i].choices[2];
    const what_kind_of_bear_is_bestFact4IdentityTheftIsNotAJokeJim = question[i].choices[3];

    orderedListElement.innerHTML = '';

    const liTag1 = document.createElement("li");
    liTag1.setAttribute("class", "all_li")
    const btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = what_kind_of_bear_is_bestFact1BearsBlackBears;
    liTag1.appendChild(btn1)
    orderedListElement.appendChild(liTag1);
    divContainerElement.appendChild(orderedListElement);

    const liTag2 = document.createElement("li");
    liTag2.setAttribute("class", "all_li");
    const btn2 = document.createElement('button');
    btn2.setAttribute("class", "all_btn")
    btn2.textContent = what_kind_of_bear_is_bestFact2Beets;
    liTag2.appendChild(btn2)
    orderedListElement.appendChild(liTag2)
    divContainerElement.appendChild(orderedListElement);

    const liTag3 = document.createElement("li");
    liTag3.setAttribute("class", "all_li")
    const btn3 = document.createElement('button');
    btn3.setAttribute("class", "all_btn")
    btn3.textContent = what_kind_of_bear_is_bestFact3BattleStarGalactica;
    liTag3.appendChild(btn3)
    orderedListElement.appendChild(liTag3)
    divContainerElement.appendChild(orderedListElement);

    const liTag4 = document.createElement("li");
    liTag4.setAttribute("class", "all_li")
    const btn4 = document.createElement('button');
    btn4.setAttribute("class", "all_btn");
    btn4.textContent = what_kind_of_bear_is_bestFact4IdentityTheftIsNotAJokeJim;
    liTag4.appendChild(btn4);
    orderedListElement.appendChild(liTag4);
    divContainerElement.appendChild(orderedListElement);
    const allBtnEl = document.querySelectorAll(".all_btn")
    allBtnEl.forEach(function (event) {
        event.addEventListener("click", onclickHandler)
    });

}

//References 

//https://www.imdb.com/title/tt1008441/characters/nm0933988
//The office 
//https://github.com/Sile-Kiman/Web-API-Code-Quiz Referenced how he put his project together - super helpful