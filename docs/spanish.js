// accent e = \xE9
// accent a = \xE1

var clickedButton;
const words = [
    { spanish: 'ar\xE1', english: '\xC9l/Ella/Usted (AR)' },
    { spanish: 'ar\xE9', english: 'Yo (AR)' },
    { spanish: 'er\xE9', english: 'Yo (ER)' },
    { spanish: 'er\xE1s', english: 'T\xFA (ER)' },
    { spanish: 'aremos', english: 'Nosotros (AR)' },
    { spanish: 'er\xE1n', english: 'Ellos/Ellas/Ustedes (ER)' },
    { spanish: 'eremos', english: 'Nosotros (ER)' },
    { spanish: 'ar\xE1s', english: 'T\xFA (AR)' },
    { spanish: 'ar\xE1n', english: 'Ellos/Ellas/Ustedes (AR)' },
    { spanish: 'er\xE1n', english: '\xC9l/Ella/Usted (ER)' },
    { spanish: 'ir\xE1', english: '\xC9l/Ella/Usted (IR)' },
    { spanish: 'er\xE9', english: 'Yo (IR)' },
    { spanish: 'ir\xE1s', english: 'T\xFA (IR)' },
    { spanish: 'ir\xE1n', english: 'Ellos/Ellas/Ustedes (IR)' },
    { spanish: 'iremos', english: 'Nosotros (IR)' },
    { spanish: 'ar\xE9is', english: 'Vosotros (AR)' },
    { spanish: 'er\xE9is', english: 'Vosotros (ER)' },
    { spanish: 'ir\xE9is', english: 'Vosotros (IR)' }
];

function shuffle(array) {
    
    array.sort(() => Math.random() - 0.5);
  }

  shuffle(words);

var optionsContainer = document.getElementById('options-container');
var optionButtons = words.map(word => {
    var button = document.createElement('button');
    button.textContent = word.english;
    button.addEventListener('click', () => checkAnswer(word.english));
    optionsContainer.appendChild(button);
    return button;
});

shuffle(words);

var currentQuestionIndex = 0;
var score = 0;

var questionElement = document.getElementById('question');
var feedbackElement = document.getElementById('feedback');
var scoreElement = document.getElementById('score');

function displayQuestion() {
    var currentQuestion = words[currentQuestionIndex];
    questionElement.textContent = currentQuestion.spanish;

    

}

function checkAnswer(selectedAnswer) {
    var currentQuestion = words[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.english) {
        score++;
        feedbackElement.textContent = 'Correct!';
        console.log(currentQuestionIndex)
        
        clickedButton = Array.from(optionsContainer.children).find(button => button.textContent === selectedAnswer);
        clickedButton.classList.add('answered');
        clickedButton.disabled = true;
    } else {
        feedbackElement.textContent = `Incorrect. The correct answer is ${currentQuestion.english}.`;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < words.length) {
        displayQuestion();
    } else {
        endQuiz();
    }

    scoreElement.textContent = `Score: ${score}`;
}

function endQuiz() {
    questionElement.textContent = 'Quiz Completed!';
    optionsContainer.innerHTML = '';
    feedbackElement.textContent = '';
    scoreElement.textContent = `Final Score: ${score}`;
}



// Initial display
displayQuestion();
