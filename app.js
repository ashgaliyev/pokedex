var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var pokemon = require('./routes/pokemon');
var type = require('./routes/type');

var apicache = require('apicache')

var app = express();
var cache = apicache.middleware;

app.use(cache('1 day'))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/', index);
app.use('/pokemon', pokemon);
app.use('/type', type);

// add route to manually clear target/group
app.get('/api/cache/clear/:target?', (req, res) => {
  res.json(apicache.clear(req.params.target))
})

// add route to display cache index
app.get('/api/cache/index', (req, res) => {
  res.json(apicache.getIndex())
})

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
