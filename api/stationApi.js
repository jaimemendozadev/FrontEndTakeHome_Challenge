var stationService = require('../services/stationService.js'),
  _ = require('lodash');

module.exports = {
  create: function (req, res) {
    var station = req.body.station;

    if (!station) {
      return res.bad({
        message: 'invalid request to create station'
      });
    }

    stationService.add(station)
      .then(function () {
        return res.ok({
          message: 'Created'
        });
      }).fail(function (err) {
        console.log('Error creating station', err);
        return res.ise();
      });
  },
  get: function (req, res) {
    var id = req.params.id;

    var fn;
    if(id) {
      console.log('lookup by id ', id);
      fn = stationService.getOne(id);
    } else {
      fn = stationService.getAll();
    }

    fn.then(function (retrieved) {
      res.ok(retrieved);
    }).fail(function (err) {
      console.log('Error getting stations', err);
      res.ise();
    });
  }
};