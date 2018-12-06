const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const Game = require('Game.js');
global.domUpdates = require('domUpdates.js')