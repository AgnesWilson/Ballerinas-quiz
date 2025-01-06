let startTime: undefined | number;
let totalTimeInSeconds: number;

// Starts timer 
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
        // Calculates difference in seconds and rounds to whole number
        totalTimeInSeconds = Math.round((Date.now() - startTime) / 1000);
    }
}

function formatTime(seconds: number): string {
    // Calculate minutes & seconds
    const minutes = Math.round(seconds / 60);
    const remainingSeconds = seconds % 60;

    // Add padding zeros
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

export { startTimer, getTimeCount };