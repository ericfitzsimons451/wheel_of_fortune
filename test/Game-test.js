const spies = require('chai-spies');
const chai = require('chai');
const expect = chai.expect;
chai.use(spies)
const Game = require('../Game.js');
global.domUpdates = require('../domUpdates.js')

chai.spy.on(global.domUpdates, ['display-player1-name', 'display-player2-name', 'display-player3-name'], () => true);

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('should append player names to the DOM', function() {
    game.
  })
})