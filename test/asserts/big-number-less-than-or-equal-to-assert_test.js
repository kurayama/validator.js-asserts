
/**
 * Module dependencies.
 */

var Assert = require('validator.js').Assert;
var BigNumber = require('bignumber.js');
var Violation = require('validator.js').Violation;
var assert = require('../../lib/asserts/big-number-less-than-or-equal-to-assert');
var should = require('should');

/**
 * Test `BigNumberLessThanOrEqualToAssert`.
 */

describe('BigNumberLessThanOrEqualToAssert', function() {
  before(function() {
    Assert.prototype.BigNumberLessThanOrEqualTo = assert;
  });

  it('should throw an error if `threshold` is missing', function() {
    try {
      new Assert().BigNumberLessThanOrEqualTo();

      should.fail();
    } catch (e) {
      e.message.should.equal('A threshold value is required.');
    }
  });

  it('should throw an error if `threshold` is not a number', function() {
    try {
      new Assert().BigNumberLessThanOrEqualTo({});

      should.fail();
    } catch (e) {
      e.message.should.match(/not a number/);
    }
  });

  it('should throw an error if the input value is not a number', function() {
    var choices = [[], {}, ''];

    choices.forEach(function(choice) {
      try {
        new Assert().BigNumberLessThanOrEqualTo(10).validate(choice);

        should.fail();
      } catch (e) {
        e.should.be.instanceOf(Violation);
      }
    });
  });

  it('should throw an error if the input number is greater than the threshold', function() {
    try {
      new Assert().BigNumberLessThanOrEqualTo(10).validate(10.0000000001);

      should.fail();
    } catch (e) {
      e.should.be.instanceOf(Violation);
    }
  });

  it('should expose `assert` equal to `BigNumberLessThanOrEqualTo`', function() {
    try {
      new Assert().BigNumberLessThanOrEqualTo(10).validate(10.01);

      should.fail();
    } catch(e) {
      e.show().assert.should.equal('BigNumberLessThanOrEqualTo');
    }
  });

  it('should expose `message` on the violation if the input value is not a number', function() {
    try {
      new Assert().BigNumberLessThanOrEqualTo(10).validate({});

      should.fail();
    } catch(e) {
      e.show().violation.message.should.match(/not a number/);
    }
  });

  it('should expose `threshold` on the violation', function() {
    try {
      new Assert().BigNumberLessThanOrEqualTo(10).validate(10.01);

      should.fail();
    } catch(e) {
      e.show().violation.threshold.should.equal('10');
    }
  });

  it('should accept a big number as a `threshold` value', function() {
    new Assert().BigNumberLessThanOrEqualTo(new BigNumber(10)).validate(9.99999999);
  });

  it('should accept a big number that is less than threshold', function() {
    new Assert().BigNumberLessThanOrEqualTo(10).validate(9.99999999);
  });

  it('should accept a big number that is equal to threshold', function() {
    new Assert().BigNumberLessThanOrEqualTo(10).validate(10);
  });
});