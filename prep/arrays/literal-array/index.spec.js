/* global chai sinon main groceries */

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

    const groceries2 = ['eggs', 'bacon', 'bread', 'milk', 'bananas'];

    describe('iterate', () => {

      beforeEach(() => sinon.spy(console, 'log'));

      afterEach(() => console.log.restore());

      it('should exist', () => {
        should.exist(groceries);
      });

      groceries2.forEach((grocery, i) =>
        it(`should contain ${grocery}`, () =>
          groceries.contains(grocery).should.be.true));
    });

    mocha.run();
  };
})(window, window.$, window._);
