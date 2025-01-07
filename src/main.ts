import '/style/style.scss';
import { getTimeCount } from './startTimeCount';
import questions from './quizQuestions.ts';
import playAgain from './playAgain.ts';
import { getRandomQuestions } from './randomQuestions.ts';
import startGame from './startGameBtn.ts';
import { ifRadioBtnHasBeenChecked, activateNextQuestionBtn } from './nextQuestionBtn';

// ------------ BUTTON VARIABLES  ------------

// Start Button 
const startBtn = document.querySelector('#startBtn') as HTMLButtonElement;

// Next Question Button 
const nextQuestionBtn = document.querySelector('#nextQuestionBtn') as HTMLButtonElement;

// Play Again Button 
const playAgainBtn = document.querySelector('#playAgainBtn') as HTMLButtonElement;

// Finish Quiz Button
const finishQuizBtn = document.querySelector('#finishQuizBtn') as HTMLButtonElement;


//  -------- PAGE / ELEMENT VARIABLES ------------

// Quiz Page
const quizPage = document.querySelector('#quizPage') as HTMLDivElement;

// Question Wrapper on Quiz page
const questionWrapper = document.querySelector('#questionContainer') as HTMLDivElement;

// Current Question on Quiz Page
const currentQuestion = document.querySelector('#currentQuestion') as HTMLDivElement;

// End Page 
const endPage = document.querySelector('#endPage') as HTMLDivElement;

// Result Container
const resultContainer = document.querySelector('#resultContainer') as HTMLDivElement;

//  -------- OTHER VARIABLES ------------

// Question array
let newQuestions = getRandomQuestions(questions); // Call randomQuestions function to draft 10 questions to use.

// Question Counter Variable
let questionCounter: number = 0;

// Result Variable
let result: number = 0;

//  -------- START GAME ------------
startBtn.addEventListener('click', startGame);
startBtn.addEventListener('click', () => {
  newQuestions = getRandomQuestions(questions);
});

// -------- CHECK IF QUIZ IS DONE -----------
function checkIfQuizIsDone() {
  if (questionCounter === 9) {
    finishQuizBtn.classList.remove('hidden');
    nextQuestionBtn.classList.add('hidden');
  } else {
    finishQuizBtn.classList.add('hidden');
    nextQuestionBtn.classList.remove('hidden');
  }
}

//  -------- NEXT QUESTION ---------
nextQuestionBtn.addEventListener('click', clickNextQuestion);

function clickNextQuestion() {
  // Find the selected radio button
  const selectedOption = document.querySelector('input[name="question"]:checked') as HTMLInputElement;

  // If an option is selected, check the answer if it matches the option
  if (selectedOption) {
    checkAnswer(selectedOption.value);
  }

  questionCounter++; // Updates the question variable / +1
  printQuestions(); // Prints the next question page
  ifRadioBtnHasBeenChecked(); // Check the next page's radio buttons to make the button inactive again
  checkIfQuizIsDone();
}

//  --------- CHECK ANSWER ---------
function checkAnswer(playerAnswer: string) {
  if (playerAnswer === newQuestions[questionCounter].correctAnswer) {
    result += 1;
  }
}

//  --------- PLAY AGAIN ---------
playAgainBtn?.addEventListener('click', () => {
  result = 0; // resets points
  questionCounter = 0; // resets questionCounter
  playAgain(); // playAgain funcion in playAgain.ts file
  checkIfQuizIsDone();
});

// --------- FINISH QUIZ BUTTON, SHOW END PAGE ---------

// when finish quiz btn is clicked, quiz page is hidden and end page is shown. Result is printed
finishQuizBtn.addEventListener('click', () => {
  const selectedOption = document.querySelector('input[name="question"]:checked') as HTMLInputElement;
  // If an option is selected, check the answer if it matches the option
  if (selectedOption) {
    checkAnswer(selectedOption.value);
  }
  getTimeCount();
  quizPage.classList.add('hidden');
  endPage.classList.remove('hidden');
  const time = getTimeCount();
  resultContainer.innerHTML = `Du fick ${result} av 10 rätt! <span class="time">Din tid blev ${time} min</span>`;
});

// --------- PRINT QUESTION ---------

function printQuestions() {
  questionWrapper.innerHTML = `
    <form id="questionForm">
    <fieldset>
      <legend>${newQuestions[questionCounter].questionText}</legend>
      <label>
        <input type="radio" name="question" id="q1" value="${newQuestions[questionCounter].answerOptionA}">
        ${newQuestions[questionCounter].answerOptionA}
      </label>
      <label>
        <input type="radio" name="question" id="q2" value="${newQuestions[questionCounter].answerOptionB}">
        ${newQuestions[questionCounter].answerOptionB}
      </label>
      <label>
        <input type="radio" name="question" id="q3" value="${newQuestions[questionCounter].answerOptionC}">
        ${newQuestions[questionCounter].answerOptionC}
      </label>
    </fieldset>
  </form>`;

  // Show and update current question in html
  currentQuestion.innerHTML = `<span>Fråga</span><span>${questionCounter + 1}/10</span>`;

  activateNextQuestionBtn();
}

playAgainBtn.addEventListener('click', printQuestions);

// Exports printQuestions to startGameBtn.ts
export default printQuestions;
