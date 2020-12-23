var express = require('express');
var router = express.Router();
var User = require('../models/user');

// Routes

// render users form

// create users

router.post('/', (req, res, next) => {
    User.create(req.body, (err, createdUser) => {
        if (err)
            return next(err);
        res.json({
            "user": createdUser
        });
    })
})

// find all users

router.get('/', (req, res, next) => {
    User.find({}, (err, users) => {
        if (err)
            return next(err);
        res.json({
            "user": users
        })
    })
})

/*
// find user by name

router.get('/:name', (req, res, next) => {
    var name = req.params.name;
    User.findOne({
        "name": name
    }, (err, user) => {
        if (err)
            return next(err);
        res.json({
            "user": user
        });
    })
})
*/

// find one user by Id

router.get('/:id', (req, res, next) => {
    var id = req.params.id;
    User.findById(id, (err, user) => {
        if (err)
            return next(err);
        res.json({
            "user": user
        });
    })
})


// edit users

router.put('/:id', (req, res, next) => {
    var id = req.params.id;
    User.findByIdAndUpdate(id, req.body, {
        new: true
    }, (err, updatedUser) => {
        if (err)
            return next(err);
        res.json({
            "user": updatedUser
        });
    })
})

// delete users

router.delete('/:id', (req, res, next) => {
    var id = req.params.id;
    User.findByIdAndDelete(id, (err, deletedUser) => {
        if (err)
            return next(err);
        res.send(`${deletedUser.name} is deleted`);
    })
})


// Export

module.exports = router;