// Requires
var express = require('express');
var logger = require('morgan')
var mongoose = require('mongoose');

// Connection to Database

mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    console.log(err ? err : "connected to database");
})

// Middlewares

var app = express();
app.use(logger('dev'));
app.use(express.json());

// Routing middleware

app.use('/', require('./routes/index'));
app.use('/articles', require('./routes/articles'))

// Error Handler

app.use((err, req, res) => {
    res.status(404).send("Page not found");
})

app.use((err, req, res, next) => {
    res.json(err);
})

// Localhost Port

app.listen(3000, 'localhost', () => {
    console.log('connected to localhost 3k');
})