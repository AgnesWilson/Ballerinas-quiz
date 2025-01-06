import { startTimer } from './startTimeCount';
import printQuestions from './main';

function startGame(): void {
    const startPage = document.querySelector('#startPage') as HTMLDivElement;
    const quizPage = document.querySelector('#quizPage') as HTMLDivElement;

        startPage.classList.add("hidden"); // Hide start-page
        quizPage.classList.remove("hidden"); // Show quiz-page 

        startTimer(); 
        printQuestions();
};

export default startGame;

