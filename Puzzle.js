class Puzzle {
  constructor() {
    this.phrase = generateRandomPuzzle();
  }

  generateRandomPuzzle() {
    this.category = Object.keys(data.puzzles)
    let randomPuzzle = puzzleKeys.reduce((arr, puzzleKey) => {
      arr.push(...data.puzzles[puzzleKey].puzzle_bank)
      return arr
    }, []).sort(function () {
      return 0.5 - Math.random()
    }).pop()
  }

  checkPlayerGuess(letter) {
    let vowels = 'aeiou';
    domUpdates.showGuessedLetter(letter);
    if (!(vowels.includes(letter)) && this.phrase.correct_answer.toLowerCase().includes(letter)) {
      domUpdates.updatePuzzleOnDom(letter);
      game.updatePlayerScore(letter);
    } else if (vowels.includes(letter)) {
      domUpdates.fireVowelAlert(letter);
    } else {
      game.changePlayerTurn();
    }
  }

  checkPlayerSolution(string) {
    if (this.phrase.correct_answer.toLowerCase() === string) {
      game.updateTotalScore();
      domUpdates.forCorrectSolution(game.players[0].name, game.players[0].totalScore);
    } else {
      alert("Sorry, that is incorrect!");
      game.changePlayerTurn();
    }
  }
}


if (typeof module !== 'undefined'){
  module.exports = Puzzle;
}