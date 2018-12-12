class Puzzle {
  constructor() {
    this.currentPuzzle = null;
    this.puzzleBank = this.createPuzzleBank();
    this.roundPuzzle = this.setPuzzleForRound();
  }

  createPuzzleBank() {
    const puzzleKeys = Object.keys(data.puzzles)
    const puzzleBank = puzzleKeys.reduce((arr, puzzleKey) => {
      arr.push(...data.puzzles[puzzleKey].puzzle_bank)
      return arr
    }, []).sort(function () {
      return 0.5 - Math.random()
    }).slice(0, 5)

    const fivePuzzles = puzzleBank.slice(0, 5)
    return fivePuzzles
  }

  setPuzzleForRound() {
    if (this.currentPuzzle === null) {
      this.currentPuzzle = this.puzzleBank[0];
    } 
    else if (game.currentRound === 2) {
      this.currentPuzzle = this.puzzleBank[1];
    } else if (game.currentRound === 3) {
      this.currentPuzzle = this.puzzleBank[2];
    } else if (game.currentRound === 4){
      this.currentPuzzle = this.puzzleBank[3];
    } else if (game.currentRound === 5) {
      this.currentPuzzle = this.puzzleBank[4]
    }
}

}
if (typeof module !== 'undefined'){
  module.exports = Puzzle;
}