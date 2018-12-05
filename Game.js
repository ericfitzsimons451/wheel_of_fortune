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
}

if (typeof module !== 'undefined') {
  module.exports = Game;
}