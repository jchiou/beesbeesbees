var ForagerBee = function() {
  this.age = 10;
  this.job = "find pollen";
  this.canFly = true;
};

ForagerBee.prototype = Object.create(Bee.prototype)
