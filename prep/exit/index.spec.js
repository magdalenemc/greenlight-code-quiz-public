/* global chai sinon */

(function(window, $, _) {
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

/////////////////////////////////////////////////////////////////////////////////////////////////
//              WRITE YOUR TESTS BELOW HERE
    /* globals should nameOfFunctionToTest urlParts makePersonalUrl myData */

    describe('urlParts', function () {
      it('should exists', function () {
        should.exist(urlParts);
      });

      it('should be an array', function() {
        urlParts.should.be.an('array');
      });

      it('should have three elements', function() {
        urlParts.should.have.lengthOf(3);
      });

      it('should contain only strings', function() {
        urlParts.should.satisfy(strings => 
          strings.every(string =>
            string.should.be.a('string')));
      });

      it('should have "github" as the 2nd element, and "io" as the 3rd.', function(){
        urlParts[1].should.equal('github');
        urlParts[2].should.equal('io');
      });
    });

    describe('makePersonalUrl', function() {
      it('should exists', function () {
        should.exist(makePersonalUrl);
      });
      
      it('should convert ["hallebot", "github", "io"] to "hallebot.github.io"', function () {
        const input = ['hallebot', 'github', 'io'];
        makePersonalUrl(input).should.equal('hallebot.github.io');
      });

      it(`should work on your own \'urlParts\' array`, function () {
        // obfuscation of much simpler answer to prevent cheating
        const getExpected = arr => arr.reduce((url, part, i, parts) => i === 0 ? url + part : url + '.' + part, '');
        makePersonalUrl(urlParts).should.equal(getExpected(urlParts));
      });
    });

    describe('myData', function() {
      it('should have fullName, github, and website properties', () => {
        myData.should.have.all.keys('fullName', 'github', 'website');
      });
      it('should have a first and last name as the fullName property', function(){
        (/[a-zA-Z]+\s{1}[a-zA-Z]+$/).test(myData.fullName).should.be.true;
      });
      it('should have your website URL as it\'s "website" property', () => {
        myData.website.should.match(/[\w-]+.github.io/);
      });
      it('should have your GitHub username as it\'s "github" property', () => {
        myData.github.should.equal(urlParts[0]);
      });
    });

//               WRITE YOUR TESTS ABOVE HERE    
/////////////////////////////////////////////////////////////////////////////////////////////////

    mocha.run();
  };
}(window, window.$, window._));
