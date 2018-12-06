const spies = require('chai-spies');
const chai = require('chai');
const expect = chai.expect;
chai.use(spies)
const Wheel = require('../Wheel.js');
global.domUpdates = require('../domUpdates.js')