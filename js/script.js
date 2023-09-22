const scoreboardContainer = document.getElementById('scoreboard-container');
const addScoreboardButton = document.getElementById('add-scoreboard');
const totalScoreInput = document.getElementById('total-score');

const scoreInputs = []; // Array to store all score inputs

// Function to create a new scoreboard
function createScoreboard() {
    const scoreboard = document.createElement('div');
    scoreboard.classList.add('scoreboard');

    const decreaseButton = document.createElement('button');
    decreaseButton.classList.add('decrease');
    decreaseButton.textContent = '-';

    const scoreInput = document.createElement('input');
    scoreInput.type = 'text';
    scoreInput.classList.add('score');
    scoreInput.value = '0';

    const increaseButton = document.createElement('button');
    increaseButton.classList.add('increase');
    increaseButton.textContent = '+';

    scoreboard.appendChild(decreaseButton);
    scoreboard.appendChild(scoreInput);
    scoreboard.appendChild(increaseButton);

    scoreboardContainer.appendChild(scoreboard);

    // Add event listeners to the new scoreboard
    decreaseButton.addEventListener('click', () => {
        const currentValue = parseInt(scoreInput.value);
        scoreInput.value = currentValue - 1;
        updateTotalScore();
    });

    increaseButton.addEventListener('click', () => {
        const currentValue = parseInt(scoreInput.value);
        scoreInput.value = currentValue + 1;
        updateTotalScore();
    });

    // Add the new score input to the array
    scoreInputs.push(scoreInput);

    // Update the total score with all scoreboards
    updateTotalScore();
}

// Function to calculate and update the total score
function updateTotalScore() {
    let total = 0;

    scoreInputs.forEach((input) => {
        total += parseInt(input.value);
    });

    totalScoreInput.value = total;
}

// Event listener for the "Add Scoreboard" button
addScoreboardButton.addEventListener('click', () => {
    createScoreboard();
});

// Add event listeners to the buttons on the first scoreboard
const firstDecreaseButton = document.querySelector('.scoreboard .decrease');
const firstIncreaseButton = document.querySelector('.scoreboard .increase');
const firstScoreInput = document.querySelector('.scoreboard .score');

firstDecreaseButton.addEventListener('click', () => {
    const currentValue = parseInt(firstScoreInput.value);
    firstScoreInput.value = currentValue - 1;
    updateTotalScore();
});

firstIncreaseButton.addEventListener('click', () => {
    const currentValue = parseInt(firstScoreInput.value);
    firstScoreInput.value = currentValue + 1;
    updateTotalScore();
});

// Initialize total score with the first scoreboard
scoreInputs.push(firstScoreInput);
updateTotalScore();