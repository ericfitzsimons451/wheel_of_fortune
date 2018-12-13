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
  var names = ['jerry', 'john', 'ricky']
  var puzzle;

  beforeEach(function () {
    game = new Game();
    game.generatePlayers(names)
    puzzle = new Puzzle();
  });

  it('should be able to generate a random puzzle', function() {
    let puzzle1 = puzzle.generateRandomPuzzle();
    let puzzle2 = puzzle.generateRandomPuzzle();
    expect(puzzle1).to.not.equal(puzzle2)
  })

  it('should be a puzzle object once instantiated', function() {
    expect(game.currentPuzzle).to.be.an('object')
  })

});
