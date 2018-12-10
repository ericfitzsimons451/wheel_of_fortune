const spies = require('chai-spies');
const chai = require('chai');
const expect = chai.expect;
chai.use(spies)
const Game = require('../Game.js');
global.domUpdates = require('../domUpdates.js')
global.data = require('../Data.js')
global.Player = require('../Player.js')
global.Puzzle = require('../Puzzle.js')
global.Wheel = require('../Wheel.js')

chai.spy.on(global.domUpdates, ['setPlayerNames', 'getPlayerNames'], () => { //for testing functions that actually return something
  return ['John', 'Joe', 'Bill']
})

chai.spy.on(global.domUpdates, ['hideStartScreen', 'displayCurrentPlayerTurn', 'displayPuzzle', 'displayCategory', 'createPlayers'], () => true) //did this function happen (doesnt return anything)

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('should instantiate a new game with three players', function() {
    let getPlayerNames = () => ['A', 'B', 'C']
    game.createPlayers(getPlayerNames);
    expect(game.players.length).to.equal(3);
  });

  it('should instantiate a new wheel', function() {
    expect(game.wheel).to.be.an.instanceOf(Wheel)
  });

  it('should instantiate a new puzzle', function () {
    expect(game.puzzle).to.be.an.instanceOf(Puzzle)
  });

  // it('should update a player score', function() {
  //   game.startGame();

  //   let score = game.players[0].roundScore;
  //   game.updatePlayerScore('a');
  //   let score2 = game.players[0].roundScore
  //   expect(score).to.not.equal(score2)

  // })
  // it('should be able to change players', function() {
  //   game.startGame();
  //   expect(game.players[0].name).to.equal(game.players[0].name)
  //   game.changePlayerTurn();
  //   expect(game.players[2].name).to.equal(game.players[0].name)
  // })

});


  // it('should instantiate a new Puzzle object when we start a new game', function() {
  //   expect(game.currPuzzle).to.be.an.instanceOf(Puzzle)
  // })
  
  // it('should instantiate a new Wheel object when we start a new game', function() {
  //   expect(game.currWheel).to.be.an.instanceOf(Wheel);
  // })    //. We have this test in 2 different places.  Where should it live?

  // it('should create a game object with 9 keys', function() {
  //   expect(game).to.have.all.keys('players', 'rounds', 'currRound', 'bonusRoundLetters', 'puzzles', 'currPuzzle', 'currWheel', 'currSpinValue', 'finalRoundPlayer')
  // })

  // it('should create puzzle objects with 5 keys', function() {
  //   expect(game.puzzles[0]).to.have.all.keys('category', 'answer', 'totalNumLetters', 'totalNumWords', 'numLettersInFirstWord')
  // })

  //   // expect(domUpdates.setPlayerNames).to.have.been.called(1);
  //   // expect(domUpdates.setPlayerNames).to.have.been.called.with(['John', 'Joe', 'Bill'])
  // })
