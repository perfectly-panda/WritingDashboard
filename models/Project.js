var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  name: String,
  show: Boolean,
  viewTitle: String,
  status: {type: mongoose.Schema.Types.ObjectId, ref: 'StatusModel'},
  topic: {type: mongoose.Schema.Types.ObjectId, ref: 'TopicModel'},
  type: {type: mongoose.Schema.Types.ObjectId, ref: 'TypeModel'},
  note: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Project', ProjectSchema);