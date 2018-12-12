class BonusWheel extends Wheel {
  constructor() {
    super();
    this.values = []
  }

  generateBonusValues() {
    const bonusValues = data.wheel.filter((value) => {
      return value !== "BANKRUPT" && value !== 'LOSE A TURN' 
    }).sort(function () {
      return 0.5 - Math.random()
    }).slice(0, 8)
    bonusValues.forEach((value) => {
      this.values.push(value * 2)
    })
  }
}

if (typeof module !== 'undefined') {
  module.exports = BonusWheel;
}