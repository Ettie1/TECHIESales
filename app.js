var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejslayouts = require('express-ejs-layouts');

const sass = require('sass');
//sass.compile('./public/stylesheets/scss/style.scss', { style: 'compressed', sourceMap: true, outFile: './public/stylesheets/css/style.css' });  

require('./db/dbconn');

var frmRouter = require('./routes/frmRoute');
var v1apiRouter = require('./routes/v1apiRoute');
var menuRoute = require('./routes/menuRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(ejslayouts);
app.use('/bs', express.static(path.join(__dirname + '/node_modules/bootstrap/dist/css/')));
app.use('/bsjs', express.static(path.join(__dirname + '/node_modules/bootstrap/dist/js/')));
app.use('/js', express.static(path.join(__dirname + '/node_modules/jquery/dist/')));

app.use('/', frmRouter);
app.use('/v1/api', v1apiRouter);
app.use('/menu', menuRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
