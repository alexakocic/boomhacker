var express = require('express');
var app = express();
var mongoose = require('mongoose');
var userController = require('./controllers/user_controller');
var morgan = require('morgan');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('combined'));

mongoose.connect('mongodb://suicidesquad:hackaton123@ds039145.mlab.com:39145/hakaton');

var db = mongoose.connection;

db.on('error', function () {
    console.log("Error connecting to database");
});

db.once('open', function () {
    console.log("Connected to the database successfully");
});

app.listen(3000, function () {
    console.log('Server started');
});

app.use('/users', userController);