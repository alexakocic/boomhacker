var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://suicidesquad:hackaton123@ds039145.mlab.com:39145/hakaton');

var db = mongoose.connection;

db.on('error', function () {
    console.log("Error connecting to database")
});

db.once('open', function () {
    console.log("Connected to the database successfully");
});

app.listen(3000, function () {
    console.log('Server started');
});