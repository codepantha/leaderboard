import './style.css';

const submitButton = document.querySelector('.submit-btn');
const nameInput = document.querySelector('input[name="name"]');
const scoreInput = document.querySelector('input[name="score"]');
const formContainer = document.querySelector('.score-form');

const gameId = '3L4QvyqAZFTD6eSge8xk';

const displayMessage = (msg) => {
  const span = document.createElement('span');
  span.innerHTML = msg;
  formContainer.append(span);
}

async function submitScore(name, score) {
  const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "user": name,
      "score": score
    })
  });
  
  const data = await res.json();
  displayMessage(data.result);
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const playerName = nameInput.value;
  const playerScore = scoreInput.value;

  submitScore(playerName, playerScore);
})



