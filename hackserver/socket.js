﻿var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

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
});