var express = require('express');
var app = express();
var mongoose = require('mongoose');
var userController = require('./controllers/user_controller');
var morgan = require('morgan');
var bodyParser = require("body-parser");
var socket = require("./socket.js");

app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

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