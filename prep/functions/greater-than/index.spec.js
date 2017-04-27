/* global chai sinon greaterThan */

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

    describe('greaterThan()', () => {
      const getNum = () => Math.floor(Math.random() * 199) - 99;

      it('should exist', () => {
        should.exist(greaterThan);
      });

      Array.apply(null, Array(10)).forEach(() => {
        let num1 = getNum();
        let num2 = getNum();
        it(`Should tell us which number is bigger: ${num1} ${num2}`, () => {
          greaterThan(num1, num2).should.equal(Math.max(num1, num2));
        });
      });

    });

    mocha.run();
  };
})(window, window.$, window._);
