const should = require('chai').should(), Path = require('path');
const TESTED_MODULE = require(Path.resolve('src/utils.js'));

describe('Utils', function () {

  it('should return an object with functions', function () {
    TESTED_MODULE.should.have.keys('getType', 'isFalsy');
    TESTED_MODULE.getType.should.be.a('function');
    TESTED_MODULE.isFalsy.should.be.a('function');
  })

  describe('getType', function () {

    it('should return string', function () {
      TESTED_MODULE.getType('xyz').should.equal('string');
      TESTED_MODULE.getType(123).should.not.equal('string');
    })

    it('should return boolean', function () {
      TESTED_MODULE.getType(true).should.equal('boolean');
      TESTED_MODULE.getType(false).should.equal('boolean');
      TESTED_MODULE.getType('false').should.not.equal('boolean');
    })

    it('should return number', function () {
      TESTED_MODULE.getType(1).should.equal('number');
      TESTED_MODULE.getType(1.1).should.equal('number');
      TESTED_MODULE.getType(0.1).should.equal('number');
      TESTED_MODULE.getType(0).should.equal('number');
      TESTED_MODULE.getType('abc').should.not.equal('number');
    })

    it('should return symbol', function () {
      TESTED_MODULE.getType(Symbol(1)).should.equal('symbol');
      TESTED_MODULE.getType(Symbol('abc')).should.equal('symbol');
      TESTED_MODULE.getType('abc').should.not.equal('symbol');
    })

    it('should return date', function () {
      TESTED_MODULE.getType(new Date()).should.equal('date');
      TESTED_MODULE.getType(10000).should.not.equal('date');
    })

    it('should return array', function () {
      TESTED_MODULE.getType([]).should.equal('array');
      TESTED_MODULE.getType([1, 2, 3]).should.equal('array');
      TESTED_MODULE.getType({}).should.not.equal('array');
    })

    it('should return object', function () {
      TESTED_MODULE.getType({}).should.equal('object');
      TESTED_MODULE.getType({ x: 1, y: 2 }).should.equal('object');
      TESTED_MODULE.getType([]).should.not.equal('object');
    })

    it('should return object', function () {
      try { TESTED_MODULE.getType(int) }
      catch (error) { should.throw }
    })
  })
})