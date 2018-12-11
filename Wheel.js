class Wheel {
  constructor() {
    // this.values = this.generateValues();
    this.values = [];
  }

  generateValues() {
    const wheelValues = data.wheel.sort(function() {
      return 0.5 - Math.random()
    }).slice(0, 8);
    // return wheelValues
    wheelValues.forEach(value => this.values.push(value))
  }

  spin() {
    const spinValue = this.values[Math.floor(Math.random() * this.values.length)]
    return spinValue
  }
}

if(typeof module !== 'undefined'){
  module.exports = Wheel;
}