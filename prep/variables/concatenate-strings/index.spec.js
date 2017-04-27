/* global chai sinon myName greeting1 greeting2 myGreeting */

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

    describe('About Concatenate Strings', () => {
      const strings = [
        { name: 'myName', input: myName, },
        { name: 'greeting1', input: greeting1, result: 'Hello my name is', },
        { name: 'greeting2', input: greeting2, result: 'Nice to meet you', },
        { name: 'myGreeting',
          input: myGreeting,
          result: `${greeting1} ${myName} ${greeting2}`,
        },
      ];

      strings.forEach(string => {
        it(`Should create variable ${string.name}`, () =>
          (typeof string.input).should.equal('string'));
      });

      strings.slice(1).forEach(string => {
        it(`${string.name} should have the proper value`, () =>
          string.input.should.equal(string.result));
      });

    });

    mocha.run();
  };
})(window, window.$, window._);
