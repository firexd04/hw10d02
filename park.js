var Park = function() {
  this.enclosure = [];
}

Park.prototype.size = function() {
  return this.enclosure.length;
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.enclosure.push(dinosaur);
}

Park.prototype.removeDinosaur = function(type) {
  var i = this.enclosure.length;
     while( i-- ) {
      if(this.enclosure[i].type === type ) {
        this.enclosure.splice(i,1);
      }
    }
}

Park.prototype.getDinosaursMoreThanNumberOfssprings = function(offspringNumber) {
  var newEnclosure = this.enclosure 

      var i = newEnclosure.length; 

      while(i--)
      {
          if(newEnclosure[i].numberOffspringsYear > offspringNumber ) {
            newEnclosure.splice(i,1);
          }
      }

      return newEnclosure.length;

}

// var myPark = new Park();
// myPark.size();


module.exports = Park;