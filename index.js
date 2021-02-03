const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/form');
const sequelize = require('./utils/database');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/api/form', urlencodedParser, formRoutes);

async function start() {
  try {
    await sequelize.sync({ force: true });
    app.listen(PORT);
    console.log(`Запущено на порту ${PORT}`);
  } catch (e) {
    console.log('Ошибка подключения к MySql', e);
  }
}

start();
