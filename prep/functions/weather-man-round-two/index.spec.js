/* global chai sinon weatherMan */

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



    describe('weatherMan()', () => {
      const weathers = {
        sunny: 'Bring out the sunglasses, folks!',
        rainy: 'Time to bring out the umbrellas and raincoats!',
        cloudy: 'Ideal day for vampires - no sun in sight!',
        any: 'Hm, must be snowing or something',
      };

      it('should exist', () => {
        should.exist(weatherMan);
      });

      _.each(weathers, (sentence, weather) => {
        it(`Should say the correct response for ${weather} weather`, () => {
          weatherMan(weather).should.equal(sentence);
        });
      });

    });

    mocha.run();
  };
})(window, window.$, window._);
