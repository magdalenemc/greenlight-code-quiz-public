/* global chai sinon add */

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

    describe('add()', () => {
      const getNum = () => Math.floor(Math.random() * 199) - 99;
      const testArray = (new Array(10)).fill(1);

      it('should exist', () => {
        should.exist(add);
      });

      testArray.forEach(() => {
        let num1 = getNum();
        let num2 = getNum();
        it(`adds the numbers ${num1} and ${num2} together`, () => {
          add(num1, num2).should.equal(num1 + num2);
        });
      });

    });

    mocha.run();

  };
})(window, window.$, window._);
