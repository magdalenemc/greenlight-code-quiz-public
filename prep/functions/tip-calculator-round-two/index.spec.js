/* global chai sinon */

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

    describe('nameOfFunctionToTest()', () => {
      it('should exist', () => {
        should.exist(nameOfFunctionToTest);
      });
    });

//               WRITE YOUR TESTS ABOVE HERE
////////////////////////////////////////////////////////////////////

    mocha.run();
  };
})(window, window.$, window._);
