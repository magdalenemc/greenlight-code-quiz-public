/* global chai sinon logPosition jobTitle salary */

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

    const jobs = {
      10000: 'Part Time',
      30000: 'Entry Level',
      60000: 'Management Level',
      200000: 'Senior Level',
      other: 'C-Suite Level',
    };

    describe('else-if-salary', () => {
      beforeEach(() => sinon.spy(console, 'log'));

      afterEach(() => console.log.restore());

      it('should exist', () => {
        should.exist(logPosition);
        should.exist(salary);
      });
      it("should print the proper values", () => {
        logPosition();
        jobs[salary] ?
        console.log.calledWith(jobs[salary]).should.be.true :
        console.log.calledWith(jobs.other).should.be.true;
      });
    });

    mocha.run();
  };
})(window, window.$, window._);
