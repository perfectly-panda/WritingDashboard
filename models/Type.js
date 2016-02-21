var mongoose = require('mongoose');

var TypeSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Type', TypeSchema);