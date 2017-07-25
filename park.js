var Park = function() {
  this.enclosure = [];
}

Park.prototype.size = function() {
  return this.enclosure.length;
}

// var myPark = new Park();
// myPark.size();


module.exports = Park;