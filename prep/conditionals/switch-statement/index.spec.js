/* global chai sinon logGrade grade */

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

    describe('logGrade()', () => {

      it('should exist', () => {
        should.exist(logGrade);
        should.exist(grade);
      });

      it('should be an A', () => grade.should.be('A'));

      it('should exist', () => {
        logGrade();
        console.log.calledWith('Great job! You aced the course!')
          .should.be.true;
      });

    });

    mocha.run();
  };
})(window, window.$, window._);
