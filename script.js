const questionSets = {

    worldcup: [
        {
            question: "Who won the 2022 FIFA World Cup?",
            answers: ["Brazil", "Argentina", "France", "Germany"],
            correct: "Argentina"
        },
        {
            question: "Which country has won the most FIFA World Cups?",
            answers: ["Germany", "Brazil", "Argentina", "France"],
            correct: "Brazil"
        },
        {
            question: "Who won the 2018 FIFA World Cup?",
            answers: ["Croatia", "France", "Brazil", "Germany"],
            correct: "France"
        },
        {
            question: "Which country hosted the 2014 FIFA World Cup?",
            answers: ["Brazil", "Germany", "Russia", "South Africa"],
            correct: "Brazil"
        },
        {
            question: "Which country won the 2010 FIFA World Cup?",
            answers: ["Germany", "Spain", "Netherlands", "Italy"],
            correct: "Spain"
        },
        {
            question: "Which country won the 2006 FIFA World Cup?",
            answers: ["France", "Brazil", "Italy", "Germany"],
            correct: "Italy"
        },
        {
            question: "Which country won the first FIFA World Cup in 1930?",
            answers: ["Brazil", "Argentina", "Uruguay", "Italy"],
            correct: "Uruguay"
        },
        {
            question: "Which country hosted the 2018 FIFA World Cup?",
            answers: ["Russia", "Qatar", "Brazil", "France"],
            correct: "Russia"
        },
        {
            question: "Which country won the 1998 FIFA World Cup?",
            answers: ["Brazil", "France", "Germany", "Italy"],
            correct: "France"
        },
        {
            question: "Which country won the 2014 FIFA World Cup?",
            answers: ["Argentina", "Germany", "Brazil", "Spain"],
            correct: "Germany"
        }
    ],

    clubs: [
        {
            question: "Which club is based at Camp Nou?",
            answers: ["Real Madrid", "Barcelona", "Liverpool", "Chelsea"],
            correct: "Barcelona"
        },
        {
            question: "Which club is known as the 'Red Devils'?",
            answers: ["Liverpool", "Manchester United", "Arsenal", "Chelsea"],
            correct: "Manchester United"
        },
        {
            question: "Which club has won the most UEFA Champions League titles?",
            answers: ["Barcelona", "Bayern Munich", "Real Madrid", "Liverpool"],
            correct: "Real Madrid"
        },
        {
            question: "Which English club plays at Anfield?",
            answers: ["Arsenal", "Liverpool", "Chelsea", "Tottenham"],
            correct: "Liverpool"
        },
        {
            question: "Which club plays at the Santiago Bernabéu?",
            answers: ["Real Madrid", "Barcelona", "Atlético Madrid", "Sevilla"],
            correct: "Real Madrid"
        },
        {
            question: "Which club is based in Munich?",
            answers: ["Borussia Dortmund", "Bayern Munich", "RB Leipzig", "Schalke"],
            correct: "Bayern Munich"
        },
        {
            question: "Which club is nicknamed the 'Gunners'?",
            answers: ["Chelsea", "Arsenal", "Liverpool", "Everton"],
            correct: "Arsenal"
        },
        {
            question: "Which Italian club is based in Turin?",
            answers: ["AC Milan", "Inter Milan", "Juventus", "Roma"],
            correct: "Juventus"
        },
        {
            question: "Which club plays at Stamford Bridge?",
            answers: ["Chelsea", "Arsenal", "West Ham", "Fulham"],
            correct: "Chelsea"
        },
        {
            question: "Which club is known as 'The Reds' in England?",
            answers: ["Liverpool", "Manchester City", "Arsenal", "Newcastle United"],
            correct: "Liverpool"
        }
    ],

    players: [
        {
            question: "Who is known as the 'King of Football'?",
            answers: ["Pelé", "Messi", "Ronaldo", "Maradona"],
            correct: "Pelé"
        },
        {
            question: "Which player won the 2022 FIFA World Cup with Argentina?",
            answers: ["Neymar", "Lionel Messi", "Kylian Mbappé", "Luka Modrić"],
            correct: "Lionel Messi"
        },
        {
            question: "Who is famous for the 'Hand of God' goal?",
            answers: ["Pelé", "Maradona", "Zidane", "Ronaldo"],
            correct: "Maradona"
        },
        {
            question: "Which player is nicknamed CR7?",
            answers: ["Cristiano Ronaldo", "Ronaldinho", "Ronaldo Nazário", "Rivaldo"],
            correct: "Cristiano Ronaldo"
        },
        {
            question: "Which country does Neymar represent?",
            answers: ["Argentina", "Portugal", "Brazil", "Spain"],
            correct: "Brazil"
        },
        {
            question: "Which player is famous for the 'Panenka' penalty style?",
            answers: ["Antonín Panenka", "Pelé", "Messi", "Beckham"],
            correct: "Antonín Panenka"
        },
        {
            question: "Which player captained France to the 1998 World Cup title?",
            answers: ["Thierry Henry", "Zinedine Zidane", "Michel Platini", "Kylian Mbappé"],
            correct: "Zinedine Zidane"
        },
        {
            question: "Which player is known for the 'Siuuu' celebration?",
            answers: ["Messi", "Neymar", "Cristiano Ronaldo", "Mbappé"],
            correct: "Cristiano Ronaldo"
        },
        {
            question: "Which Argentine player is widely known as 'La Pulga'?",
            answers: ["Ángel Di María", "Lionel Messi", "Sergio Agüero", "Javier Zanetti"],
            correct: "Lionel Messi"
        },
        {
            question: "Which Brazilian legend played for Santos and New York Cosmos?",
            answers: ["Ronaldinho", "Ronaldo", "Pelé", "Kaká"],
            correct: "Pelé"
        }
    ],

    general: [
        {
            question: "How many players does one football team have on the pitch?",
            answers: ["9", "10", "11", "12"],
            correct: "11"
        },
        {
            question: "How long is a standard football match?",
            answers: ["60 minutes", "80 minutes", "90 minutes", "120 minutes"],
            correct: "90 minutes"
        },
        {
            question: "What color card means a player is sent off?",
            answers: ["Yellow", "Red", "Blue", "Green"],
            correct: "Red"
        },
        {
            question: "What is awarded when a defending player commits a foul inside their own penalty area?",
            answers: ["Corner kick", "Throw-in", "Penalty kick", "Free kick"],
            correct: "Penalty kick"
        },
        {
            question: "What part of the body can a goalkeeper normally use to handle the ball?",
            answers: ["Only head", "Hands", "Only feet", "Only chest"],
            correct: "Hands"
        },
        {
            question: "How many halves are there in a standard football match?",
            answers: ["2", "3", "4", "5"],
            correct: "2"
        },
        {
            question: "What is given when the ball completely crosses the goal line after touching a defender?",
            answers: ["Goal kick", "Corner kick", "Throw-in", "Penalty"],
            correct: "Corner kick"
        },
        {
            question: "What is the maximum number of players a team normally has on the field?",
            answers: ["9", "10", "11", "12"],
            correct: "11"
        },
        {
            question: "What is the restart called when the ball crosses the touchline?",
            answers: ["Corner", "Goal kick", "Throw-in", "Free kick"],
            correct: "Throw-in"
        },
        {
            question: "Which position is mainly responsible for stopping shots?",
            answers: ["Striker", "Midfielder", "Goalkeeper", "Winger"],
            correct: "Goalkeeper"
        }
    ],

    history: [
        {
            question: "In which year was the first FIFA World Cup held?",
            answers: ["1926", "1930", "1934", "1940"],
            correct: "1930"
        },
        {
            question: "Which country hosted the first FIFA World Cup?",
            answers: ["Brazil", "Italy", "Uruguay", "France"],
            correct: "Uruguay"
        },
        {
            question: "Who won the 1958 FIFA World Cup?",
            answers: ["Brazil", "Sweden", "Germany", "France"],
            correct: "Brazil"
        },
        {
            question: "Which country won the 1970 FIFA World Cup?",
            answers: ["Italy", "Brazil", "Germany", "Argentina"],
            correct: "Brazil"
        },
        {
            question: "Which country won the 1986 FIFA World Cup?",
            answers: ["Argentina", "Germany", "Brazil", "France"],
            correct: "Argentina"
        },
        {
            question: "Which country won the 1990 FIFA World Cup?",
            answers: ["Argentina", "Brazil", "Germany", "Italy"],
            correct: "Germany"
        },
        {
            question: "Which country won the 2002 FIFA World Cup?",
            answers: ["Germany", "Brazil", "France", "Italy"],
            correct: "Brazil"
        },
        {
            question: "Which country won the 2006 FIFA World Cup?",
            answers: ["Italy", "France", "Germany", "Brazil"],
            correct: "Italy"
        },
        {
            question: "Which country won the 2010 FIFA World Cup?",
            answers: ["Spain", "Netherlands", "Germany", "Brazil"],
            correct: "Spain"
        },
        {
            question: "Which country won the 2014 FIFA World Cup?",
            answers: ["Germany", "Argentina", "Brazil", "Spain"],
            correct: "Germany"
        }
    ]
};

