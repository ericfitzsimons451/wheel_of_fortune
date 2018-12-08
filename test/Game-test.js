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

chai.spy.on(global.domUpdates, ['setPlayerNames'], () => { //for testing functions that actually return something
  return ['John', 'Joe', 'Bill']
})

chai.spy.on(global.domUpdates, ['hideStartScreen'], () => true) //did this function happen (doesnt return anything)

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
    game.startGame()
  });

  it('should instantiate a new game with three players', function() {
    expect(game.players.length).to.equal(3);
  });

  it('should have a bank of 5 puzzles', function() {
    expect(game.puzzles.length).to.equal(5);
  });

  it('should instantiate a new Puzzle object when we start a new game', function() {
    expect(game.currPuzzle).to.be.an.instanceOf(Puzzle)
  })
  
  it('should instantiate a new Wheel object when we start a new game', function() {
    expect(game.currWheel).to.be.an.instanceOf(Wheel);
  })    //. We have this test in 2 different places.  Where should it live?

  it('should create a game object with 9 keys', function() {
    expect(game).to.have.all.keys('players', 'rounds', 'currRound', 'bonusRoundLetters', 'puzzles', 'currPuzzle', 'currWheel', 'currSpinValue', 'finalRoundPlayer')
  })

    // expect(domUpdates.setPlayerNames).to.have.been.called(1);
    // expect(domUpdates.setPlayerNames).to.have.been.called.with(['John', 'Joe', 'Bill'])
  })
