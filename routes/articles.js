var express = require('express');
var router = express.Router();
var Article = require('../models/article')
var Comment = require('../models/comment');
const article = require('../models/article');

// Routes

// Render article form

router.get('/new', (req, res) => {
    console.log("Add Article");
    res.render("addArticle");
})

// Create article

router.post('/', (req, res, next) => {
    Article.create(req.body, (err, createdArticle) => {
        if (err)
            return next(err);
        res.redirect('/articles')
    })
})

// Find all articles
router.get('/', (req, res, next) => {
    Article.find({}, (err, articles) => {
        if (err)
            return next(err);
        res.render('showArticles', {
            articles
        });
    })
})

// Find one article

router.get('/:id', (req, res, next) => {
    var id = req.params.id;
    Article.findById(id, (err, article) => {
        if (err)
            return next(err)
        else {
            res.render("showOneArticle", {
                article
            });
        }
    })
})

// Render Edit Form

router.get('/:id/edit', (req, res, next) => {
    var id = req.params.id;
    Article.findById(id, (err, article) => {
        if (err)
            return next(err)
        res.render('editArticle', {
            article
        });
    })
})

// Edit article

router.post('/:id', (req, res, next) => {
    var id = req.params.id;
    console.log("Hello");
    Article.findByIdAndUpdate(id, req.body, {
        new: true
    }, (err, article) => {
        if (err)
            return next(err);
        res.render('showOneArticle', {
            article
        });
    })
})

// Ask to Delete article 

router.get('/:id/delete', (req, res, next) => {
    var id = req.params.id;
    Article.findById(id, (err, article) => {
        if (err)
            return next(err)
        res.render('delete', {
            article
        });
    })
})

// Delete Article

router.get('/delete/article/:id', (req, res, next) => {
    var id = req.params.id;
    Article.findByIdAndDelete(id, (err, article) => {
        if (err)
            return next(err);
        console.log(id)
        res.redirect('/articles');
    })
})

// Comment Router

router.post('/comments', (req, res, next) => {
    Comment.create(req.body, (err, commentCreated) => {
        if (err)
            return next(err);
        res.json({
            "comment": commentCreated
        });
    })
})



// Export

module.exports = router;