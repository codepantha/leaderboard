const formContainer = document.querySelector('.score-form');
const scoresContainer = document.querySelector('.scores-list');

export const displayScores = (scores) => {
  scoresContainer.innerHTML = '';

  scores.forEach((score, index) => {
    scoresContainer.innerHTML += `<li class="score-item">
      ${score.user}: ${score.score}
    </li>`;
  });
};

export const displayMessage = (msg) => {
  const span = document.createElement('span');
  span.classList.add("success", "notification");

  if (msg === undefined) {
    span.classList.toggle("success");
    msg = "Ooops! Something went wrong."
  } else {
    msg = "Score submitted successfully!"
  }

  span.innerHTML = msg;
  span.style.display = 'block';
  formContainer.append(span);

  setTimeout(() => {
    span.parentElement.removeChild(span);
  }, 3000)
};
