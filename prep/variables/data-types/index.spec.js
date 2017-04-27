/* global chai greeting myName myAge isAdult */

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

    describe("About Data Types", () => {

      it("should create variables with different types", () => {
        const variables = [
          { name: myName, type: 'string', },
          { name: myAge, type: 'number', },
          { name: isAdult, type: 'boolean', },
        ];
        variables.forEach(variable =>
          (typeof variable.name).should.equal(variable.type));
      });

      it('isAdult should have the correct boolean value', () => {
        myAge >= 18 ? isAdult.should.be.true : isAdult.should.be.false;
      });

    });
    mocha.run();
  };
})(window, window.$, window._);
