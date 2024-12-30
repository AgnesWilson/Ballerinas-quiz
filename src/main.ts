import '/style/style.scss';
import { getTimeCount } from './startTimeCount';
import questions from './quizQuestions.ts';
import playAgain from "./playAgain.ts";
import { getRandomQuestions } from './randomQuestions.ts';
import startGame from './startGameBtn.ts';
import activateNextQuestionBtn from './nextQuestionBtn';

// Start Game Button
const startBtn = document.querySelector('#startBtn') as HTMLButtonElement;
startBtn.addEventListener('click', startGame);

const playAgainBtn = document.querySelector('#playAgainBtn') as HTMLButtonElement;

// Finish button
const endBtn = document.querySelector('#finishQuizBtn');
endBtn?.addEventListener('click', getTimeCount);

// Play Again - Eventlistener
playAgainBtn?.addEventListener('click', playAgain); // playAgain funcion in playAgain.ts file

// ////////////// FINISH QUIZ BUTTON, SHOW END PAGE ////////////////////// 

const quizPage = document.querySelector('#quizPage') as HTMLDivElement;
const endPage = document.querySelector('#endPage') as HTMLDivElement;
const finishQuizBtn = document.querySelector('#finishQuizBtn') as HTMLButtonElement;
const resultContainer = document.querySelector('#resultContainer') as HTMLDivElement;

let result = 0; 

// when finsih quiz btn is clicked, quiz page is hidden and end page is shown. Result is printed
finishQuizBtn.addEventListener('click', () => {
    quizPage.classList.add('hidden');
    endPage.classList.remove('hidden');
    const time = getTimeCount();
    console.log(time);
    resultContainer.innerHTML = `Du fick ${result} av 10 rätt! Din tid blev ${time} min`;

    // add later: stop timer when finish quiz btn is clicked
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



    // This checks the answer 

    const answer = document.querySelectorAll('input') as NodeListOf<HTMLInputElement>; // Access all inputs


    // Listens to all inputs for change
    answer.forEach((radioBtn) => {
        radioBtn.addEventListener('change', checkAnswer);

    });
    
    activateNextQuestionBtn();


}




/* -----------------------------------------------------------------------
--------------------------- Answer check function ---------------------------
----------------------------------------------------------------------- */

// If answer is correct updates result with one

function checkAnswer(e: Event) {
    
    const playerAnswer = e.target as HTMLInputElement;

    if (playerAnswer.value === newQuestions[questionCounter].correctAnswer) {
        result += 1;
        console.log(result);
    };

}

playAgainBtn.addEventListener('click', printQuestions);


startBtn.addEventListener('click', printQuestions);


//Exports printQuestions to startGameBtn.ts 
export default printQuestions;
