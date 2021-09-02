
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
var session = require('express-session');

var path = require('path');
var favicon = require('serve-favicon');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Routes
app.use('/', require ('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;

const PORT = require('./config/config').PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
