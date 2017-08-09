var stationService = require('../services/stationService');

module.exports = {

  getIndex: function (req, res) {
    /*
    return res.render('index', {
      title: 'TuneIn Web SPA Project'
    });
    */
    res.status(200).send("Hit the homepage bro!");


  }
};