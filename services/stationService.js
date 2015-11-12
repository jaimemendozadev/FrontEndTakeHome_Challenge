var cache = require('./cacheService'),
  _ = require('lodash'),
  uuid = require('node-uuid');

var stationKey = 'stations';
cache.set(stationKey, {});

module.exports = {

  getAll: function () {
    return cache.get(stationKey)
      .then(function(stations){
        return _.values(stations);
      })
      .fail(function (err) {
        console.log('Error fetching from cache', err);
      });
  },
  getOne: function(id) {
    // Hack - get all stations from cache then pick
    return cache.get(stationKey)
      .then(function(stations){
        console.log('get one *********', id);
        console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');

        console.log('stationssss ', stations);

        console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
        console.log('result ', stations[id]);

        return stations[id];
      })
      .fail(function (err) {
        console.log('Error fetching from cache', err);
      });
  },
  add: function (station) {
    if(!station.id) {
      station.id = uuid.v4();
    }

    return cache.get(stationKey)
      .then(function (stations) {
        if (!stations) {
          throw "ERROR: Stations not in cache";
        }

        stations[station.id] = station;

        return cache.set(stationKey, stations);
      }).fail(function (err) {
        console.log('Error with from cache', err);
      });
  },
  stationKey: stationKey
};