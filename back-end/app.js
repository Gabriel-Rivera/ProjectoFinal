var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//passport config
const session = require("express-session");
const passport = require("passport");
require("./helpers/passport");

var index = require('./routes/index');
var listProduct = require('./routes/listProduct');

const auth =  require('./routes/auth');
const product = require('./routes/product');

var app = express();

const cors = require("cors");
const corsOptions = {
  credentials:true,
  origin:true
}

app.use(cors(corsOptions));


var mongoose = require ('mongoose');

mongoose.connect("mongodb://gabo:gabo@ds221609.mlab.com:21609/ironshop")
  .then(console.log("Connected to DB!!!"))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//passport 
app.use(session({
  secret: 'bliss',
  resave: true,
  saveUninitialized: true,
  cookie : { httpOnly: true, maxAge: 2419200000 }
}));

app.use(passport.initialize());
app.use(passport.session());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/product-list', listProduct);
app.use('/api/auth', auth);
app.use('/api/product',product);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
