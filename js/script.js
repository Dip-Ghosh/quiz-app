const quizQuestions = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const questions = document.getElementById('question');
const optionA   = document.getElementById('option-a');
const optionB   = document.getElementById('option-b');
const optionC   = document.getElementById('option-c');
const optionD   = document.getElementById('option-d');
const submitBtn = document.getElementById('submit');
let   count     = 0;

const loadQuestions = () => {
    const currentQuestion = quizQuestions [count];
    questions.innerHTML   = currentQuestion.question;
    optionA.innerHTML     = currentQuestion.a;
    optionB.innerHTML     = currentQuestion.b;
    optionC.innerHTML     = currentQuestion.c;
    optionD.innerHTML     = currentQuestion.d;
}

const loadQuiz = submitBtn.addEventListener('click', () => {
    count++;

    if (count < quizQuestions.length) loadQuestions();
    else return undefined;

})


document.addEventListener("DOMContentLoaded", loadQuestions);