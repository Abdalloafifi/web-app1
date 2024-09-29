var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// إعداد اتصال MongoDB
mongoose.connect('mongodb://localhost:27017/mydb')
  .then(() => console.log('MongoDB connected...'))
  .catch(error => console.error('Error connecting to MongoDB:', error));
// view engine setup

app.use(express.static('client')); // خدمة الملفات الثابتة

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(cors({
  origin: 'http://localhost:2000', // تحديد نطاق الإذن
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));



// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
