var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: String,
    username: String,
    password: String,
}, {
    timestamps: true
})

// export

module.exports = mongoose.model('user', userSchema);