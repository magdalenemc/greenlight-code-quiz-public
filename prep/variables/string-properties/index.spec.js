/* global chai greeting myString stringLength shortenedString */

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

    describe("About Variables", () => {

      it("should create variables", () =>
        myString.should.equal('halleBot'));

      it("should store length", () =>
        (stringLength).should.equal(myString.length));

      it("should shorten string", () =>
        (shortenedString).should.equal(myString.substring(0,3)));

    });
    mocha.run();
  };
})(window, window.$, window._);
