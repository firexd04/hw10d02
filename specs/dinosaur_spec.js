var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe("Dinosaur", function() {
  var type;
  var numberOffspringsYear;

  beforeEach( function() {
    dinosaur1 = new Dinosaur("Tyrannosaurus", 3);
    dinosaur2 = new Dinosaur("Velociraptor", 4);
  })

  it("dinosaur has type", function() {
    assert.strictEqual(dinosaur1.type, "Tyrannosaurus");
    assert.strictEqual(dinosaur2.type, "Velociraptor");
  })

})