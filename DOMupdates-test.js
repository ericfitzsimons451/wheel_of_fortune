const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies')
chai.use(spies)
const DOMupdates = require('DOMupdates.js');
global.DOMupdates = require('DOMupdates.js')