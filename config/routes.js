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

    // respond with html page
    if (req.accepts('html')) {
      res.render('error', {
        url: req.url,
        title: '404 Page Not Found'
      });
      return;
    }

    // respond with json
    if (req.accepts('json')) {
      res.send({error: 'Not found'});
      return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');

    next();
  });

  // error handler
  router.use(function (err, req, res, next) {

    console.log('Error Handler: ', err);
    console.log('Stack', err.stack);

    res.status(err.status || 500);

    // respond with html page
    if (req.accepts('html')) {
      res.render('error', {
        url: req.url,
        title: '500 Internal Server Error'
      });
    }

    // respond with json
    if (req.accepts('json')) {
      res.send({error: 'Internal Server Error'});
      return;
    }

    // default to plain-text. send()
    res.type('txt').send('Interal Server Error');

    next();
  });
}

module.exports = function (app, router) {
  registerViewControllers(router);

  registerApiControllers(router);

  registerErrorHandlers(router);

  app.use('/', router);
};