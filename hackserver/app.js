﻿var express = require('express');
var app = express();
var mongoose = require('mongoose');
var userController = require('./controllers/user_controller');
var morgan = require('morgan');
var bodyParser = require("body-parser");
var socket = require("./socket.js");
var foursquare = (require('foursquarevenues'))('I1LBBPBDFUH3TNLAZEMQ0TG5RU3J3TRENGESX1052JJSUQ0S', 'JEK24NUPFF1IIWHXLN3BPWHRGFU0AHOUOPUGRP332ZGH5SKV');

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
//foursquare test
var params = {
    "ll": '43.324772' + "," + '21.895539',
    "radius": 1000
};
foursquare.getVenues(params, function (error, venues) {
    console.log(error);
    console.log(venues.response.venues[0]);

    
});
//