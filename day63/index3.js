// script.js
const questions = [
    {
        question: "საქართველოს დედაქალაქი?",
        answers: ["ბათუმი", "ქუთაისი", "თბილისი", "რუსთავი"],
        correct: "თბილისი"
    },

    {
        question: "2 + 2 = ?",
        answers: ["3", "4", "5", "6"],
        correct: "4"
    },

    {
        question: "რომელია ყველაზე დიდი ოკეანე?",
        answers: ["ატლანტის", "წყნარი", "ინდოეთის", "ჩრდილოეთის"],
        correct: "წყნარი"
    },

    {
        question: "HTML რას ნიშნავს?",
        answers: ["Hyper Text Markup Language", "Home Tool", "High Text", "Hyper Tool"],
        correct: "Hyper Text Markup Language"
    },

    {
        question: "JavaScript არის?",
        answers: ["საჭმელი", "პროგრამირების ენა", "თამაში", "ფერი"],
        correct: "პროგრამირების ენა"
    }
];

const questionText = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const nextBtn = document.getElementById("nextBtn");

let currentQuestion = 0;
let score = 0;

function showQuestion() {

    let q = questions[currentQuestion];

    questionText.textContent = q.question;

    answerButtons.forEach((btn, index) => {
        btn.textContent = q.answers[index];

        btn.onclick = function() {

            if(btn.textContent === q.correct){
                score++;
            }

            answerButtons.forEach(button => {
                button.disabled = true;
            });
        };
    });
}

nextBtn.addEventListener("click", function(){

    currentQuestion++;

    if(currentQuestion < questions.length){

        answerButtons.forEach(button => {
            button.disabled = false;
        });

        showQuestion();

    } else {

        document.querySelector(".quiz-box").innerHTML =
        `<h1>დასრულდა!</h1>
         <h2>შენი შედეგი: ${score} / ${questions.length}</h2>`;
    }
});

showQuestion();