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
    mocha.allowUncaught();

    const assert = window.assert = chai.assert;
    const expect = window.expect = chai.expect;
    const should = window.should = chai.should();

    /* globals shuffle should */

    describe('shuffle()', function () {
      it('should exist', function () {
        should.exist(shuffle);
      });

      it('should return a new array', function () {
        const input = [1, 2, 3, 4, 5];
        const actual = shuffle(input);
        actual.should.not.eql(input);
      });

      it('should not be destructive', function () {
        const input = [1, 2, 3, 4, 5];
        const actual = shuffle(input);
        input.should.eql([1, 2, 3, 4, 5]);
      });

      it('should return an array', function () {
        const input = [1, 2, 3, 4, 5];
        shuffle(input).should.be.an('array');
      });

      it('should have same number of values as input array', function () {
        const input = [1, 2, 3, 4, 5];
        shuffle(input).should.have.lengthOf(input.length);
      });

      it('should contain exact values of same type as input array', function () {
        const input = [1, 2, 3, 4, 5];
        shuffle(input).should.satisfy(nums => nums.every(num => typeof num === 'number'));
      });

      it('should have no dulicates', function () {
        const input = [1, 2, 3, 4, 5];
        hasDuplicates(shuffle(input)).should.be.false;

      });
      it('should not contain items in same order', function () {
        const input = [1, 2, 3, 4, 5];
        shuffle(input).should.not.eql(input);
      });
    });

    function hasDuplicates(array) {
      return _.uniq(array).length !== array.length;
    }

    mocha.run();
  };
}(window, window.$, window._));
