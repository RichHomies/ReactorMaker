var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema({
  client : {
    name: String,
    email: String,
    creationDate : { type: Date, default: Date.now }
  }
});

module.exports = {
  clientModel : mongoose.model('Clients', clientSchema)
};

