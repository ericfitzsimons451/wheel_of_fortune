class Game {
  constructor() {
    this.players = [];
    this.currentRound = 1;
    this.bonusRoundLetters = ["r", "s", "t", "l", "n", "e"];
    this.currentPuzzle = new Puzzle();
    this.wheel = new Wheel();
    this.finalRoundPlayer = [];
    this.bonusRound = false;
  }

  startGame() {
    this.wheel.generateValues();
    this.players[0].turn = true;
    domUpdates.forStartingGame(
      this.players,
      this.players[0],
      this.currentPuzzle.phrase.correct_answer.toLowerCase(),
      this.currentPuzzle.phrase.category
    );
  }

  changeRounds() {
    if (this.currentRound <= 3) {
      this.players.forEach(player => {
        player.roundPoints = 0;
      });
      this.currentRound++;
      this.currentPuzzle = new Puzzle();
      domUpdates.forRoundChange(
        this.currentRound,
        this.currentPuzzle.phrase.correct_answer.toLowerCase(),
        this.currentPuzzle.phrase.category,
        this.players[0],
        this.players[0].totalScore
      );
      let newWheel = new Wheel();
      this.wheel = newWheel;
      this.wheel.generateValues();
    }
  }

  changePlayerTurn() {
    let player = this.players.shift();
    this.players.push(player);
    this.players[0].turn = true;
    this.players[1].turn = false;
    this.players[2].turn = false;
    domUpdates.displayCurrentPlayerTurn(this.players[0]);
  }

  updateTotalScore() {
    this.players[0].totalScore += this.players[0].roundPoints;
    this.players[1].totalScore += 0;
    this.players[2].totalScore += 0;
  }

  updatePlayerScore(letter) {
    let puzzle = this.currentPuzzle.phrase.correct_answer.split("");
    let correctLetterCount = puzzle.filter(char => {
      return char.toLowerCase() === letter.toLowerCase();
    }).length;
    let mutlipliedScore = correctLetterCount * this.players[0].currentSpinValue;
    let fullScore = (this.players[0].roundPoints += mutlipliedScore);
    domUpdates.updatePlayerRoundScore(fullScore, this.players[0].name);
  }

  declareWinner() {
    let winner = game.players
      .sort((a, b) => {
        return b.totalScore - a.totalScore;
      })
      .shift();
    this.finalRoundPlayer.push(winner);
  }

  startBonusRound() {
    this.currentRound++;
    this.declareWinner();
    let bonusWheel = new BonusWheel();
    this.wheel = bonusWheel;
    this.wheel.generateValues();
    this.currentPuzzle = new Puzzle();
    domUpdates.forRoundChange(
      this.currentRound,
      this.currentPuzzle.phrase.correct_answer.toLowerCase(),
      this.currentPuzzle.phrase.category,
      this.players[0],
      this.players[0].totalScore
    );

    // domUpdates.resetRoundScore();
    // domUpdates.updateRoundNumber(this.currentRound);
    // domUpdates.clearPuzzle();
    // domUpdates.displayPuzzle(
    //   this.puzzle.currentPuzzle.correct_answer.toLowerCase()
    // );
    // domUpdates.displayCategory(this.puzzle.currentPuzzle.category);
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
}
if (typeof module !== 'undefined') {
  module.exports = Game;
}