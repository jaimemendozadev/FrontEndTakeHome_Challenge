var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    _ = require('lodash'),
    stylus = require('stylus'),
    uuid = require('node-uuid');
    favicon = require('serve-favicon');

module.exports = function (app, config) {
    // log from within dev environment
    app.use(morgan('dev'));

    // so we can get data from a POST
    app.use(bodyParser());

    //Deleted all reference to Jade Views from Express server


    // setup stylus middleware
    app.use(stylus.middleware(
        {
            src: config.rootPath + '/public',
            compile: function (str, path) {
                return stylus(str).set('filename', path);
            }
        }
    ));

    // use public img folder to retrieve favicon request
    app.use(favicon(config.rootPath + '/public/img/favicon.ico'));

    // use the public folder for static files
    app.use(express.static(config.rootPath + '/public'));

    // setup extensions
    app.use(function (req, res, next) {
        res.ok = function (data) {
            successResponse(200, data);
        };

        res.created = function (data) {
            successResponse(201, data);
        };

        res.bad = function (context) {
            errorResponse(400, context);
        };

        res.notAuthd = function (context) {
            errorResponse(401, context);
        };

        res.notFound = function (context) {
            errorResponse(404, context);
        };

        res.ise = function (context) {
            errorResponse(500, context);
        };

        res.error = function (context, includeError) {
            errorResponse(context.statusCode || 500, context, true);
        };

        function successResponse(code, data) {
            data = data || {};
            res.set('Content-Type', 'application/json');
            if (Array.isArray(data)) {
                var obj = {
                    data: data
                };
                data = obj;
            }
            data.trackId = uuid.v4();
            res.json(code, data);
        }

        function errorResponse(code, context, includeError) {
            res.set('Content-Type', 'application/json');
            res.json(code, {
                message: context.message
            });
        }

        next();
    });
};