(function (window, $, _, chai, sinon) {
  window.opspark = window.opspark || {};
  window.opspark.spec = window.opspark.spec || {};

  window.opspark.spec.execute = function () {
    'use strict';

    $('#mocha-stats').remove();
    $('#mocha-report').remove();
    setTimeout(function() {
      $('.replay').remove();
    }, 20);

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
    describe("#stringy", function () {
      beforeEach(function () {
        sinon.spy(console, 'log');
      });

      afterEach(function () {
        console.log.restore();
      });
      var assignment = window;
      describe("length", function () {
        it('should return the length of the input String', function () {
          expect(assignment.length('hello')).to.equal(5);
          expect(assignment.length('you')).to.equal(3);
        });
      });

      describe("toLowerCase", function () {
        it('should return a lowercase version of the input String', function () {
          expect(assignment.toLowerCase('HELLO')).to.equal('hello');
        });
      });

      describe("toUpperCase", function () {
        it('should return an uppercase version of the input String', function () {
          expect(assignment.toUpperCase('hello')).to.equal('HELLO');
        });
      });

      describe("toDashCase", function () {
        it('should return a dash-cased version of the input String', function () {
          expect(assignment.toDashCase('Hello World')).to.equal('hello-world');
          expect(assignment.toDashCase('Should Work With Many Words')).to.equal('should-work-with-many-words');
        });
      });

      describe("beginsWith", function () {
        it('should return true if the input String begins with the input character, false otherwise', function () {
          expect(assignment.beginsWith('Hello World', 'h')).to.be.true;
          expect(assignment.beginsWith('Hello World', 'H')).to.be.true;
          expect(assignment.beginsWith('Hello World', 'a')).to.be.false;
        });
      });

      describe("endsWith", function () {
        it('should return true if the input String ends with the input character, false otherwise', function () {
          expect(assignment.endsWith('Hello World', 'd')).to.be.true;
          expect(assignment.endsWith('Hello World', 'D')).to.be.true;
          expect(assignment.endsWith('Hello World', 'a')).to.be.false;
        });
      });

      describe("concat`", function () {
        it('should return the two input Strings concatenated', function () {
          expect(assignment.concat('Hello ', 'World')).to.equal('Hello World');
        });
      });

      describe("join`", function () {
        it('should return all input Strings concatenated', function () {
          expect(assignment.join('Hello ', 'there, ', 'you ', 'prince!')).to.equal('Hello there, you prince!');
        });
      });

      describe("longest`", function () {
        it('should return the longest of two input Strings', function () {
          expect(assignment.longest('abc', 'z')).to.equal('abc');
          expect(assignment.longest('z', 'abc')).to.equal('abc');
        });
      });

      describe("sortAscending`", function () {
        it('should return 1 if stringOne is alphabetically higher than stringTwo', function () {
          expect(assignment.sortAscending('abc', 'acb')).to.equal(1);
        });
        it('should return -1 if stringOne is alphabetically lower than stringTwo', function () {
          expect(assignment.sortAscending('acb', 'abc')).to.equal(-1);
        });
        it('should return 0 if stringOne is alphabetically equivalent to stringTwo', function () {
          expect(assignment.sortAscending('abc', 'abc')).to.equal(0);
        });
      });

      describe("sortDescending`", function () {
        it('should return -1 if stringOne is alphabetically lower than stringTwo', function () {
          expect(assignment.sortDescending('abc', 'acb')).to.equal(-1);
        });
        it('should return 1 if stringOne is alphabetically higher than stringTwo', function () {
          expect(assignment.sortDescending('acb', 'abc')).to.equal(1);
        });
        it('should return 0 if stringOne is alphabetically equivalent to stringTwo', function () {
          expect(assignment.sortDescending('abc', 'abc')).to.equal(0);
        });
      });
    });

    //////////////////////////////////////////////////////////////////////////////////
    mocha.run();
  };
}(window, window.$, window._, window.chai, window.sinon));