let questions = [];
let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timer;
function shuffleQuestions(array) {
    array.sort(() => Math.random() - 0.5);
}
function startTimer() {

    clearInterval(timer);

    timeLeft = 15;
    timerElement.textContent = "⏱️ Time: " + timeLeft;

    timer = setInterval(function() {

        timeLeft--;

        timerElement.textContent = "⏱️ Time: " + timeLeft;

        if (timeLeft === 0) {

            clearInterval(timer);

            resultElement.textContent = "Time's up! ⏰";

            answerButtons.forEach(function(button) {
                button.disabled = true;

                if (button.textContent === questions[currentQuestion].correct) {
                    button.classList.add("correct");
                }
            });

            nextButton.disabled = false;
        }

    }, 1000);
}
const categoryScreen = document.getElementById("category-screen");
const quizScreen = document.getElementById("quiz-screen");
const categoryButton = document.getElementById("category-btn");

const categoryButtons = document.querySelectorAll(".category-btn");

const questionElement = document.getElementById("question");
const questionNumberElement = document.getElementById("question-number");
const categoryTitleElement = document.getElementById("category-title");
const timerElement = document.getElementById("timer");
const answerButtons = document.querySelectorAll("#answers button");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");

categoryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedCategory = button.dataset.category;

       questions = [...questionSets[selectedCategory]];

