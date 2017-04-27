(function (window, $, _) {
    window.opspark = window.opspark || {};
    window.opspark.spec = window.opspark.spec || {};

    window.opspark.spec.execute = function() {
        'use strict';

        $('#mocha-stats').remove();
        $('#mocha-report').remove();
        setTimeout(() => { $('.replay').remove(); }, 20);

        mocha.setup('bdd');


        const assert = window.assert = chai.assert;
        const expect = window.expect = chai.expect;
        const should = window.should = chai.should();

        chai.use(function (_chai, _) {
            _chai.Assertion.addMethod('it', function (msg) {
                _.flag(this, 'message', msg);
            });
        });

//////////////////////////////////////////////////////////////////////////////////
        suite("name of project", function () {
            test("what are we testing for", function () {
              // expect something here
            });
        });
//////////////////////////////////////////////////////////////////////////////////
        mocha.run();
    };
}(window, window.$, window._));
