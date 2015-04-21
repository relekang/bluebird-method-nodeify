var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var methodNodeify = require('./index.js');

chai.use(chaiAsPromised);
var expect = chai.expect;

function TestObject(attr) {
  this.attr = attr;
}

TestObject.prototype = {
  getAttr: methodNodeify(0, function getAttr() {
    return this.attr;
  }),
  getAttrWithError: methodNodeify(0, function getAttrWithError() {
    throw new Error('an error');
  })
};

describe('bluebird-method-nodeify', function() {
  it('should return a promise which resolves the value', function() {
    t = new TestObject('hi there!');
    return expect(t.getAttr()).to.eventually.equal('hi there!');
  });

  it('should accept a callback which resolves the value', function(done) {
    t = new TestObject('hi there!');
    t.getAttr(function callback(err, value) {
      if (err) return done(err);
      expect(value).to.equal('hi there!');
      done();
    });
  });

  it('should accept a callback which resolves with error if an error is thrown', function(done) {
    t = new TestObject('hi there!');
    t.getAttrWithError(function callback(err, value) {
      if (err && err.message === 'an error') return done();
    });
  });
});
