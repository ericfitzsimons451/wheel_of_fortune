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

  it('should ')

});
