import '/style/style.scss';

import playAgain from "./playAgain.ts";
import activateNextQuestionBtn from './nextQuestionBtn';

activateNextQuestionBtn();

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
