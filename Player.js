class Player {
  constructor(name) {
    this.name = name;
    // this.turn = false;
    this.roundPoints = 0;
    this.bank = 0;
    this.currentSpinValue = null;
    this.getsToGoToFinal = false  // is this necessary?
  }



  spinWheel() {
    this.currentSpinValue = game.wheel.spin();
    domUpdates.displaySpinValue(this.currentSpinValue)

    if (this.currentSpinValue === "LOSE A TURN") {
      game.changePlayerTurn();
      domUpdates.displayCurrentPlayerTurn();
    } else if (this.currentSpinValue === "BANKRUPT") {
      this.roundPoints = 0;
      game.changePlayerTurn();
      domUpdates.displayCurrentPlayerTurn()
    } else {
      domUpdates.displaySpinValue(this.currentSpinValue)
    }
  }
  

  guessLetter() {
    //this function is triggered by any of the click handlers on letter board
    // this fires game.checkPlayerGuess
    //     STOP CODING THIS TOO MANY TIMES
    
  }

  solvePuzzle() {
    // likely just a trigger for other functions?????
    // probably triggers game.checkPlayerSolution

  }

  buyVowel() {
    //  run allowBuyVowel function (which lives somewhere)
    //  
    // if player.roundPoints < 100. 
    //.     display message that directs to another option/instructions
    //      OR. disable the click handler
    // if player.roundPoints >= 100
    //.     subtract 100 points from this.roundPoints
    //      fire game.checkPlayerGuess
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