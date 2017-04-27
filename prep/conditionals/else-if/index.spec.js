/* global chai sinon condition1, condition2, main */

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

    describe("Else If", () => {
      beforeEach(() => sinon.spy(console, 'log'));

      afterEach(() => console.log.restore());

      it('should exist', () => {
        should.exist(main);
        should.exist(condition1);
        should.exist(condition2);
      });

      it('should be proper booleans', () => {
        condition1.should.be.false;
        condition2.should.be.true;
      });

      it('should print the proper values', () => {
        main();
        console.log.firstCall
          .calledWith('Condition2 is false.').should.be.true;
      });
    });

    mocha.run();
  };
})(window, window.$, window._);
