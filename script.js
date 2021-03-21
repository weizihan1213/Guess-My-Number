'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// function for changing the textContent of message
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

// function for changing the textContent of number
const displayNumber = number =>
  (document.querySelector('.number').textContent = number);

// function for changing the textContent of score
const displayScore = score =>
  (document.querySelector('.score').textContent = score);

// "Check!" button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there's no number
  if (!guess) {
    displayMessage('⛔ No number !');
    // When the guess number = secretNumber
  } else if (guess === secretNumber) {
    displayMessage(' 🎉 Congratulations! You make it');
    displayNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // update high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When the guess isn't equal to secretNumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess < secretNumber
          ? '😞 The number is too low'
          : '😞 The number is too high'
      );
      score -= 1;
      displayScore(score);
    } else {
      displayMessage('😢 You lost the game');
      displayScore(0);
    }
  }
});

// "Again!" button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // restore the style
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';

  // restore the initial conditions
  displayMessage('Start guessing...');
  displayNumber('?');
  document.querySelector('.guess').value = '';
  displayScore(score);
});
