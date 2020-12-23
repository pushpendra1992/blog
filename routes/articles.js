var express = require('express');
var router = express.Router();
var Article = require('../models/article')
var Comment = require('../models/comment');

// Routes

// Render article form

// Create article

router.post('/', (req, res, next) => {
    Article.create(req.body, (err, createdArticle) => {
        if (err)
            return next(err);
        res.json({
            article: createdArticle
        });
    })
})

// Find all articles
router.get('/', (req, res, next) => {
    Article.find({}, (err, articles) => {
        if (err)
            return next(err);
        res.json({
            "articles": articles
        });
    })
})

// Find one article

router.get('/:id', (req, res, next) => {
    var id = req.params.id;
    Article.findById(id, (err, article) => {
        if (err)
            return next(err)
        res.json({
            "article": article
        });
    })
})

// Edit article

router.put('/:id', (req, res, next) => {
    var id = req.params.id;
    Article.findByIdAndUpdate(id, req.body, {
        new: true
    }, (err, updatedArticle) => {
        if (err)
            return next(err);
        console.log(updatedArticle);
        res.json({
            "article": updatedArticle
        });
    })
})

// Delete article 

router.delete('/:id', (req, res, next) => {
    var id = req.params.id;
    Article.findByIdAndDelete(id, (err, deletedArticle) => {
        if (err)
            return next(err);
        res.send(`${deletedArticle.title} is deleted`)
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