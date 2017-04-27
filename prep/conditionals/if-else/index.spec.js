/* global chai sinon conditionIsTrue main */

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


    describe('if-else', () => {
      beforeEach(() => sinon.spy(console, 'log'));

      afterEach(() => console.log.restore());

      it('should exist', () => {
        should.exist(main);
        should.exist(conditionIsTrue);
      });

      it("should print the proper values", () => {
        main();
        console.log.calledWith("The condition is false.").should.be.false;
      });

    });

    mocha.run();
  };
})(window, window.$, window._);
