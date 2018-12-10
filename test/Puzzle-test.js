const spies = require('chai-spies');
const chai = require('chai');
const expect = chai.expect;
chai.use(spies)
const Puzzle = require('../Puzzle.js');
global.domUpdates = require('../domUpdates.js')
global.Game = require("../Game.js");
global.data = require("../Data.js");
global.Player = require("../Player.js");

describe('Puzzle', function () {
  var game;

  beforeEach(function () {
    game = new Game();
    game.startGame();
  });

  it('should instantiate a new puzzle on game start', function() {
    expect(game.puzzle).to.be.an.instanceOf(Puzzle)
  });

  it('should instantiate a puzzle with 3 keys', function() {
    expect(game.puzzle).to.have.all.keys('currentPuzzle', 'puzzleBank', 'roundPuzzle')
  });

  it('should have 5 puzzles in its puzzle bank', function() {
    expect(game.puzzle.puzzleBank.length).to.equal(5)
  });

  it('should set a new puzzle for every round', function() {
    expect(game.puzzle.currentPuzzle).to.equal(game.puzzle.puzzleBank[0]);
    console.log(game.puzzle.puzzleBank[0])
    game.currentRound = 2;
    expect(game.puzzle.currentPuzzle).to.equal(game.puzzle.puzzleBank[1]);
  })  

});
