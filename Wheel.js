class Wheel {
  constructor(values) {
    this.values = []
    //do we need to break out by values?
    //or can we break into an array [val1, val2... val6]
  }

  //do we need a method here to generate the values on any wheel intantiation?
  //or should that method live on a different class? 
}

if(module !== 'undefined'){
  module.exports = Wheel;
}