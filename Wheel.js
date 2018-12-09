class Wheel {
  constructor() {
    this.values = [];
    //do we need to break out by values?
    //or can we break into an array [val1, val2... val6]
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


  //do we need a method here to generate the values on any wheel intantiation?
  //or should that method live on a different class? 
}

if(typeof module !== 'undefined'){
  module.exports = Wheel;
}