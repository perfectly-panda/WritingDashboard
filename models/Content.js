var mongoose = require('mongoose');

var ContentSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  project: {type: mongoose.Schema.Types.ObjectId, ref: 'ProjectModel'},
  name: String,
  show: Boolean,
  viewTitle: String,
  content: String,
  note: String,
  sortOrder: Number,
  wordCount: Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Content', ContentSchema);