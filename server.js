//image server, serves static files
var express = require('express');
var app = express();
var morgan = require('morgan');
var parser = require('body-parser');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var routes = require('./server/routes.js');
var mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost/richHomiePrep';
var initServer = function() {
  // attaches all the routes to the server
  routes.setup(app);
  var port = process.env.PORT || 8080;
  var server = app.listen(port);
  console.log("Express server listening on %d in %s mode", port, app.settings.env)
}

mongoose.connect(dbUrl);
app.use(morgan('tiny'));
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'client/public')));

initServer();
exports.app = app;


