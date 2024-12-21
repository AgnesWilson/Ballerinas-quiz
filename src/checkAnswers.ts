/* -----------------------------------------------------------------------
--------------------------- Oskar gör koden nedan i printPage-------------------
----------------------------------------------------------------------- */

// Liten array för test
const questions = [
    {
        id: 3,
        questionText: 'Vilket kex företag tillverkar Ballerina kexet?',
        answerOptionA: 'Marabou',
        answerOptionB: 'Göteborgs Kex',
        answerOptionC: 'Cloetta',
        correctAnswer: 'Göteborgs Kex',
        isPlayed: false,
    },
];


const questionSection = document.querySelector('#container'); // access html section
let question = questions[0]; // Makes the first question in the array variable

/* Prints one question from array */
function printQuestions() {

    if (questionSection === null){
        return;
    }
    
    questionSection.innerHTML = ''; // Clears the div each time

    // Writes out the question with the info from the array
    questionSection.innerHTML += ` 

    ${questions[0].questionText}
    <br>

    <label>
        <input type="radio" name="quizQuestionA" value="${question.answerOptionA}" id="questionRadioBtn">
        <span>${question.answerOptionA}</span>
    </label>
    <br>
    <label>
        <input type="radio" name="quizQuestionA" value="${question.answerOptionB}" id="questionRadioBtn">
        <span>${question.answerOptionB}</span>
    </label>
    <br>
    <label>
        <input type="radio" name="quizQuestionA" value="${question.answerOptionC}" id="questionRadioBtn">
        <span>${question.answerOptionC}</span>
    </label>
    <br>

`;
    
}

printQuestions(); // Loads all questions into the html

/* -----------------------------------------------------------------------
--------------------------- detta ska in i main---------------------------
----------------------------------------------------------------------- */

const answer = document.querySelectorAll('input') as NodeListOf<HTMLInputElement>; // Access all inputs

// Listens to all inputs for change
answer.forEach((radioBtn) => {
    radioBtn.addEventListener('change', checkAnswer);

});


/* -----------------------------------------------------------------------
--------------------------- detta stannar i modulen ---------------------------
----------------------------------------------------------------------- */

// checks if user chosen input is the correct answer


function checkAnswer(e: Event) {

    const playerAnswer = e.target as HTMLInputElement;

    if (playerAnswer.value === question.correctAnswer) {
        console.log(playerAnswer.value);
    } else {
        console.error('Answer is null');
    };

}

export default checkAnswer; // is this correxct??
