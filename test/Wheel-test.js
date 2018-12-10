const spies = require('chai-spies');
const chai = require('chai');
const expect = chai.expect;
chai.use(spies)
const Wheel = require('../Wheel.js');
global.domUpdates = require('../domUpdates.js')
global.Game = require('../Game.js')
global.data = require('../Data.js')
global.Player = require('../Player.js')
global.Puzzle = require('../Puzzle.js')

describe('Wheel', function() {
  var game;
  
  beforeEach(function() {
    game = new Game();
    // game.startGame();
  });

  it('should instantiate a new Wheel object when we start a new game', function() {
    expect(game.wheel).to.be.an.instanceOf(Wheel);
  });

  it('should instantiate a new Wheel with 1 key', function() {
    expect(game.wheel).to.have.all.keys('values')
  });

  it('should have 8 values', function() {
    game.wheel.generateValues();
    expect(game.wheel.values.length).to.equal(8);
  });


})