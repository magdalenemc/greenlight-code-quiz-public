/* global chai sinon logWeather weather */

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

    describe('logWeather()', () => {
      it('should exist', () => {
        should.exist(logWeather);
        should.exist(weather);
      });

      it('should be rainy', () => weather.should.be('rainy'));

      it('should log properly', () =>
        console.log.calledWith('Time to bring out your raincoat!').to.be.true
      );

    });

//               WRITE YOUR TESTS ABOVE HERE
////////////////////////////////////////////////////////////////////

    mocha.run();
  };
})(window, window.$, window._);
