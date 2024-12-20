import '/style/style.scss';

import playAgain from "./playAgain.ts";


// Play Egain Button
const playAgainBtn = document.querySelector('#playAgainBtn');
// Play Again - Eventlistener
playAgainBtn.addEventListener('click', playAgain); // playAgain funcion in playAgain.ts file
