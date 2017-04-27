/* global chai sinon greeter */

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

    describe("Greeter App", () => {

      beforeEach(() => sinon.spy(console, 'log'));

      afterEach(() => console.log.restore());

      it('should print Good Morning! if hour is between 0 and 11', () => {
        greeter(11);
        console.log.calledWith('Good Morning!').should.be.true;
      });

      it('should print Good Afternoon! if hour is between 12 and 16', () => {
        greeter(12);
        console.log.firstCall.calledWith('Good Afternoon!').should.be.true;

        greeter(16);
        console.log.secondCall.calledWith('Good Afternoon!').should.be.true;
      });

      it('should print Good Evening! if hour is between 17 and 21', () => {
        greeter(17);
        console.log.firstCall.calledWith('Good Evening!').should.be.true;

        greeter(20);
        console.log.secondCall.calledWith('Good Evening!').should.be.true;
      });

      it('should print Good Night! if hour is between 22 and 23', () => {
        greeter(22);
        console.log.firstCall.calledWith('Good Night!').should.be.true;

        greeter(23);
        console.log.secondCall.calledWith('Good Night!').should.be.true;

        greeter(0);
        console.log.thirdCall.calledWith('Good Night!').should.be.false;
      });
    });

    mocha.run();
  };
})(window, window.$, window._);
