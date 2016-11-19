var mongoose = require('mongoose');
var clientModel = require('../db/db').clientModel;

var firebase = require('firebase');
var config = {
  databaseURL: "https://reactormaker.firebaseio.com",
};

firebase.initializeApp(config)
var database = firebase.database()

var saveToDb = function(req, res, next){
  var client = req.body;
  database.ref('/users/').push({
    name: client.name,
    email: client.email
  })
  res.status(202);
}

module.exports = {
  saveToDb : saveToDb
};




