class Puzzle {
  constructor() {
    this.phrase = this.generateRandomPuzzle();
    this.guessedLetters = [];
  }

  generateRandomPuzzle() {
    const puzzleKeys = Object.keys(data.puzzles)
    let randomPuzzle = puzzleKeys.reduce((arr, puzzleKey) => {
      arr.push(...data.puzzles[puzzleKey].puzzle_bank)
      return arr
    }, []).sort(function () {
      return 0.5 - Math.random()
    }).pop()
    return randomPuzzle
  }

  checkPlayerGuess(letter) {
    let vowels = 'aeiou';

    if (!(this.guessedLetters.includes(letter))) {
      this.guessedLetters.push(letter);
      domUpdates.showGuessedLetter(letter);
      if (!(vowels.includes(letter)) &&     this.phrase.correct_answer.toLowerCase().includes(letter)) {
        domUpdates.updatePuzzleOnDom(letter);
        game.updatePlayerScore(letter);
      } else if (vowels.includes(letter)) {
        domUpdates.fireVowelAlert(letter);
      } else {
        game.changePlayerTurn();
      }
    } else {
      domUpdates.showGuessedLetterAlert(letter);
      game.changePlayerTurn();
      

    // domUpdates.showGuessedLetter(letter);
    // if (!(vowels.includes(letter)) && this.phrase.correct_answer.toLowerCase().includes(letter)) {
    //   domUpdates.updatePuzzleOnDom(letter);
    //   game.updatePlayerScore(letter);
    // } else if (vowels.includes(letter)) {
    //   domUpdates.fireVowelAlert(letter);
    // } else {
    //   game.changePlayerTurn();
    // }
  }
}

  checkPlayerSolution(string) {
    if (this.phrase.correct_answer.toLowerCase() === string) {
      game.updateTotalScore();
      domUpdates.implementsSolutionDisplay(game.players[0].name, game.players[0].totalScore);
    } else {
      alert("Sorry, that is incorrect!");
      game.changePlayerTurn();
    }
  }
}


if (typeof module !== 'undefined'){
  module.exports = Puzzle;
}