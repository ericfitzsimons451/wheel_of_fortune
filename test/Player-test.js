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
  var player;
  
  beforeEach(function() {
    player = new Player('name');
  });

  // it('should instantiate a new player with a name', function() {
  //   expect(player.name).to.equal('name')
  // });

  // it('should create new players with empty banks and round points', function() {
  //   expect(player.roundPoints).to.equal(0)
  //   expect(player.bank).to.equal(0)
  // })

  // it('should create new players with 6 keys', function() {
  //   expect(player).to.have.all.keys('name', 'turn', 'roundPoints', 'bank', 'currentSpinValue', 'getsToGoToFinal')
  // })

  // it('should be able to spin the wheel', function() {
  //   player.spinWheel()
  // })

  // it('should update a players score when a letter is guessed correctly', function() {
  //   game.updatePlayerScore();
  //   expect(game.updatePlayerScore).to.increase(player.roundScore).by()
  // })
})

