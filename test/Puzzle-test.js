const spies = require('chai-spies');
const chai = require('chai');
const expect = chai.expect;
chai.use(spies)
const Puzzle = require('../Puzzle.js');
global.domUpdates = require('../domUpdates.js')


