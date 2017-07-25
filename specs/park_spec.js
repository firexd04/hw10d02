var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js");

describe("Park", function() {
  var park;

  beforeEach( function() {
    park = new Park();
    dinosaur1 = new Dinosaur("Tyrannosaurus", 3);
    dinosaur2 = new Dinosaur("Velociraptor", 4);
  })

  it("enclosure starts empty", function() {
    assert.strictEqual(park.size(), 0);
     })

  it("can add dinosaur to enclosure", function() {
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.size(), 1);
  })


  })

