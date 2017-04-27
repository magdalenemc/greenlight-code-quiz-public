/* global chai sinon matrix twoByTwo threeByThree */

((window, $, _) => {
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
    /* globals should nameOfFunctionToTest */

    describe('Matrices', () => {
      const matrices = [matrix, twoByTwo, threeByThree];

      it('should exist', () => {
        should.exist(matrix);
        should.exist(twoByTwo);
        should.exist(threeByThree);
      });

      matrices.forEach((matrix, i) => {

        i + 1 === 1 ?
          it(`should contain no collections`, () => {
            (_.every(matrix, val => typeof val !== 'object')).should.be.true;
          }):
          it(`should contain elements with a length of ${i + 1}`, () => {
            (_.every(matrix, val => val.length === i + 1)).should.be.true;
          });

        it(`should be an matrix of length ${i + 1}`, () => {
          (matrix.length).should.equal(i + 1);
        });

        it('should contain the proper values', () => {
          _.flatten(matrix).should.eql(_.range(1, Math.pow(i + 1, 2) + 1));
        });



      });

    });

//               WRITE YOUR TESTS ABOVE HERE
////////////////////////////////////////////////////////////////////

    mocha.run();
  };
})(window, window.$, window._);
