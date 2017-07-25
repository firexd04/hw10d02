var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js");

describe("Park", function() {
  var park;

  beforeEach( function() {
    park = new Park();
    dinosaur1 = new Dinosaur("Tyrannosaurus", 3);
    dinosaur2 = new Dinosaur("Velociraptor", 4);
    dinosaur3 = new Dinosaur("Tyrannosaurus", 1);
    dinosaur4 = new Dinosaur("Velociraptor", 2);
  })

  it("enclosure starts empty", function() {
    assert.strictEqual(park.size(), 0);
     })

  it("can add dinosaur to enclosure", function() {
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.size(), 1);
  })

  it("can remove dinosaurs of certain type", function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.removeDinosaur("Velociraptor");
    assert.strictEqual(park.size(), 2);
  })

  it("can remove dinosaurs with more than acertain number of offsprings", function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    assert.strictEqual(park.getDinosaursMoreThanNumberOfssprings(2), 2);
  })

  it("caluculate number of dinosaurs after year one, starting with 1 dinosaur", function() {
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.calculateNumberDinosaurs(), 4);
  })

  it("caluculate number of dinosaurs after year two, starting with 1 dinosaur", function() {
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.calculateNumberDinosaursYear2(), 16);
  })

  it("caluculate number of dinosaurs after year two, with 2 dinosaurs", function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur3);
    assert.strictEqual(park.calculateNumberDinosaursYear22(), 20);
  })

  // it("caluculate number of dinosaurs after year two, with 2 dinosaurs", function() {
  //   park.addDinosaur(dinosaur1);
  //   park.addDinosaur(dinosaur3);
  //   assert.strictEqual(park.calculateNumberDinosaursAYear(), 20);
  // })

  // it("caluculate number of dinosaurs after x years, starting with 1 dinosaur", function() {
  //   park.addDinosaur(dinosaur1);
  //   assert.strictEqual(park.calculateNumberDinosaursXYears(5), 4);
  // })


  })

