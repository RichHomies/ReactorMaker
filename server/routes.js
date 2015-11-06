var user = require('./user/user');

var setup = function(app) {
  app.post('/api/user', user.saveToDb);
};

module.exports.setup = setup;