var path = require('path'),
    rootPath = path.normalize(__dirname + '/../'),
    _ = require('lodash');

var dev = {
    env: 'development',
    rootPath: rootPath,
    port: process.env.PORT || 8080
};

// prod overrides
var prod = _.cloneDeep(dev);
prod.env = process.env.NODE_ENV;

prod.port = process.env.PORT || 80;

var config = {
    development: dev,
    production: prod
};

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = config[env];