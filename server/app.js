//app.js entry point
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var logger = require('morgan');

const sequelize = require('./utils/database');

const PORT = process.env.PORT || 3000;

const formRouter = require('./routes/form');

var app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/src')));

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({
  type: 'application/json',
  extended: false,
});

app.use('/form', jsonParser, urlencodedParser, formRouter);

async function start() {
  try {
    await sequelize.sync({ force: true });
    app.listen(PORT);
  } catch (e) {
    console.log(e);
  }
}

start();
