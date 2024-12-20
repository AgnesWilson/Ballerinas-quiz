// ----- PLAY AGAIN FUNCTION -----
// When executed - Hide end-page and go back to start-page by using the hide class. Reset the points to 0.

function playAgain(): void {
    const startPage = document.querySelector('#startPage');
    const endPage = document.querySelector('#endPage');

    if (endPage && startPage) {
        endPage.classList.add("hidden"); // Hide End Page
        startPage.classList.remove("hidden"); // Show Start Page
    } else {
        console.error("Start or End page cant be found. Check ID and Selectors."); // Show error if pages can't be found.
    }

    // TODO: Add reset of Points variable whene it has been set. For now, only console log!
    console.log("Points set to 0");
}

export default playAgain;