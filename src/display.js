const formContainer = document.querySelector('.score-form');
const scoresContainer = document.querySelector('.scores-list');

export const displayScores = (scores) => {
  scoresContainer.innerHTML = '';

  scores.forEach((score, index) => {
    scoresContainer.innerHTML += `<li class="score-item ${index % 2 ? 'ash' : ''}">
      ${score.user}: ${score.score}
    </li>`;
  });
};

export const displayMessage = (msg) => {
  const span = document.createElement('span');
  span.innerHTML = msg;
  span.style.display = 'block';
  formContainer.append(span);
};
