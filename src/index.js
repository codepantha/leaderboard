import { submitScore, fetchScores } from './apiCalls';
import './style.css';

const submitButton = document.querySelector('.submit-btn');
const refreshButton = document.querySelector('.refresh-btn');
const nameInput = document.querySelector('input[name="name"]');
const scoreInput = document.querySelector('input[name="score"]');

fetchScores();

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const playerName = nameInput.value;
  const playerScore = scoreInput.value;

  submitScore(playerName, playerScore);
});

refreshButton.addEventListener('click', () => {
  fetchScores();
});
