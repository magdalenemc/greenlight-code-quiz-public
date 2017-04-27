/* global chai sinon logIsEven myNum */

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


    describe('is-even', () => {
      beforeEach(() => sinon.spy(console, 'log'));

      afterEach(() => console.log.restore());

      it('should exist', () => {
        should.exist(logIsEven);
        should.exist(myNum);
      });

      it("should print the proper values", () => {
        logIsEven();
        myNum % 2 ?
        console.log.calledWith(`${myNum} is odd`).should.be.true :
        console.log.calledWith(`${myNum} is even`).should.be.true;
      });

    });

    mocha.run();
  };
})(window, window.$, window._);
