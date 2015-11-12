var q = require('q'),
  NodeCache = require('node-cache'),
  cache = new NodeCache();

module.exports = {
  set: function(key, value){
    var defer = q.defer();

    cache.set(key, value, function(err){
      if(err){
        defer.reject(err);
      } else {
        defer.resolve();
      }
    });

    return defer.promise;
  },
  get: function(key) {
    var defer = q.defer();

    cache.get(key, function(err, value){
      if(err){
        defer.reject(err);
      } else {
        defer.resolve(value);
      }
    });

    return defer.promise;
  }
};