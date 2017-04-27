/* global chai sinon subtract */

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


    describe('subtract()', () => {
      const getNum = () => Math.floor(Math.random() * 199) - 99;

      it('should exist', () => {
        should.exist(subtract);
      });

      Array.apply(null, Array(10)).forEach(() => {
        let num1 = getNum();
        let num2 = getNum();
        it(`Should subtract ${num2} from ${num1}`, () => {
          subtract(num1, num2).should.equal(num1 - num2);
        });
      });

    });

    mocha.run();
  };
})(window, window.$, window._);
