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
    this.createPlayers();
    this.createPuzzleBank();
    this.players[0].turn = true;
    // this.createWheel(data);
    domUpdates.hideStartScreen();
  }

  createPlayers() {
    const playerNames = domUpdates.setPlayerNames();
    let player1 = new Player(playerNames[0]);
    let player2 = new Player(playerNames[1]);
    let player3 = new Player(playerNames[2]);

    this.players.push(player1);
    this.players.push(player2);
    this.players.push(player3);
  }

  // createWheel(data) {
  //   const wheelValues = data.wheel.sort(function () {
  //     return 0.5 - Math.random()
  //   }).splice(0, 8)
  //   const theWheel = new Wheel(wheelValues)
  // }

  updatePlayerScore() {

  }

  checkPlayerGuess() {

  }

  checkPlayerSolution() {

  }

  createPuzzleBank() {
    const puzzleKeys = Object.keys(data.puzzles)
    const puzzleBank = puzzleKeys.reduce((arr, puzzleKey) => {
      arr.push(...data.puzzles[puzzleKey].puzzle_bank)
      return arr
    }, []).sort(function(){
      return 0.5 - Math.random()
    }).slice(0,5)

    console.log(puzzleBank.length)
    
    const fivePuzzles =  puzzleBank.slice(0, 5)
      console.log(fivePuzzles.length)
      this.puzzles.push(...fivePuzzles)
    }


  changeRounds() {
    //instantiate new wheel
    //update scores in Player class
    //update score on DOM
    //update wallets in Player class
    //update wallet on DOM
  }

  declareWinner() {

  }

  startBonusRound() {
    //show bonus round screen on DOM


  }

  exitGame() {
    //refresh page?
    
  }
}
if (typeof module !== 'undefined') {
  module.exports = Game;
}