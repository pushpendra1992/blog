// Requires
var express = require('express');
var logger = require('morgan')
var mongoose = require('mongoose');
var path = require("path");

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
app.use(express.urlencoded({
    extended: false
}))

// Templating Engine

// app.set("views", path.join(__dirname, "views"))
app.set('view engine', 'ejs')


// Routing middleware

app.use('/', require('./routes/index'));
app.use('/articles', require('./routes/articles'));
app.use('/users', require('./routes/users'));

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