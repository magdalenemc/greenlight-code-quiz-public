/* global chai sinon main names */

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

    describe('iterate', () => {

      beforeEach(() => sinon.spy(console, 'log'));

      afterEach(() => console.log.restore());

      it('should exist', () => {
        should.exist(main);
      });

      names.forEach(name => {
        it(`should contain the name ${name}`, () =>
          names.includes(name).should.be.true);

        it(`should print the name ${name}`, () => {
          main();
          console.log.calledWith(name)
            .should.be.true;
        });
      });
    });

    mocha.run();
  };
})(window, window.$, window._);
