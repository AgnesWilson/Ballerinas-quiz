import { startTimer } from './startTimeCount';
import printQuestions from './main';

function startGame(): void {
    const startPage = document.querySelector('#startPage') as HTMLDivElement;
    const quizPage = document.querySelector('#quizPage') as HTMLDivElement;

        startPage.classList.add("hidden"); // Hide start-page
        quizPage.classList.remove(""); // Show quiz-page // AGNES: lägg tillbaka hidden inom paranteserna! 

        startTimer(); 
        printQuestions();
        // questionCounter(); ??
};

export default startGame;

