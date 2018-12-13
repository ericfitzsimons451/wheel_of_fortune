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

  describe('Game', function() {
    var game;

    beforeEach(function() {
      game = new Game();

      let players = [
        player1 = new Player(),
        player2 = new Player(),
        player3 = new Player(),
      ]
      game.players = players;
    });

    it('should have all keys', function() {
      expect(game).to.have.all.keys('players', 'currentRound', 'currentPuzzle', 'wheel', 'finalRoundPlayer', 'bonusRound')
    });

    it('should be able to change rounds', function() {
      //expect(game.currentRound).to.equal(1)    DON'T HARDCODE IN VALUES LIKE ON LINE 33
      game.changeRounds();
      game.currentRound = 2;
      game.changeRounds();
      expect(game.currentRound).to.equal(3)
    })

    it('should create a new wheel when we change rounds', function() {
      let players = [
        player1 = new Player(),
        player2 = new Player(),
        player3 = new Player(),
      ]
      game.players = players;

      let wheel1 = new Wheel();
      game.wheel = wheel1

      game.changeRounds();
      expect(game.wheel).to.not.equal(wheel1)
    })

    it('should create a new puzzle when we change rounds', function() {
      let players = [
        player1 = new Player(),
        player2 = new Player(),
        player3 = new Player(),
      ]
      game.players = players;

      let puzzle1 = new Puzzle();
      game.currentPuzzle = puzzle1

      game.changeRounds();
      expect(game.currentPuzzle).to.not.equal(puzzle1);
    })

    //it should generate 3 players
    //game.generatePlayers(['eric', 'brittany', 'joe'])
    //expect.game.players to be length of 3
    //expect each element to be an isntance of player
    

    it('should change a players turn', function() {
      let players = [
        player1 = new Player(),
        player2 = new Player(),
        player3 = new Player(),
      ]
      game.players = players;

      game.players[0].turn = true;
      game.players[1].turn = false;
      game.players[2].turn = false;

      game.changePlayerTurn();
      expect(player1.turn).to.equal(false);
      expect(player2.turn).to.equal(true);
      expect(player3.turn).to.equal(false);

      game.changePlayerTurn();    
      expect(player1.turn).to.equal(false);
      expect(player2.turn).to.equal(false);
      expect(player3.turn).to.equal(true);
    })

  });