(function (window, $, _) {
  window.opspark = window.opspark || {};
  window.opspark.spec = window.opspark.spec || {};

  window.opspark.spec.execute = function () {
    'use strict';

    $('#mocha-stats').remove();
    $('#mocha-report').remove();
    setTimeout(() => {
      $('.replay').remove();
    }, 20);

    mocha.setup('bdd');

    const assert = window.assert = chai.assert;
    const expect = window.expect = chai.expect;
    const mock = window.mock = sinon.mock;
    const should = window.should = chai.should();

    chai.use(function (_chai, _) {
      _chai.Assertion.addMethod('it', function (msg) {
        _.flag(this, 'message', msg);
      });
    });

    describe("Greeter App", function () {

      beforeEach(function () {
        sinon.spy(console, 'log');
      });

      afterEach(function () {
        console.log.restore();
      });

      it('should print Good Morning! if hour is between 0 and 11', function () {
        greeter(11);
        expect(console.log.calledWith('Good Morning!')).to.be.true;
      });
      it('should print Good Afternoon! if hour is between 12 and 16', function () {
        greeter(12);
        expect(console.log.firstCall.calledWith('Good Afternoon!')).to.be.true;
        greeter(16);
        expect(console.log.secondCall.calledWith('Good Afternoon!')).to.be.true;
        // greeter(17);
        // expect(console.log.thirdCall.calledWith('Good Afternoon!')).to.be.false;

      });
      it('should print Good Evening! if hour is between 17 and 21', function () {
        greeter(17);
        expect(console.log.firstCall.calledWith('Good Evening!')).to.be.true;
        greeter(20);
        expect(console.log.secondCall.calledWith('Good Evening!')).to.be.true;
        // greeter(22);
        // expect(console.log.thirdCall.calledWith('Good Evening!')).to.be.false;
      });
      it('should print Good Night! if hour is between 22 and 23', function () {
        greeter(22);
        expect(console.log.firstCall.calledWith('Good Night!')).to.be.true;
        greeter(23);
        expect(console.log.secondCall.calledWith('Good Night!')).to.be.true;
        greeter(0);
        expect(console.log.thirdCall.calledWith('Good Night!')).to.be.false;
      });

    });

    mocha.run();
  };
}(window, window.$, window._));