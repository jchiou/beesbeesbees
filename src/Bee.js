var Bee = function() {
  this.age = 5;
  this.color = "yellow";
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.job = "keep on growing"
Bee.prototype.constructor = Bee
