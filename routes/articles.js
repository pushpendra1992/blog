var express = require('express');
var router = express.Router();
var Article = require('../models/article')

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

// Find one article

// Edit article

// Delete article 



// Export

module.exports = router;