/* global chai greeting myName myAge isAdult jobTitle salary */

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

    describe("About Variables", () => {

      it("should create variables", () =>
        greeting.should.equal('Hello World'));

      it("should create variables with different types", () => {
        const exists = [
          { name: myName, type: 'string', },
          { name: myAge, type: 'number', },
          { name: isAdult, type: 'boolean', },
        ];
        exists.forEach(exist => (typeof exist.name).should.equal(exist.type));
        myAge >= 18 ? isAdult.should.be.true : isAdult.should.be.false;
      });

      it("should re-assign variables", () => {
        if(jobTitle === 'Junior Software Developer' || !jobTitle){
          salary.should.equal(60000);
        }
        if(salary === 60000 || !salary){
          jobTitle.should.equal('Junior Software Developer');
        }
        if( jobTitle === 'Junior Software Developer' && salary === 60000){
          salary.should.equal(75000);
          jobTitle.should.equal('Team Lead');
        }
      });
    });
    mocha.run();
  };
})(window, window.$, window._);
