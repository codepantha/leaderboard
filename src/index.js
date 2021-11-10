import './style.css';


const submitButton = document.querySelector('.submit-btn');
const refreshButton = document.querySelector('.refresh-btn');
const nameInput = document.querySelector('input[name="name"]');
const scoreInput = document.querySelector('input[name="score"]');
const formContainer = document.querySelector('.score-form');
const scoresContainer = document.querySelector('.scores-list');

const gameId = '3L4QvyqAZFTD6eSge8xk';



const displayScores = (scores) => {
  scoresContainer.innerHTML = '';

  scores.forEach((score, index) => {
    scoresContainer.innerHTML += `<li class="score-item ${index % 2 ? 'ash' : ''}">
      ${score.user}: ${score.score}
    </li>`
  })
}

const displayMessage = (msg) => {
  const span = document.createElement('span');
  span.innerHTML = msg;
  span.style.display = 'block';
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

const fetchScores = async function() {
  const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
  const data = await res.json();
  
  const scores = data.result;
  displayScores(scores);
}

fetchScores();

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const playerName = nameInput.value;
  const playerScore = scoreInput.value;

  submitScore(playerName, playerScore);
})

refreshButton.addEventListener('click', () => {
  fetchScores();
})
