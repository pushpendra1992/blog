var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: String,
    description: String,
    author: String,
    tags: [String],
    likes: Number
}, {
    timestamps: true
});

//Export

module.exports = mongoose.model('article', articleSchema);