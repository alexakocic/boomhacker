var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var schemas = require('../schema');

router.get('/create', function (req, res) {
    var djurko = new schemas.User({
        username: "djurko993",
        password: "djurkokralj",
        email: "djurko@gmail.com"
    });

    djurko.save(function (err, djurko) {
        if (err) console.log("Not working");
        else console.log("OK");
    });
});

module.exports = router;