var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        min: 10,
        max: 500
    },
    author: mongoose.Schema.Types.ObjectId,
    tags: [String],
    likes: Number,
    comment: mongoose.Schema.Types.ObjectId
}, {
    timestamps: true
});

//Export

module.exports = mongoose.model('article', articleSchema);