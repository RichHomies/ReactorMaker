var user = require('./user/user');

var setup = function(app) {
  app.get('/app', function(req, res) {
        res.sendfile('./client/theActualApplication/views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });
  app.post('/api/user', user.saveToDb);
};

module.exports.setup = setup;