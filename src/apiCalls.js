import { displayMessage, displayScores } from './display';

const gameId = 'tQo0GjRZGIHYnc4PyMKb';

export const submitScore = async (name, score) => {
  const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: name,
      score,
    }),
  });

  const data = await res.json();
  displayMessage(data.result);
};

export const fetchScores = async () => {
  const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
  const data = await res.json();

  let scores = data.result;
  scores = scores.sort((a, b) => b.score - a.score);
  displayScores(scores);
};