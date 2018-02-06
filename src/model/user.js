

  var mongoose = require('mongoose');
  var Schema   = mongoose.Schema;

  //declaramos el tipo de dato user.
  var userSchema = new Schema({
    name:    { type: String },
    username:     { type: String },
    email:  { type: String },
    phone:   { type: String }
  });

  
module.exports = mongoose.model('user', userSchema);