/* global chai sinon evenOrOdd */

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


    describe('evenOrOdd()', () => {
      const getNum = () => Math.floor(Math.random() * 199) - 99;
      const testEvenOrOdd = myNum => (myNum % 2 === 0 ?
          `${myNum} is an even number!` :
          `${myNum} is an odd number!`
        );
      it('should exist', () => {
        should.exist(evenOrOdd);
      });

      Array.apply(null, Array(10)).forEach(() => {
        let num = getNum();
        it(`Should tell us if ${num} is even or odd`, () => {
          evenOrOdd(num).should.equal(testEvenOrOdd(num));
        });
      });

    });

    mocha.run();
  };
})(window, window.$, window._);
