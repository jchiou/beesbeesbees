var HoneyMakerBee = function() {
  this.age = 10;
  this.job = "make honey";
  this.honeyPot = 0;

};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
