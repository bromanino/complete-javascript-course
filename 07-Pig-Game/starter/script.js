'use strict';

// Selecting Elements
const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');
let currentScorePlayerOne = document.getElementById('current--0');
let currentScorePlayerTwo = document.getElementById('current--1');
const scorePlayerOne = document.getElementById('score--0');
const scorePlayerTwo = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

// Declaring variables
let currentScore, activePlayer, playing, scores;

// Starting conditions
const init = function () {
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  scores = [0, 0];

  scorePlayerOne.textContent = 0;
  scorePlayerTwo.textContent = 0;
  currentScorePlayerOne.textContent = 0;
  currentScorePlayerTwo.textContent = 0;
  
  dice.classList.add('hidden');
  const winner = document.querySelector('.player--winner');
  if (winner) winner.classList.remove('player--winner');
  playerOne.classList.add('player--active')
};
init();

// Rolling dice functionality
buttonRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate random dice roll
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice roll
    dice.classList.remove('hidden');
    dice.src = `dice-${diceRoll}.png`;
    // 3. Is it a 1? If false, add dice to current score and display new score
    if (diceRoll !== 1) {
      currentScore += diceRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //3. Is it a 1? If true, swtich to next player
    } else {
      switchPlayer();
    }
  }
});

// Holding score functionality
buttonHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Player won if score is 30 or more
    if (scores[activePlayer] >= 30) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

// Resetting the game
buttonNew.addEventListener('click', init);

// Switching between players
function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
    console.log("amend")
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerOne.classList.toggle('player--active');
  playerTwo.classList.toggle('player--active');
}
