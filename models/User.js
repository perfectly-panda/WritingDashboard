var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    client: {type: mongoose.Schema.Types.ObjectId, ref: 'ClientModel'},
    userType: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  userName: String,
  password: String,
  hash: String,
  resetToken: String,
  lockoutCount: Number,
  lockoutTimer: Date,
  
  
  firstName: String,
  lastName: String,
  email: String
});

module.exports = mongoose.model('User', UserSchema);