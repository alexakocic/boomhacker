﻿var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var userController = require('./controllers/user_controller');
var schemas = require('./schema');
var venuesController = require('./controllers/venues_controller');

http.listen(3001, function () {
    console.log('socket.o listening on port 3001');
});

io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('disconnect', function (msg) {
        console.log('user disconnected');
    });

    socket.on('cock', function (msg) {
        socket.emit('hello', 'hello user!');
    });

    socket.on('marker', function (msg) {
        console.log("marker sent");
    });

    socket.on('message', function (msg) {
        socket.broadcast.emit('message', msg);
    });

    socket.on('locationUpdate', function (msg) {
        schemas.User.update({ _id: msg.id }, { location: { lat: msg.lat, lon: msg.lon } }, function (err, raw) {
            try {
                schemas.User.update({ _id: msg.id }, { lat: msg.lat, lon: msg.lon }, function (err, raw) {
                    console.log(msg);
                    venuesController.getFoursquareVenues(43.324772, 21.895539, 1000, socket);
                });
            }
            catch (err) {
                console.log(err);
            }
        });
        console.log("Search venues");
    });
});