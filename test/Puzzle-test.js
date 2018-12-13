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
  var puzzle;

  beforeEach(function () {
    puzzle = new Puzzle();
  });

  it('should be able to generate a random puzzle', function() {
    let puzzle1 = puzzle.generateRandomPuzzle();
    let puzzle2 = puzzle.generateRandomPuzzle();
    expect(puzzle1).to.not.equal(puzzle2)
  })

  it('should be a puzzle object once instantiated', function() {
    game = new Game();
    expect(game.currentPuzzle).to.be.an('object')
  })

  // it('should check a players guess', function() {
  //   let vowels = "aeiou";
  //   player = new Player();
  //   puzzle.phrase.correct_answer = "In Like Flynn"
  //   puzzle.checkPlayerGuess();
  // })

});
