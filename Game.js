class Game {
  constructor() {
    this.players = []; //[player1, player2, player3]?
    this.rounds = 4;
    this.currRound = 1;
    this.bonusRoundConsonants = ['r','s','t', 'l', 'n', 'e'];
    this.puzzles = [];
    // this.wheels =; //[wheel1, wheel2, wheel3, wheel4]
    // this.bonusPuzzle = ;//bonusPuzzle;
    // this.bonusWheel = ;//bonusWheel;
  }


  startGame() {
    const playerNames = domUpdates.setPlayerNames();
    const test = playerNames.forEach((name) => {
      let player = new Player(name)
      this.players.push(player);
    })
    this.createPuzzleBank(data);
    this.players[0].turn = true;
    domUpdates.hideStartScreen();
  }

  createPuzzleBank(data) {
    const puzzlesToUse = Object.keys(data.puzzles).reduce((arr, puzzleKey) => {
      arr.push(data.puzzles[puzzleKey].puzzle_bank)
      return arr
    }, []).flat().sort(function () {
      return 0.5 - Math.random()
    }).slice(0, 5);
    puzzlesToUse.forEach(puzzle => {
      this.puzzles.push(puzzle)
    })
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