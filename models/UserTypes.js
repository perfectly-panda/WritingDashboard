var mongoose = require('mongoose');

var UserTypeSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('UserType', UserTypeSchema);