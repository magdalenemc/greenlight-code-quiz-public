/* global chai sinon greeting */

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


    describe("Greeting", () => {
      const names = ['Ali', 'Maggie', 'Harvey', 'Alison', 'Aaron',];
      beforeEach(() => sinon.spy(console, 'log'));

      afterEach(() => console.log.restore());

      names.forEach((name) => {
        it(`should print a greeting to ${name}`, () => {
          greeting(name);
          console.log
            .calledWith(`Hello, ${name} nice to meet you!`)
            .should.be.true;
        });
      });
    });

    mocha.run();
  };
})(window, window.$, window._);
