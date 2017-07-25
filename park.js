var Park = function() {
  this.enclosure = [];
}

Park.prototype.size = function() {
  return this.enclosure.length;
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.enclosure.push(dinosaur);
}

// var myPark = new Park();
// myPark.size();


module.exports = Park;