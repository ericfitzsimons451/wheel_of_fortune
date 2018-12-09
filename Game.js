class Game {
  constructor() {
    this.players = []; 
    this.rounds = 4;
    this.currRound = 1;
    this.bonusRoundLetters = ['r','s','t', 'l', 'n', 'e'];
    this.puzzles = [];
    this.currPuzzle = null;
    this.currentWheel = null;
    this.currSpinValue = null;
    this.finalRoundPlayer = []  // could be unnecessary BUT might be a way to handle accessing the final player for bonus round


    // this.wheels =; //[wheel1, wheel2, wheel3, wheel4]
    // this.bonusPuzzle = ;//bonusPuzzle;
    // this.bonusWheel = ;//bonusWheel;
  }

  startGame() {
    this.createPlayers();
    this.createPuzzleBank();
    this.createCurrPuzzle();
    this.players[0].turn = true;
    let wheel = new Wheel();
    wheel.generateValues();
    domUpdates.hideStartScreen();
    domUpdates.displayPuzzle(this.currPuzzle.answer);
    domUpdates.displayCategory(this.currPuzzle.category)
  }

  createPlayers() {
    const player1Name = $('#player-1-input').val();
    const player2Name = $('#player-2-input').val();
    const player3Name = $('#player-3-input').val();

    const playerNames = []

    // $('.display-player1-name').text(`Player 1: ${player1Name}`);
    // $('.display-player2-name').text(`Player 2: ${player2Name}`);
    // $('.display-player3-name').text(`Player 3: ${player3Name}`);

    playerNames.push(player1Name, player2Name, player3Name)

    let player1 = new Player(playerNames[0]);
    let player2 = new Player(playerNames[1]);
    let player3 = new Player(playerNames[2]);

    this.players.push(player1);
    this.players.push(player2);
    this.players.push(player3);

    domUpdates.setPlayerNames(playerNames);

  }

  createPuzzleBank() {
    const puzzleKeys = Object.keys(data.puzzles)
    const puzzleBank = puzzleKeys.reduce((arr, puzzleKey) => {
      arr.push(...data.puzzles[puzzleKey].puzzle_bank)
      return arr
    }, []).sort(function () {
      return 0.5 - Math.random()
    }).slice(0, 5)

    const fivePuzzles = puzzleBank.slice(0, 5)
    this.puzzles.push(...fivePuzzles)
  }

  createCurrPuzzle() {

    // var round = this.currRound;
    // switch (round) {
    //   case this.currRound === 1:
    //     this.currPuzzle = new Puzzle(this.puzzles[0]);
    //   break;
    //   case this.currRound === 2:
    //     this.currPuzzle = new Puzzle(this.puzzles[1]);
    //   break;
    //   case this.currRound === 3:
    //     this.currPuzzle = new Puzzle(this.puzzles[2]);
    //   break;
    //   case this.currRound === 4:
    //     this.currPuzzle = new Puzzle(this.puzzles[3]);
    // }
    //switch statement here?
    if (this.currRound === 1) {
      this.currPuzzle = new Puzzle(this.puzzles[0]);
    } else if (this.currRound === 2) {
      this.currPuzzle = new Puzzle(this.puzzles[1]);
    } else if (this.currRound ===3) {
      this.currPuzzle = new Puzzle(this.puzzles[2]);
    } else if (this.currRound === 4){
      this.currPuzzle = new Puzzle(this.puzzles[3]);
    } else {
      this.currPuzzle = new Puzzle(this.puzzles[4]);
    }
  }

  // createWheel() {
  //   const wheelValues = data.wheel.sort(function () {
  //     return 0.5 - Math.random()
  //   }).splice(0, 8)
  //   const currWheel = new Wheel(wheelValues)
  //   this.currWheel = currWheel;
  // }


  checkPlayerGuess() {
    // triggered by player.guessLetter
    // if they choose the correct letter
    //    check for how many letters match the guess
    //    fire game.updatePlayerScore
    //    some dom manipulation
    //
    //  if they choose the wrong letter
    //    fire game.updatePlayer turn
   
  }

  checkPlayerSolution() {
    // grab value from player input (maybe happens in DOM updates?)
    // to lowerCase the puzzle value AND player's input value
    // validate answer somehow.  guess === answerguess
    // if  player's guess is TRUE
    //.     update player.roundScore
    //      increment that value in player.bank
    //      fire game.changeRounds
    //      fire game.updatePlayerTurn?????

    //. if player's guess is false
    //      fire game.updatePlayerTurn
  }

  updatePlayerScore() {
    // MAYBE MOVE TO PLAYER
    // multiply player/wheel.currentSpinValue by number of correct letters
    // return that value as player.roundPoints
  }

  updatePlayerTurn() {
    //MAYBE MOVE TO PLAYER CLASS
    //    update player.turn to false
    //    update nextPlayer.turn to true
  }

  changeRounds() {
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