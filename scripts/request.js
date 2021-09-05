const wordsNumEl = document.querySelector("#words-number");

wordsNumEl.addEventListener("change", e => {
  wordsNumEl.value = e.target.value;
  startGame();
  render();
});

const getPuzzle = async (wordsNum) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordsNum}`);
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else { return ''}
};
