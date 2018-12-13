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

  describe('Game Setup', function() {
    var game;
    var names = ['jerry', 'john', 'ricky']

    beforeEach(function() {
      game = new Game();
    });

    it('should create a game with 6 keys', function() {
      expect(game).to.have.all.keys('players', 'currentRound', 'currentPuzzle', 'wheel', 'finalRoundPlayer', 'bonusRound')
    });

    it('should instantiate 3 players with names', function() {
      game.generatePlayers(names)
      expect(game.players).to.have.lengthOf(3)
    })
  })

  describe('Game Functionality', function() {
    var game;
    var names = ['jerry', 'john', 'ricky']

    beforeEach(function() {
      game = new Game()
      chai.spy.on(global.domUpdates, ['displayCurrentPlayerTurn', 'implementsGameStart', 'implementsRoundChange'], () => true)
      game.startGame(names)
    });
    afterEach(function() {
      chai.spy.restore(global.domUpdates)
    })

    it('should be able to change rounds', function() {
      expect(game.currentRound).to.equal(1)
      game.changeRounds();
      game.changeRounds();
      expect(game.currentRound).to.equal(3)
    })

    it('should create a new wheel when we change rounds', function() {
      let wheel1 = new Wheel();
      game.wheel = wheel1
      game.changeRounds();
      expect(game.wheel).to.not.equal(wheel1)
    })

    it('should create a new puzzle when we change rounds', function() {
      let puzzle1 = new Puzzle();
      game.currentPuzzle = puzzle1
      game.changeRounds();
      expect(game.currentPuzzle).to.not.equal(puzzle1);
    })
    
    it('should change a players turn', function() {
      game.generatePlayers(names)
      expect(game.players[0].turn).to.equal(true)
      expect(game.players[0].name).to.equal('jerry')
      game.changePlayerTurn()
      expect(game.players[0].turn).to.equal(true)
      expect(game.players[0].name).to.equal('john')
   })
  })