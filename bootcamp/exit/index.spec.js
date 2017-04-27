/* global chai sinon */

(function(window, $, _) {
  window.opspark = window.opspark || {};
  window.opspark.spec = window.opspark.spec || {};

  window.opspark.spec.execute = () => {
    'use strict';

    $('#mocha-stats').remove();
    $('#mocha-report').remove();
    setTimeout(() => $('.replay').remove(), 20);

    mocha.setup('tdd');

    const assert = window.assert = chai.assert;
    const expect = window.expect = chai.expect;
    const should = window.should = chai.should();

    chai.use(function (_chai, _) {
      _chai.Assertion.addMethod('it', function (msg) {
        _.flag(this, 'message', msg);
      });
    });

//////////////////////////////////////////////////////////////////////
//              WRITE YOUR TESTS BELOW HERE
    /* globals numbers */

    suite("Bootcamp Exit", function() {
      test("Array", function() {
        expect(numbers).it('should be an array\n> ').to.be('array');
        expect(numbers)
          .it('should contain values 1, 2, 3').to.eql([1, 2, 3]);
      });
    });
    

//               WRITE YOUR TESTS ABOVE HERE    
//////////////////////////////////////////////////////////////////////

    mocha.run();
  };
}(window, window.$, window._));
