var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var schemas = require('../schema');

router.post('/register', function (req, res) {
    var body = req.body;
    var user = new schemas.User({
        username: body.username,
        password: body.password,
        email: body.email
    });

    user.save(function (err, savedUser) {
        try {
            res.status(200).send(savedUser._id);
        }
        catch (err) {
            console.log(err.message);
            res.status(500).send(err.message);
        }
    });
});

router.get('/login', function (req, res) {
    var query = req.query;
    schemas.User.findOne({ username: query.username }, "_id, username, password", function (err, user) {
        console.log(user);
        try {
            if (user._id === undefined) throw new Error("No such user");
            if (user.password !== query.password) throw new Error("Wrong password!");
            console.log(user.username);
            res.status(200).send(user._id);
        }
        catch (err) {
            console.log(err.message);
            res.status(500).send(err.message);
        }
    });
});

router.put('/picture', function (req, res) {
    var body = req.body;
    schemas.User.update({ _id: body.id }, { picture: body.picture }, function (err, raw) {
        console.log('The raw response from Mongo was ', raw);
        res.status(200).send("OK");
    });
});

module.exports = router;