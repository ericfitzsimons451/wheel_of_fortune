class Game {
  constructor(players) {
    this.players = players; //[player1, player2, player3]?
    this.rounds = 4;
    this.currRound = 1;
    this.bonusRoundConsonants = ['r','s','t', 'l', 'n', 'e'];
    // this.puzzles = ;//[puzzle1, puzzle2, puzzle3, puzzle4]
    // this.wheels =; //[wheel1, wheel2, wheel3, wheel4]
    // this.bonusPuzzle = ;//bonusPuzzle;
    // this.bonusWheel = ;//bonusWheel;
  }

  startGame() {
    
  }

  changeRounds() {

  }

  declareWinner() {

  }

  startBonusRound() {

  }

  exitGame() {
    
  }

  createPuzzle(data) {
    let arrayOfPuzzles = []
    const puzzlesToUse = data.puzzles.one_word_answers.puzzle_bank.forEach((puzzle) => {
    arrayOfPuzzles.push(puzzle)
  })
    const puzzlesToUse2 = data.puzzles.two_word_answers.puzzle_bank.forEach((puzzle) => {
    arrayOfPuzzles.push(puzzle)
  })
    const puzzlesToUse3 = data.puzzles.three_word_answers.puzzle_bank.forEach((puzzle) => {
    arrayOfPuzzles.push(puzzle)
  })
    const puzzlesToUse4 = data.puzzles.four_word_answers.puzzle_bank.forEach((puzzle) => {
    arrayOfPuzzles.push(puzzle)
  })
    puzzlesToUse;
    puzzlesToUse2;
    puzzlesToUse3;
    puzzlesToUse4;
    var puzzles = arrayOfPuzzles.sort(function(){return .5 - Math.random()}).slice(0, 5)
    return puzzles;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Game;
}