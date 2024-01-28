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

// Starting conditions
scorePlayerOne.textContent = 0;
scorePlayerTwo.textContent = 0;
dice.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];

// Rolling dice functionality
buttonRoll.addEventListener('click', function () {
  // 1. Generate random dice roll
  const diceRoll = Math.trunc(Math.random() * 6) + 1;
  console.log(diceRoll);
  // 2. Display dice roll
  dice.classList.remove('hidden');
  dice.src = `dice-${diceRoll}.png`;
  // 3. Is it a 1? If false, add dice to current score
  if (diceRoll !== 1) {
    currentScore += diceRoll;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    //3. Is it a 1? If true, swtich to next player
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerOne.classList.toggle('.player--active');
    playerTwo.classList.toggle('.player--active');
  }
});
