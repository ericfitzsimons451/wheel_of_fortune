class Player {
  constructor(name) {
    this.name = name;
    this.turn = false;
    this.roundPoints = 0;
    this.totalScore = 0;
    this.currentSpinValue = null;
    this.getsToGoToFinal = false  
  }

  spinWheel() {
    this.currentSpinValue = game.wheel.spin();
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
    game.currentPuzzle.checkPlayerGuess(letter);
  }

  solvePuzzle(string) {
    game.currentPuzzle.checkPlayerSolution(string)
  }

  buyVowel(letter) {
    if (this.roundPoints >= 100) {
      this.roundPoints -= 100
      domUpdates.showGuessedLetter(letter);
      domUpdates.deductVowelCost(this)
      if (game.currentPuzzle.phrase.correct_answer.toLowerCase().includes(letter)) {
        domUpdates.putVowelOnDom(letter);
        domUpdates.deductVowelCost(this);
      } else {
        this.roundPoints -= 100;
        domUpdates.putVowelOnDom(letter);
        game.changePlayerTurn();
      } 
    } 
  }

}

if (typeof module !== 'undefined') {
  module.exports = Player;
}