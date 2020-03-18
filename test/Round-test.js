const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Deck');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let round;
  let deck;

  beforeEach(function(){
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });



  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it ('should take a deck of cards in', function() {
    expect(round.deck).to.deep.equal([card1, card2, card3])
  })

  describe('returnCurrentCard Method', function(){
    it('Should return the first card in the deck', function(){
      expect(round.returnCurrentCard()).to.equal(card1)
    });

  });


});
