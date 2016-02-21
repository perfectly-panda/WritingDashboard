var mongoose = require('mongoose');

var ClientSchema = new mongoose.Schema({
  name: String,
  signupDate: { type : Date, default: Date.now }
});

module.exports = mongoose.model('Client', ClientSchema);