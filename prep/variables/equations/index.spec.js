/* global chai testGrade, quizGrade, homeworkGrade, classAverage*/

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

    describe("Equations", () => {

      it("should store grades", () => {
        const grades = [ testGrade, quizGrade, homeworkGrade, classAverage ];
        grades.forEach(grade => (typeof grade).should.equal('number'));
      });

      it("Class Average Should be the average of all grades", () => {
        classAverage.should.equal((testGrade + quizGrade + homeworkGrade)/3);
      });



    });
    mocha.run();
  };
})(window, window.$, window._);
