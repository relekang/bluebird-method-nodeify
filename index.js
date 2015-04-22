var Promise = require('bluebird');

module.exports = function methodNodeify(numberOfArguments, fn) {
  return function () {
    var that = this;
    var args = Array.prototype.slice.call(arguments);
    var promise = new Promise(function(resolve) {
      resolve(fn.apply(that, args));
    });
    if (args.length > numberOfArguments) {
      promise.nodeify(args[args.length - 1]);
    }
    return promise;
  };
};
