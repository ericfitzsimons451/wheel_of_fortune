class Game {
  constructor() {
    this.players = [];
    this.rounds = 4;
    this.currentRound = 1;
    this.bonusRoundLetters = ["r", "s", "t", "l", "n", "e"];
    this.puzzle = new Puzzle();
    this.wheel = new Wheel();
    this.currSpinValue = null;
    this.finalRoundPlayer = [];

    // could be unnecessary BUT might be a way to handle accessing the final player for bonus round
  }

  startGame() {
    let names = domUpdates.getPlayerNames();
    this.createPlayers(names);
    this.wheel.generateValues();
    domUpdates.hideStartScreen();
    domUpdates.displayCurrentPlayerTurn(this.players[0]);
    domUpdates.displayPuzzle(
      this.puzzle.currentPuzzle.correct_answer.toLowerCase()
    );
    domUpdates.displayCategory(this.puzzle.currentPuzzle.category);
    console.log(game.puzzle.currentPuzzle.correct_answer);
  }

  createPlayers(names) {
    this.players = [
      new Player(names[0]),
      new Player(names[1]),
      new Player(names[2])
    ];
    domUpdates.setPlayerNames(names);
  }

  changePlayerTurn() {
    let player = this.players.shift();
    this.players.push(player);
    domUpdates.displayCurrentPlayerTurn(this.players[0]);
  }

  checkPlayerGuess(letter) {
    domUpdates.showGuessedLetter(letter);
    if (
      this.puzzle.currentPuzzle.correct_answer.toLowerCase().includes(letter)
    ) {
      domUpdates.updatePuzzleOnDom(letter);
      this.updatePlayerScore(letter);
    } else {
      this.changePlayerTurn();
    }
  }

  checkPlayerSolution(string) {
    if (this.puzzle.currentPuzzle.correct_answer.toLowerCase() === string) {
      domUpdates.displaySolvedPuzzle();
      this.updateTotalScore();
      domUpdates.displayTotalScore(this.players[0], this.players[0].totalScore);
      domUpdates.changeRoundPopup(this.players[0], this.players[0].totalScore);
      
    } else {
      alert('Sorry, that is incorrect!')
      this.changePlayerTurn();
    }
  }

  updateTotalScore() {
    this.players[0].totalScore += this.players[0].roundPoints;
    this.players[1].totalScore += 0;
    this.players[2].totalScore += 0;
  }

  updatePlayerScore(letter) {
    let puzzle = this.puzzle.currentPuzzle.correct_answer.split("");
    let correctLetterCount = puzzle.filter(char => {
      return char.toLowerCase() === letter.toLowerCase();
    }).length;
    let mutlipliedScore = correctLetterCount * this.players[0].currentSpinValue;
    let fullScore = (this.players[0].roundPoints += mutlipliedScore);
    domUpdates.updatePlayerRoundScore(fullScore, this.players[0].name);
  }


  changeRounds() {
    this.players[0].roundPoints = 0
    domUpdates.resetRoundScore()
    //instantiate new wheel
    //update scores in Player class
    //update score on DOM
    //update wallets in Player class
    //update wallet on DOM
  }

  declareWinner() {
    // if round# is strictly equal to 4 AND currentPlayer solves puzzle
    //    1.  find which player.bank is the highest
    //        push them into game.finalPlayer array
    //  OR
    //.    2.  find highest player.bank and set other players turns to false
    //         fire game.startBonusRound
    //         do something on DOM  (display info about winner AND instructions for final round)
  }

  startBonusRound() {
    //  instantiate new BONUS WHeel class object
    //  show bonus round screen on DOM
    //  Display some instructions for player
    //  display pre-selected letter on puzzle. (DOM)
  }

  bonusRoundLetterSubmission() {
    // if letters are there, put them there
    //. ++++++ maybe this happens only in DOM updates? ++++++
  }

  checkBonusRoundSolution() {
    // grab value from player input (maybe happens in DOM updates?)
    // to lowerCase the puzzle value AND player's input value
    // validate answer somehow.  guess === answerguess
    // if  player's guess is TRUE
    //.     update player.roundScore with bonusWheel value
    //      increment that value in player.bank
    //      display something that says 'You won!' and final score
    //      Offer an exit game option
    //. if player's guess is false
    //      fire game.youAreHorribleAtWheel.  ==== DOM manipulation
    //      display something that says your final score
    //      Offer an exit game option
  }

  exitGame() {
    //refresh page?
  }
}
if (typeof module !== 'undefined') {
  module.exports = Game;
}