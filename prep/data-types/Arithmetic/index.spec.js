/* global chai sinon logArithmetic */

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

    describe("Arithmetic", () => {
      beforeEach(() => sinon.spy(console, 'log'));

      afterEach(() => console.log.restore());

      it('should exist', () => {
        should.exist(logArithmetic);
      });

      it('should print the proper values', () => {
        logArithmetic();
        console.log.firstCall.calledWith(4).should.be.true;
        console.log.secondCall.calledWith(10.5 - 9.2).should.be.true;
        console.log.thirdCall.calledWith(-1.5).should.be.true;
        console.log.lastCall.calledWith(-20.8).should.be.true;
      });
    });

//               WRITE YOUR TESTS ABOVE HERE
////////////////////////////////////////////////////////////////////

    mocha.run();
  };
})(window, window.$, window._);
