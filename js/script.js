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

const quiz      = document.getElementById('quiz');
const questions = document.getElementById('question');
const answers   = document.querySelectorAll('.answer');
const optionA   = document.getElementById('option-a');
const optionB   = document.getElementById('option-b');
const optionC   = document.getElementById('option-c');
const optionD   = document.getElementById('option-d');
const submitBtn = document.getElementById('submit');
let   count     = 0;
let   score     = 0;


const loadQuestions = () => {
    const currentQuestion = quizQuestions[count];
    questions.innerHTML   = currentQuestion.question;
    optionA.innerHTML     = currentQuestion.a;
    optionB.innerHTML     = currentQuestion.b;
    optionC.innerHTML     = currentQuestion.c;
    optionD.innerHTML     = currentQuestion.d;
}

const selectedOption =  () => {
    let selectedOption = null;

    answers.forEach(answer => {
        if (answer.checked ===true) selectedOption = answer.id;
    })

    return selectedOption;
}


const deSelectOption =  () => {
    answers.forEach(answer => {
        answer.checked = false;
    })
}


submitBtn.addEventListener('click', () => {

    if (selectedOption()) {

        if (selectedOption() === quizQuestions[count].correct) {
            score++;
        }

        count++;

        if (count < quizQuestions.length) {
            deSelectOption();
            loadQuestions();
        } else {
            quiz.innerHTML = ` <h1 style="margin-top: 60px;text-align:center"> Congratulations!</h1>
                <h2 class="justify-content" style="margin-bottom: 60px;text-align:center">You answered correctly at ${score}/${quizQuestions.length} questions.</h2>
                               <button onclick="location.reload()">Reload</button>`;
        }
    }


})


document.addEventListener("DOMContentLoaded", loadQuestions);