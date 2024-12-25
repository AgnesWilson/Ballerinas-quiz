
function startGame(): void {
    const startPage = document.querySelector('#startPage') as HTMLDivElement;
    const quizPage = document.querySelector('#quizPage') as HTMLDivElement;

        startPage.classList.add("hidden"); // Hide start-page
        quizPage.classList.remove("hidden"); // Show quiz-page

        //randomQuestions();
        //startTimeCount(); 
        //printQuestions();
        //questionCounter();
};

export default startGame;