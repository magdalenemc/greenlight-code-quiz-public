/* global chai sinon giveGrade */

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

    describe('giveGrade()', () => {
      const grades = []
        .concat(new Array(60).fill('F'))
        .concat(new Array(10).fill('D'))
        .concat(new Array(10).fill('C'))
        .concat(new Array(10).fill('B'))
        .concat(new Array(10).fill('A'));

      it('should exist', () => {
        should.exist(giveGrade);
      });

      _.each(grades, (letterGrade, grade) => {
        it(`Shoud give ${letterGrade} for ${grade}%`, () => {
          giveGrade(grade).should.equal(grades[grade]);
        });
      });

    });

    mocha.run();
  };
})(window, window.$, window._);
