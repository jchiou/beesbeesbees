var ForagerBee = function() {
  this.age = 10;
  this.job = "find pollen";
};

ForagerBee.prototype = Object.create(Bee.prototype)
