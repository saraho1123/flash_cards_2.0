const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn');
const prototypeData = require('../src/data')


describe('Turn', function() {


  it('should be a function', function() {
    let turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    let turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('Should initilize with a guess and current card being played', function(){
    let card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    let turn = new Turn('object', card)
  });

  


});
