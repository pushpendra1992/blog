var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: String,
    description: String,
    author: mongoose.Schema.Types.ObjectId,
    tags: [String],
    likes: Number,
    comment: mongoose.Schema.Types.ObjectId
}, {
    timestamps: true
});

//Export

module.exports = mongoose.model('article', articleSchema);