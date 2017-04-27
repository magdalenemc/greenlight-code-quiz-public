/* global chai sinon main conditionIsTrue */

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

    describe("Booly-Test", () => {
      beforeEach(() => sinon.spy(console, 'log'));

      afterEach(() => console.log.restore());

      it('should exist', () => should.exist(main));

      it('should be true', () => conditionIsTrue.should.be.true);

      it('should print the proper values', () => {
        main();
        console.log.firstCall
          .calledWith('The condition is true.')
          .should.be.true;
      });
    });

    mocha.run();
  };
})(window, window.$, window._);
