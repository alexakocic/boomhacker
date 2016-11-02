var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var schemas = require('../schema');

router.post('/register', function (req, res) {
    var body = req.body;
    var djurko = new schemas.User({
        username: body.username,
        password: body.password,
        email: body.email
    });

    djurko.save(function (err, djurko) {
        try {
            console.log("OK");
            res.status(200).send("OK");
        }
        catch (err) {
            console.log(err.message);
            res.status(500).send(err.message);
        }
    });
});

router.get('/login', function (req, res) {
    var query = req.query;
    console.log(query);
    schemas.User.findOne({ username: query.username }, "username, password", function (err, user) {
        try {
            if (user.password !== query.password) throw new Error("Wrong password!");
            console.log(user.username);
            res.status(200).send("OK");
        }
        catch (err) {
            console.log(err.message);
            res.status(500).send(err.message);
        }
    });
});

module.exports = router;