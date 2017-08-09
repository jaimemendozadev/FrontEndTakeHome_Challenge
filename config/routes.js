var viewController = require('../controllers/view'),
  stationApi = require('../api/stationApi');

function registerViewControllers(router) {
  router.get('/', viewController.getIndex);
}

function registerApiControllers(router) {
  var apiV1 = '/api/v1';

  router.get(apiV1, function (req, res) {
    return res.ok('API V1');
  });

  router.get(apiV1 + '/stations', stationApi.get);
  router.get(apiV1 + '/station/:id', stationApi.get);

  // Don't expose the create station option
  // router.post(apiV1 + '/station', stationApi.create);
}

function registerErrorHandlers(router) {
  // not found handler
  router.use(function (req, res, next) {

    console.log('Not Found Handler: ', req.url);

    res.status(404);
    res.send({error: 'Not found'});


    next();
  });

  // error handler
  router.use(function (err, req, res, next) {

    console.log('Error Handler: ', err);
    console.log('Stack', err.stack);

    res.status(err.status || 500);

    res.send({error: 'Internal Server Error'});
    
    next();
  });
}

function enableCors(app){
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
  });
}

module.exports = function (app, router) {
  registerViewControllers(router);

  enableCors(app);
  registerApiControllers(router);

  registerErrorHandlers(router);

  app.use('/', router);
};