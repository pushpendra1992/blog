var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    comment: String,
    user: String,
    articleId: {
        "type": Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('comment', commentSchema);