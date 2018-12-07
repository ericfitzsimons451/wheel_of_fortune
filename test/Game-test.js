const spies = require('chai-spies');
const chai = require('chai');
const expect = chai.expect;
chai.use(spies)
const Game = require('../Game.js');
global.domUpdates = require('../domUpdates.js')
global.data = require('../Data.js')
global.Player = require('../Player.js')

chai.spy.on(global.domUpdates, ['setPlayerNames'], () => { //for testing functions that actually return something
  return ['John', 'Joe', 'Bill']
})

chai.spy.on(global.domUpdates, ['hideStartScreen'], () => true) //did this function happen (doesnt return anything)

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('should instantiate a new game with player names', function() {
    game.startGame()
    expect(game.players.length).to.equal(3);
    expect(game.puzzles.length).to.equal(5);

    // expect(domUpdates.setPlayerNames).to.have.been.called(1);
    // expect(domUpdates.setPlayerNames).to.have.been.called.with(['John', 'Joe', 'Bill'])
  })


  // it('should create a puzzle bank of 5 puzzles', function() {
  //   // game.startGame();
  //   game.createPuzzleBank(data);
  //   expect(game.puzzles.length).to.equal(5)
  // })

})