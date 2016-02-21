var mongoose = require('mongoose');

var TopicSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    parents: [{type: mongoose.Schema.Types.ObjectId, ref: 'TopicModel'}],
  name: String,
});

module.exports = mongoose.model('Topic', TopicSchema);