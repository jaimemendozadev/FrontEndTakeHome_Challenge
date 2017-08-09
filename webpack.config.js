var webpack = require('webpack');
var path = require('path');
 
var DEV = path.resolve(__dirname, 'dev');
var PUBLIC = path.resolve(__dirname, 'public');
 
var config = {
  entry: DEV + "/index.jsx",
  output: {
    path: PUBLIC,
    filename: "myCode.js"
  },
  module: {
    loaders: [{
        include: DEV,
        loader: "babel-loader",
    }]
  }
};
 
module.exports = config;