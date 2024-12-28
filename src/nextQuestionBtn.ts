// exchange these when real answers have been added and change the "as HTML" to TS?? 
const q1 = document.querySelector('#q1') as HTMLInputElement;
const q2 = document.querySelector('#q2') as HTMLInputElement;
const q3 = document.querySelector('#q3') as HTMLInputElement;

// Activate the next-question button when the user chooses an answer
function ifRadioBtnHasBeenChecked() {
    const nextQuestionBtn = document.querySelector('#nextQuestionBtn') as HTMLButtonElement;

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
    q1.addEventListener('click', ifRadioBtnHasBeenChecked);
    q2.addEventListener('click', ifRadioBtnHasBeenChecked);
    q3.addEventListener('click', ifRadioBtnHasBeenChecked);
}

// Exportera funktionen som default
export default activateNextQuestionBtn;

// AGNES NOTES 
// when the questions have been printed/added go through this again and  update the q1-q3 variables 
// Also check if the event-listeners have been added/if they should be global in the main instead 

// CARL NOTES
// The check answer function chouls most likely live here. so that the user flow becomes:
// user chose answer with radio button -> next question button get activated -> user clicks next question buttton ->
// functions for next question becomes: 1. checks if answer is correct 2. updates points counter 3. updates questio counter
// 4. prints page with questions

