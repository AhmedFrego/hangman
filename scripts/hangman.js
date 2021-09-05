class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [" "];
  }
  getPuzzle() {
    let puzzle = "";
    this.word.length === 0 ? puzzle = "sorry! can't fitch data" :
    this.word.forEach((letter) => {
      this.guessedLetters.includes(letter) ? (puzzle += letter) : (puzzle += "*");
    });
    return puzzle;
  }
  makeGuess(guess) {
    guess = guess.toLowerCase();
    if (this.guessedLetters.includes(guess)) {}
    else if (this.word.includes(guess)) { this.guessedLetters.push(guess) }
    else if (!this.word.includes(guess)) {
      this.guessedLetters.push(guess)
      this.remainingGuesses--;
    } 
  }
  puzzleSpan() {
  document.querySelector("#game-text").innerHTML = this.getPuzzle().split('').map( x => `<span> ${x}</span>`).join('');
  }
}
