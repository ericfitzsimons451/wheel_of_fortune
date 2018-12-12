class Player {
  constructor(name) {
    this.name = name;
    // this.turn = false;
    this.roundPoints = 0;
    this.totalScore = 0;
    this.currentSpinValue = null;
    this.getsToGoToFinal = false  // is this necessary?
  }

  spinWheel() {
    this.currentSpinValue = game.wheel.spin();
    domUpdates.displaySpinValue(this.currentSpinValue)

    if (this.currentSpinValue === "LOSE A TURN") {
      game.changePlayerTurn();
    } else if (this.currentSpinValue === "BANKRUPT") {
      this.roundPoints = 0;
      domUpdates.deductVowelCost(this);
      game.changePlayerTurn();
    } else {
      domUpdates.displaySpinValue(this.currentSpinValue)
    }
  }

  guessLetter(letter) {
    game.checkPlayerGuess(letter);
  }

  solvePuzzle(string) {
    game.checkPlayerSolution(string)
  }

  buyVowel(letter) {
    if (this.roundPoints >= 100) {
      this.roundPoints -= 100
      domUpdates.showGuessedLetter(letter);
      domUpdates.deductVowelCost(this)
    if (game.puzzle.currentPuzzle.correct_answer.toLowerCase().includes(letter)) {
      domUpdates.putVowelOnDom(letter);
      domUpdates.deductVowelCost(this);
    } else {
      this.roundPoints -= 100;
      domUpdates.putVowelOnDom(letter);
      game.changePlayerTurn();
    } 
    } 
  }

  guessBonusPuzzle() {
    //  triggered by a click handler
    //  REQUIRES typing into an input
    //  fires game.checkBonusRoundSolution
  }
}

if (typeof module !== 'undefined') {
  module.exports = Player;
}