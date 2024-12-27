import '/style/style.scss';
import questions from './quizQuestions.ts';
import playAgain from "./playAgain.ts";
import { getRandomQuestions } from './randomQuestions.ts';
import startGame from './startGameBtn.ts';

//Start Game Button
const startBtn = document.querySelector('#startBtn') as HTMLButtonElement;
startBtn.addEventListener('click', startGame);

import activateNextQuestionBtn from './nextQuestionBtn';

// ; Commented this out because it threw an error, couldn't test code. 

// Play Again Button
const playAgainBtn = document.querySelector('#playAgainBtn') as HTMLButtonElement;
// Play Again - Eventlistener
playAgainBtn.addEventListener('click', playAgain); // playAgain funcion in playAgain.ts file


////////////////FINISH QUIZ BUTTON, SHOW END PAGE//////////////////////

const quizPage = document.querySelector('#quizPage') as HTMLDivElement;
const endPage = document.querySelector('#endPage') as HTMLDivElement;
const finishQuizBtn = document.querySelector('#finishQuizBtn') as HTMLButtonElement;
const resultContainer = document.querySelector('#resultContainer') as HTMLDivElement;
let result = 7; //temporary result variable, change later
let time = 3.12 //temporary time variable, change later

//when finsih quiz btn is clicked, quiz page is hidden and end page is shown. Result is printed
finishQuizBtn.addEventListener('click', () => {
    quizPage.classList.add('hidden');
    endPage.classList.remove('hidden');
    resultContainer.innerHTML = `Du fick ${result} av 10 rätt! Din tid blev ${time} min`;

    //add later: stop timer when finish quiz btn is clicked
})


// ################################################### //
// ####################### PRINT ##################### //
// ################################################### //
const newQuestions = getRandomQuestions(questions); // Call randomQuestions function to draft 10 questions to use.

let questionCounter: number = 0; // Placeholder variable for count to use as index finder
const questionWrapper = document.querySelector("#questionContainer") as HTMLDivElement;

function printQuestions() {
    questionWrapper.innerHTML = `
    <form id="questionForm">
    <fieldset>
      <legend>${newQuestions[questionCounter].questionText}</legend>
      <label>
        <input type="radio" name="question" id="q1">
        ${newQuestions[questionCounter].answerOptionA}
      </label>
      <label>
        <input type="radio" name="question" id="q2">
        ${newQuestions[questionCounter].answerOptionB}
      </label>
      <label>
        <input type="radio" name="question" id="q3">
        ${newQuestions[questionCounter].answerOptionC}
      </label>
    </fieldset>
  </form>`;

  activateNextQuestionBtn()
}

startBtn.addEventListener('click', printQuestions);
playAgainBtn.addEventListener('click', printQuestions);