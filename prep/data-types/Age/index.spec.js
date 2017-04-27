/* global chai sinon logAge myAge */

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


    describe("Age", () => {
      beforeEach(() => sinon.spy(console, 'log'));

      afterEach(() => console.log.restore());

      it('should exist', () => {
        should.exist(logAge);
      });

      it('myAge should be a number', () => {
        should.exist(myAge);
        myAge.should.be.a('number');
      });

      it(`should print ${myAge} to the consolee`, () => {
        logAge(myAge);
        console.log.calledWith(myAge).should.be.true;
      });
    });

    mocha.run();
  };
})(window, window.$, window._);
