var mongoose = require('mongoose');

var StatusSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Status', StatusSchema);