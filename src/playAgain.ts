// ----- PLAY AGAIN FUNCTION -----
// When executed - Hide end-page and go back to start-page by using the hide class. Reset the points to 0.

function playAgain(): void {
    const startPage = document.querySelector('#startPage');
    const endPage = document.querySelector('#endPage');

    if (endPage && startPage) {
        endPage.classList.add("hidden"); // Hide End Page
        startPage.classList.remove("hidden"); // Show Start Page
    } 
}

export default playAgain;