const text = document.querySelector("#remaining-guesses");
let game1;

const render = () => {
  text.textContent = `Guesses Left: ${game1.remainingGuesses}.`;
  game1.puzzleSpan();
};

const startGame = async () => {
  const puzzle = await getPuzzle(wordsNumEl.value);
  game1 = new Hangman(puzzle, puzzle.length > 15 ? 5 : (puzzle.length < 6 ? 2 : Math.round(puzzle.length / 3)));
  render();
};

document.querySelector("#new-game").addEventListener("click", startGame);

function keyDown(e) {
  const guess = String.fromCharCode(e.charCode);
  game1.remainingGuesses <= 0 ? "" : game1.makeGuess(guess);
  render();

  if (game1.word.every( x => game1.guessedLetters.includes(x))) {
    text.textContent = "Good Work! You Made It.";
    setTimeout(() => startGame(), 2000);
  } else if (game1.remainingGuesses <= 0) {
    text.textContent = `Nice Try It Was "${game1.word.join("")}".`;
    setTimeout(() => startGame(), 2000);
  }
}

window.addEventListener("keypress", keyDown);

startGame();