shuffleQuestions(questions);

currentQuestion = 0;
score = 0;
        categoryTitleElement.textContent = button.textContent.trim();

        categoryScreen.style.display = "none";
        quizScreen.style.display = "block";

        showQuestion();
    });

});

function showQuestion() {

    const question = questions[currentQuestion];
    const shuffledAnswers = [...question.answers];
shuffleQuestions(shuffledAnswers);

    questionNumberElement.textContent =
        "Question " + (currentQuestion + 1) + " of " + questions.length;

    questionElement.textContent = question.question;

    resultElement.textContent = "";

    answerButtons.forEach(function(button, index) {

       button.textContent = shuffledAnswers[index];

        button.disabled = false;

        button.style.display = "block";

        button.classList.remove("correct");
        button.classList.remove("wrong");

    });

    nextButton.textContent = "Next";
    nextButton.disabled = true;

    restartButton.style.display = "none";
    nextButton.style.display = "inline-block";
    startTimer();
}

answerButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const question = questions[currentQuestion];
        clearInterval(timer);

        if (button.textContent === question.correct) {

            resultElement.textContent = "Correct! ⚽";

            button.classList.add("correct");

            score++;

        } else {

            resultElement.textContent = "Wrong answer!";

            button.classList.add("wrong");
        }

        answerButtons.forEach(function(button) {

            button.disabled = true;

            if (button.textContent === question.correct) {
                button.classList.add("correct");
            }

        });

        nextButton.disabled = false;
    });

});

nextButton.addEventListener("click", function() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        questionNumberElement.textContent = "";

        questionElement.textContent = "Quiz Finished! 🏆";

        resultElement.textContent =
            "Your score is " + score + "/" + questions.length;

        answerButtons.forEach(function(button) {
            button.style.display = "none";
        });

        nextButton.style.display = "none";

        restartButton.textContent = "Play Again";

        restartButton.disabled = false;

        restartButton.style.display = "inline-block";
    }

});

restartButton.addEventListener("click", function() {

    currentQuestion = 0;
    score = 0;

    answerButtons.forEach(function(button) {
        button.style.display = "block";
        button.disabled = false;
        button.classList.remove("correct");
        button.classList.remove("wrong");
    });
   

    showQuestion();

});
categoryButton.addEventListener("click", function() {

    quizScreen.style.display = "none";
    categoryScreen.style.display = "block";

});