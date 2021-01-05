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
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }]
}, {
    timestamps: true
});

//Export

module.exports = mongoose.model('article', articleSchema);