
const startBtn = document.querySelector('#startBtn');
const endBtn = document.querySelector('#finishQuizBtn');
// const timeSpan = document.querySelector('#timeCountContainer');
const timeResult = document.querySelector('#time-result');
startBtn?.addEventListener('click', startTimer);
endBtn?.addEventListener('click', getTimeCount);

let startTime: undefined | number;
let minutes: undefined | number;
let seconds: undefined | number;

// Startar timer 
function startTimer(): void {
    startTime = Date.now();
}

// const time = setInterval(() => {
//     if (startTime !== undefined) {
//         const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
//         if (timeSpan !== null) {
//             timeSpan.innerHTML = `${elapsedSeconds}`;
//         }
//     }
// }, 1000);

function getTimeCount(): void {
    if (startTime !== undefined) {
        // Beräkna skillnaden i millisekunder
        const elapsedMilliseconds = Date.now() - startTime;
        // Konvertera till sekunder
        const totalSeconds = Math.floor(elapsedMilliseconds / 1000);
        // Beräkna minuter och sekunder
        minutes = Math.floor(totalSeconds / 60);
        seconds = totalSeconds % 60;
        // clearInterval(time);
    }
    const timeCount = `${minutes}:${seconds}`;
    if (timeResult !== null) {
        timeResult.innerHTML += `${timeCount} sekunder`;
    }
}

export default getTimeCount;