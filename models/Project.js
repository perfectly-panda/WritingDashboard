var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
  userID: String,
  name: String,
  completed: Boolean,
  note: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Project', ProjectSchema);