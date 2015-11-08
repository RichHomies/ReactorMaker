var mongoose = require('mongoose');
var clientModel = require('../db/db').clientModel;

var saveToDb = function(req, res, next){
  var client = req.body;
  var newClient = new clientModel({client: client});
  newClient.save(function(err, client){
    if(err){
      console.log('err ' , err);
      res.status(400).json({status: 'Unsuccessfully saved client contact', err: err});
    } else {
      res.status(201).json({status: 'Successfully saved client contact', client: client});
    }
  });
}

module.exports = {
  saveToDb : saveToDb
};




