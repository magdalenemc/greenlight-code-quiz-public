/* global chai myAge text */

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

    describe("About Conditionals", () => {

      it("should create a variable age", () =>
        (typeof myAge).should.equal('number'));

      it("should re-assign text according to age", () =>
        myAge < 18 ?
          text.should.equal('I am a minor') :
          text.should.equal('I am not a minor'));

    });
    mocha.run();
  };
})(window, window.$, window._);
