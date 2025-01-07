// Module for activating next question button
const nextQuestionBtn = document.querySelector('#nextQuestionBtn') as HTMLButtonElement;
const finishQuizBtn = document.querySelector('#finishQuizBtn') as HTMLButtonElement;

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
        finishQuizBtn.disabled = false;
    } else {
        nextQuestionBtn.disabled = true;
        finishQuizBtn.disabled = true;
    }
}

// Event-listeners for radio-btns
function activateNextQuestionBtn() {
    // declaring q1-q3 again since they were declared inside the ifRadioBtnHasBeenChecked() 
    // and not globally in this module like they were before 
    const q1 = document.querySelector('#q1') as HTMLInputElement;
    const q2 = document.querySelector('#q2') as HTMLInputElement;
    const q3 = document.querySelector('#q3') as HTMLInputElement;

    q1.addEventListener('click', ifRadioBtnHasBeenChecked);
    q2.addEventListener('click', ifRadioBtnHasBeenChecked);
    q3.addEventListener('click', ifRadioBtnHasBeenChecked);
}

export { activateNextQuestionBtn, ifRadioBtnHasBeenChecked };