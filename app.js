var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var logger = require('morgan');

const PORT = process.env.PORT || 3000;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const formRouter = require('./routes/form');
// const formValue = require('./public/javascripts/formValue/formValue');

var app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({
  type: 'application/json',
  extended: false,
});

app.use('/form', urlencodedParser, jsonParser, formRouter);

async function start() {
  app.listen(PORT);
  console.log(`Запущено на порту ${PORT}`);
}

start();
