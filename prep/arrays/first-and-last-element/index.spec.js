/* global chai sinon firstElement secondElement names */

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

    describe('first-and-last-elements', () => {

      it('should equal the first element', () =>
        firstElement.should.equal(_.first(names)));

      it('should equal the last element', () =>
        secondElement.should.equal(_.last(names)));

    });

    mocha.run();
  };
})(window, window.$, window._);
