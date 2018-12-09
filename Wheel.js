class Wheel {
  constructor() {
    this.values = [];
  }

  generateValues() {
    const wheelValues = data.wheel.sort(function() {
      return 0.5 - Math.random()
    }).splice(0, 8);
    this.values.push(wheelValues)
  }

  spin() {
    //select randiom index
  }
}

if(typeof module !== 'undefined'){
  module.exports = Wheel;
}