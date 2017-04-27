/* global chai sinon myNum logNum */

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

    describe('gimme-five()', () => {

      beforeEach(() => sinon.spy(console, 'log'));

      afterEach(() => console.log.restore());

      it('should exist', () => {
        should.exist(logNum);
        should.exist(myNum);
      });
      it('should be larger than 5', () => (myNum > 5).should.be.true);
      it("should print your number larger than 5", () =>
        console.log.calledWith(`${myNum} is larger than 5`).should.be.true);

    });

    mocha.run();
  };
})(window, window.$, window._);
