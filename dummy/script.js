// Get the card grid and cards
const cardGrid = document.querySelector('.card-grid');
const cards = document.querySelectorAll('.card');

// Function to slide the cards
function slideCards() {
    let currentIndex = 0;
    let cardsToShow = 3;
    let interval = setInterval(() => {
        // Hide all cards
        cards.forEach(card => card.classList.remove('show'));

        // Show the next 3 cards
        for (let i = currentIndex; i < currentIndex + cardsToShow; i++) {
            cards[i].classList.add('show');
        }

        // Move to the next set of cards
        currentIndex += cardsToShow;
        if (currentIndex >= cards.length) {
            currentIndex = 0;
        }
    }, 2000);
}

// Add event listener to slide the cards on page load
document.addEventListener('DOMContentLoaded', () => {
    // Show the first 3 cards
    for (let i = 0; i < 3; i++) {
        cards[i].classList.add('show');
    }
    slideCards();
});