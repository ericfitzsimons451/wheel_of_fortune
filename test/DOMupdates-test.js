const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies')
chai.use(spies)

const Player = require('../Player.js')

global.domUpdates = require('../domUpdates.js');