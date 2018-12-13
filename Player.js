class Player {
  constructor(name) {
    this.name = name;
    this.turn = false;
    this.roundPoints = 0;
    this.totalScore = 0;
    this.currentSpinValue = null;
    this.getsToGoToFinal = false  
  }

    //give the spin method a parameter that we can test for 
  // spinWheel(spinVAlue) {
  spinWheel(value) {
    this.currentSpinValue = value
    if (value === "LOSE A TURN") {
      game.changePlayerTurn();
    } else if (value === "BANKRUPT") {
      this.roundPoints = 0;
      domUpdates.deductVowelCost(this);
      game.changePlayerTurn();
    } else {
      domUpdates.displaySpinValue(value)
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