// import { questionCounter } from './main';
import printQuestions from "./main";
const nextQuestionBtn = document.querySelector('#nextQuestionBtn') as HTMLButtonElement;
let questionCounter: number = 0; // Placeholder variable for count to use as index finder

// EVENT FOR NEXT QUESTION BUTTON
nextQuestionBtn.addEventListener('click', (event) => {
    questionCounter++; // Updates current question variable
    console.log('Ställda frågor ',questionCounter); 
    printQuestions(); // Prints the next question page
    ifRadioBtnHasBeenChecked(); // Check next question's radio buttons to make button inactive
})

/* -----------------------------------------------------------------------
---- Activate the next-question button when the user chooses an answer ---
---------------------------- Two functions ---------------------------- */

function ifRadioBtnHasBeenChecked() {
    // Declaring the q1-q3 inside the function 
    const q1 = document.querySelector('#q1') as HTMLInputElement;
    const q2 = document.querySelector('#q2') as HTMLInputElement;
    const q3 = document.querySelector('#q3') as HTMLInputElement;


    // IF any of the buttons q1-q3 is checked
    // THEN make the disable button false, so it can be clicked
    // ELSE the button is disabled and not clickable
    if (q1.checked || q2.checked || q3.checked) {
        nextQuestionBtn.disabled = false;
    } else {
        nextQuestionBtn.disabled = true;
    }
}

// Event-listeners for radio-btns
function activateNextQuestionBtn() {
    // declaring q1-q3 againn since they were declared inside the ifRadioBtnHasBeenChecked() 
    // and not globally in this module like they were before 
    const q1 = document.querySelector('#q1') as HTMLInputElement;
    const q2 = document.querySelector('#q2') as HTMLInputElement;
    const q3 = document.querySelector('#q3') as HTMLInputElement;

    q1.addEventListener('click', ifRadioBtnHasBeenChecked);
    q2.addEventListener('click', ifRadioBtnHasBeenChecked);
    q3.addEventListener('click', ifRadioBtnHasBeenChecked);
}

// Exportera funktionen som default

// CARL NOTES
// The check answer function chouls most likely live here. so that the user flow becomes:
// user chose answer with radio button -> next question button get activated -> user clicks next question buttton ->
// functions for next question becomes: 1. checks if answer is correct 2. updates points counter 3. updates questio counter
// 4. prints page with questions

export { questionCounter, activateNextQuestionBtn };