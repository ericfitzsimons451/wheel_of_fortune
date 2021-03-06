const spies = require('chai-spies');
const chai = require('chai');
const expect = chai.expect;
chai.use(spies)
const Player = require('../Player.js');
global.Game = require('../Game.js')
global.domUpdates = require('../domUpdates.js')
global.data = require('../Data.js')
global.Puzzle = require('../Puzzle.js')



describe('Player', function() {
  var game;
  var player;
  var names = ['jerry', 'john', 'ricky']
  
  beforeEach(function() {
    chai.spy.on(global.domUpdates, [
      'generateRandomPuzzle',
      'hideStartScreen',
      'displayCurrentPlayerTurn',
      'displayPuzzle',
      'displayCategory',
      'createPlayers',
      'updatePlayerRoundScore',
      'fireNameAlert',
      'fireVowelAlert',
      'displaySpinValue',
      'showGuessedLetter',
      'updatePuzzleOnDom',
      'putVowelOnDom',
      'deductVowelCost',
      'displaySolvedPuzzle',
      'enableButtons',
      'displayRoundPopUp',
      'hideRoundPopUp',
      'updateRoundNumber',
      'displayTotalScore',
      'resetVowels',
      'clearPuzzle',
      'resetRoundScore',
      'forRoundChange',
      'forStartingGame',
      'forCorrectSolution', 
      'implementsGameStart'], () => true) 

   
    game = new Game();
    game.startGame(names)
    game.currentPuzzle = new Puzzle();

  });

  afterEach(function() {
    chai.spy.restore(global.domUpdates)
  })

  it('should have a name', function() {
    // chai.spy.on(global.domUpdates, ['setPlayerNames', 'implementsGameStart'], () => true ) 
    game.players[0].name = 'jerry'
    expect(game.players[0].name).to.equal("jerry");
  });


  //potentiall create a describe block for every method with separate its
//make these separate its 
  //it should change playere turn when spin value === l at 
  //it should change player turn adn increment score down if spin is bankrupt and call deductVowelCost

  it('should be able to spin that wheel', function() {
    // chai.spy.on(global.domUpdates, ['deductVowelCost', 'displaySpinValue'], () => true)
    game.players[0].spinWheel();
    expect(domUpdates.displaySpinValue).to.have.been.called(1);
  })

  it('should have round points reset if they spin a bankrupt', function() {
    game.players[0].spinWheel("BANKRUPT");
    game.players[0].roundPoints = 0;
  }),

  it('should change players when the wheel returns LOSE A TURN', function() {


  })

  it('should be able to guess a letter', function() {
    // chai.spy.on(global.domUpdates, ['showGuessedLetter', 'updatePuzzleOnDom', 'fireVowelAlert', 'updatePlayerRoundScore', 'displayCurrentPlayerTurn'], () => true)
    game.players[0].turn = true;
    game.players[1].turn = false;
    game.players[2].turn = false;

    game.players[0].spinValue = 200;
    game.players[0].guessLetter('d');
    expect(domUpdates.showGuessedLetter).to.have.been.called(1);
  })
  
  
  
})

