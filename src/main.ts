import '/style/style.scss';
import { getTimeCount } from './startTimeCount';
import questions from './quizQuestions.ts';
import playAgain from './playAgain.ts';
import { getRandomQuestions } from './randomQuestions.ts';
import startGame from './startGameBtn.ts';
import { ifRadioBtnHasBeenChecked, activateNextQuestionBtn } from './nextQuestionBtn';

// Question Counter Variable
let questionCounter: number = 0; 

// Result Variable
let result: number = 0;

//  -------- START GAME ------------

const startBtn = document.querySelector('#startBtn') as HTMLButtonElement;
startBtn.addEventListener('click', startGame);

//  -------- NEXT QUESTION ---------

const nextQuestionBtn = document.querySelector('#nextQuestionBtn') as HTMLButtonElement;
nextQuestionBtn.addEventListener('click', clickNextQuestion);

function clickNextQuestion() {
  // Find the selected radio button
  const selectedOption = document.querySelector('input[name="question"]:checked') as HTMLInputElement;

  // If an option is selected, check the answer if it matches the option
  if (selectedOption) {
    checkAnswer(selectedOption.value);
  }

  questionCounter++; // Updates the question variable / +1
  console.log('Ställda frågor: ', questionCounter);
  printQuestions(); // Prints the next question page
  ifRadioBtnHasBeenChecked(); // Check the next page's radio buttons to make the button inactive again
}

//  -------- CHECK ANSWER ---------

function checkAnswer(playerAnswer: string) {
  if (playerAnswer === newQuestions[questionCounter].correctAnswer) {
    result += 1;
    console.log('Correct! Current result:', result);
  } else {
    console.log('Wrong! Current result:', result);
  }
}

//  -------- PLAY AGAIN ---------
const playAgainBtn = document.querySelector('#playAgainBtn') as HTMLButtonElement;
playAgainBtn?.addEventListener('click', playAgain); // playAgain funcion in playAgain.ts file

//  -------- FINNISH BTN ---------
const endBtn = document.querySelector('#finishQuizBtn'); // DUPLICATE?!? Finish  Quiz  button below - row 65
endBtn?.addEventListener('click', getTimeCount);

/* -----------------------------------------------------------------------
------------------ FINISH QUIZ BUTTON, SHOW END PAGE -----------------
----------------------------------------------------------------------- */

const quizPage = document.querySelector('#quizPage') as HTMLDivElement;
const endPage = document.querySelector('#endPage') as HTMLDivElement;
const finishQuizBtn = document.querySelector('#finishQuizBtn') as HTMLButtonElement;
const resultContainer = document.querySelector('#resultContainer') as HTMLDivElement;


// when finsih quiz btn is clicked, quiz page is hidden and end page is shown. Result is printed
finishQuizBtn.addEventListener('click', () => {
  quizPage.classList.add('hidden');
  endPage.classList.remove('hidden');
  const time = getTimeCount();
  console.log(time);
  resultContainer.innerHTML = `Du fick ${result} av 10 rätt! Din tid blev ${time} min`;
});

/* -----------------------------------------------------------------------
--------------------------- PRINT QUESTION ---------------------------
----------------------------------------------------------------------- */
const newQuestions = getRandomQuestions(questions); // Call randomQuestions function to draft 10 questions to use.

const questionWrapper = document.querySelector('#questionContainer') as HTMLDivElement;
const currentQuestion = document.querySelector('#currentQuestion') as HTMLDivElement;

function printQuestions() {
  questionWrapper.innerHTML = `
    <form id="questionForm">
    <fieldset>
      <legend>${newQuestions[questionCounter].questionText}</legend>
      <br>
      <label>
        <input type="radio" name="question" id="q1" value="${newQuestions[questionCounter].answerOptionA}">
        ${newQuestions[questionCounter].answerOptionA}
      </label>
      <br>
      <label>
        <input type="radio" name="question" id="q2" value="${newQuestions[questionCounter].answerOptionB}">
        ${newQuestions[questionCounter].answerOptionB}
      </label>
      <br>
      <label>
        <input type="radio" name="question" id="q3" value="${newQuestions[questionCounter].answerOptionC}">
        ${newQuestions[questionCounter].answerOptionC}
      </label>
      <br>
    </fieldset>
  </form>`;

  // Show and update current question in html
  currentQuestion.innerHTML = `<span>Fråga ${questionCounter + 1}</span>`;

  activateNextQuestionBtn();
}

playAgainBtn.addEventListener('click', printQuestions);

// Exports printQuestions to startGameBtn.ts
export default printQuestions;
