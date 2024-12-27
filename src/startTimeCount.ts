let startTime: undefined | number;
let totalTimeInSeconds: number;

// Startar timer 
function startTimer(): void {
    startTime = Date.now();
}

// end timer + get result
function getTimeCount(): string {
    endTimer();
    const totalTime: string = formatTime(totalTimeInSeconds);
    return totalTime;
}

function endTimer(): void {
    if (startTime !== undefined) {
        // Beräkna skillnaden i sekunder och avrunda till ett heltal
        totalTimeInSeconds = Math.round((Date.now() - startTime) / 1000);
    }
}

function formatTime(seconds: number): string {
    // Beräkna minuter och sekunder
    const minutes = Math.round(seconds / 60);
    const remainingSeconds = seconds % 60;

    // Lägg till ledande nollor om det behövs
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

export { startTimer, getTimeCount };