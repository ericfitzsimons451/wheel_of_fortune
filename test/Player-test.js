const spies = require('chai-spies');
const chai = require('chai');
const expect = chai.expect;
chai.use(spies)
const Player = require('../Player.js');
global.domUpdates = require('../domUpdates.js')
chai.spy.on(global.domUpdates, ['displayHeight','displayWidth'], () => true);


describe('Player', function() {
  var player;
  beforeEach(function() {
    player = new Player('name');
  });

  it('should instantiate a new player with a name', function() {
    expect(player.name).to.equal('name')
  })
})

