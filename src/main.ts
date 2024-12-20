import '/style/style.scss';
import './startTimeCount';

import playAgain from "./playAgain.ts";


// Play Egain Button
const playAgainBtn = document.querySelector('#playAgainBtn');
// Play Again - Eventlistener
playAgainBtn.addEventListener('click', playAgain); // playAgain funcion in playAgain.ts file
