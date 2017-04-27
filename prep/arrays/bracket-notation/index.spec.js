/* global chai sinon colors main */

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

    const adminColors = [
      'pink', 'blue', 'red', 'orange', 'green', 'red', 'purple',
    ];

    describe('bracket-notation', () => {
      beforeEach(() => sinon.spy(console, 'log'));

      afterEach(() => console.log.restore());

      it('should exist', () => should.exist(main));

      it('should be an array', () => colors.should.be.an.array);

      adminColors.forEach(color => {
        it(`should contain the color ${color}`, () =>
          colors.includes(color).should.be.true);

        it(`should print the color ${color}`, () => {
          main();
          console.log.calledWith(color)
            .should.be.true;
        });
      });

    });

    mocha.run();
  };
})(window, window.$, window._);
