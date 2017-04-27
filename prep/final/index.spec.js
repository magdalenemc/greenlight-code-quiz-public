/* global chai sinon */

(function(window, $, _) {
  window.opspark = window.opspark || {};
  window.opspark.spec = window.opspark.spec || {};

  window.opspark.spec.execute = () => {
    'use strict';

    $('#mocha-stats').remove();
    $('#mocha-report').remove();
    setTimeout(() => $('.replay').remove(), 20);

    mocha.setup('bdd');

    const assert = window.assert = chai.assert;
    const expect = window.expect = chai.expect;
    const should = window.should = chai.should();

    chai.use((_chai, _) =>
      _chai.Assertion.addMethod('it', msg =>
        _.flag(this, 'message', msg)));

    
///////////////////////////////////////////////////////////////////
//              WRITE YOUR TESTS BELOW HERE
    /* eslint max-len:0 */
    /* globals 
     * should
     * halleEats
     * orderedItems
     * helpers
     * calculateTax
     * calculateGrandTotal
     * calculateSubTotal
     * getDeliveryETA
     */
    const getRandomIndex = array => Math.floor(Math.random() * array.length);

    describe('orderedItems', () => {
      it('should be an array', () => {
        orderedItems.should.to.be.an('array');
      });
      it('should contain at least 3 items.', () => {
        orderedItems.should.have.length.above(2);
      });
      
      describe('an item', () => {
        it('should have name and price properties', () => {
          orderedItems.forEach(item => {
            item.should.have.all.keys('name', 'price');
          });
        });
       
        it('price should be of type Number', () => {
          orderedItems.forEach(item => {
            item.price.should.be.a('number');
          });
        });

        it('price should be in dollars, rounded to the the nearest cent', () => {
          const isRoundedToNearestCent = dollars => dollars * 100 % 1 === 0; 
          orderedItems.forEach(item => {
            isRoundedToNearestCent(item.price).should.be.true;
          });
        });
        
        it('should have a name property with the name of the food', () => {
          orderedItems.forEach(item => {
            item.name.should.be.a('string');
            item.name.should.have.length.above(1);
          });
        });
        
      });
    });

    describe('calculateSubTotal', () => {
     

      it('should calculate the subtotal of ordered items.', () =>{
        var ordered = [
          {
            name: "fried catfish",
            price: 10.99,
          },
          {
            name: "shrimp and grits",
            price: 12.49,
          },
          {
            name: "iced tea",
            price: 2.49,
          },
        ];
        calculateSubTotal(ordered).should.equal(25.97);
      });
    });

    describe('helpers.dollarsToCents()', () =>{
      beforeEach(() => {
        sinon.spy(helpers, 'dollarsToCents');
      });

      afterEach(() => {
        helpers.dollarsToCents.restore();
      });

      it('should return an integer', () => {
        (helpers.dollarsToCents(53.45) % 1 === 0).should.be.true;
      });
      it('should convert $113.15 to 11315 cents', () =>{
        helpers.dollarsToCents(113.15).should.equal(11315);
      });
      it('should be used in your calculateSubToal function.', () => {
        var ordered = [{ name: "fried catfish", price: 10.99 },{ name: "shrimp and grits", price: 12.49 },{ name: "iced tea", price: 2.49 }];
        calculateSubTotal(ordered);
        helpers.dollarsToCents.callCount.should.equal(ordered.length);
        ordered.forEach(item => {
          helpers.dollarsToCents.calledWith(item.price).should.be.true;
        });
      });
    });

    describe('helpers.centsToDollars()', () => {
      beforeEach(() => {
        sinon.spy(helpers, 'centsToDollars');
      });

      afterEach(() => {
        helpers.centsToDollars.restore();
      });

      it('should convert 313451 cents to $3134.51', () =>{
        helpers.centsToDollars(313451).should.equal(3134.51);
      });

      it('should be used in your calculateSubToal function.', () => {
        var ordered = [{ name: "fried catfish", price: 10.99 },{ name: "shrimp and grits", price: 12.49 },{ name: "iced tea", price: 2.49 }];
        calculateSubTotal(ordered);
        helpers.centsToDollars.called.should.be.true;
      });
    });

    describe('calculateTax', () => {
      it('should return a number', () => {
        calculateTax(2, 9).should.be.a.number;
      });
      it('should return $1.20 in taxes for a subtotal of $14.51', () => {
        calculateTax(13.31, 9).should.equal(1.20);
      });
      it('should return $0.15 in taxes for a subtotal of $2.31', () => {
        calculateTax(2.31, 6.7).should.equal(0.15);
      });
    });

    describe('calculateGrandTotal', () => {
      it('should return $28.15 for an order of [10.99, 12.49, 2.49] and 9% tax.', () => {
        var ordered = [{ name: "fried catfish", price: 10.99 },{ name: "shrimp and grits", price: 12.49 },{ name: "iced tea", price: 2.49 }];
        calculateGrandTotal(ordered, 9).should.equal(28.31);
      });

      it('should return a total of $3.68 for an order of $3.33 + 8.19% sales tax.', () => {
        var ordered = [{ name: 'mac and cheese', price: 3.33 }];
        var texasSalesTax = 8.19;
        calculateGrandTotal(ordered, texasSalesTax).should.equal(3.60);
      });
    });

    describe('getDeliveryETA', () => {
      beforeEach(() => {
        sinon.spy(console, 'log');
      });

      afterEach(() => {
        console.log.restore();
      });

      it('should inform the user for invalid distances.', () => {
        getDeliveryETA('chicken nuggets');
        console.log.calledWith('Invalid distance. Please input distance as a number of miles.')
          .should.be.true;
      });

      it('should inform when their location is too far.', () => {
        getDeliveryETA(92000000);
        console.log.calledWith('Sorry..you\'re too far. Go get it yourself.')
          .should.be.true;
      });

      it('should inform the user for invalid distances.', () => {
        getDeliveryETA('chicken nuggets');
        console.log.calledWith('Invalid distance. Please input distance as a number of miles.')
          .should.be.true;
      });
    });

//               WRITE YOUR TESTS ABOVE HERE
////////////////////////////////////////////////////////////////////

    mocha.run();
  };
})(window, window.$, window._);
