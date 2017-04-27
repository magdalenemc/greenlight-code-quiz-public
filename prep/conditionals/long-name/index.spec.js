/* global chai sinon firstName logName */

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

    describe('logName()', () => {
      it('should exist', () => {
        should.exist(firstName);
        should.exist(logName);
      });

      firstName.length >= 7 ?
        it('should log "You have a pretty long..." for name > 6 char', () => {
          logName();
          console.log.calledWith(`You have a pretty long name, ${firstName}`)
            .should.be.true;
        }) :
        it('should log "You have a pretty short..." for names < 7 char', () => {
          logName();
          console.log.calledWith(`You have a pretty short name, ${firstName}`)
            .should.be.true;
        });




    });

    mocha.run();
  };
})(window, window.$, window._);
