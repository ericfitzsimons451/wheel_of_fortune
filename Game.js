class Game {
  constructor() {
    this.players = [];
    this.currentRound = 1;
    this.currentPuzzle = new Puzzle();
    this.wheel = new Wheel();
    this.finalRoundPlayer = [];
    this.bonusRound = false;
  }

  startGame(names) {
    this.generatePlayers(names)
    this.wheel.generateValues();
    // this.players[0].turn = true;
    domUpdates.implementsGameStart(
      this.players, this.players[0], 
      this.currentPuzzle.phrase.correct_answer.toLowerCase(), 
      this.currentPuzzle.phrase.category);
  }

  generatePlayers(names) {
    let player1 = new Player(names[0]);
    let player2 = new Player(names[1]);
    let player3 = new Player(names[2]);

    let players = [player1, player2, player3]
    players.forEach(player => this.players.push(player))
    this.players[0].turn = true
  }


  changeRounds() {
    if (this.currentRound <= 3) {
      this.players.forEach(player => {
        player.roundPoints = 0;
      });
      this.currentRound++;
      this.currentPuzzle = new Puzzle();
      domUpdates.implementsRoundChange(
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
    domUpdates.implementsRoundChange(
      this.currentRound,
      this.currentPuzzle.phrase.correct_answer.toLowerCase(),
      this.currentPuzzle.phrase.category,
      this.players[0],
      this.players[0].totalScore
    );
  }

}
if (typeof module !== 'undefined') {
  module.exports = Game;
}