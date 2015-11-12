var express = require('express'),
    http = require('http'),
    config = require('./config/config'),
    app = express();

// Configure express, routes, and data
require('./config/express')(app, config);
var router = express.Router();

require('./config/routes')(app, router);

require('./config/seedData')();

// Start up
http.createServer(app).listen(config.port);

console.log('***** STARTED *****');
console.log('Environment is ', config.env);
console.log('Listening on port: ' + config.port);