var stationService = require('../services/stationService');

module.exports = {

  getIndex: function (req, res) {

    res.status(200).send("Hit the homepage bro!");


  }
};