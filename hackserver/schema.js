var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    picture: String,
    lat: String,
    lon: String
});

module.exports.User = mongoose.model('User', userSchema);