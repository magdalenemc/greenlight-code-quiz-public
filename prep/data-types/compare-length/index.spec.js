/* global chai sinon logCompare */

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

    describe('logCompare()', () => {
      it('should exist', () => should.exist(logCompare));

      it('should print the proper values', () => {
        logCompare();
        console.log.firstCall.calledWith(true).should.be.true;
        console.log.secondCall.calledWith(true).should.be.true;
        console.log.thirdCall.calledWith(true).should.be.true;
      });
      
    });
    mocha.run();
  };
})(window, window.$, window._);
