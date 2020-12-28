var express = require('express');
var router = express.Router();

// Routes

router.get('/', (req, res) => {
    console.log("welcome to app");
    res.render("index");
})

//Export

module.exports = router;