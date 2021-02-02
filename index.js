const express = require('express');
const path = require('path');
const formRoutes = require('./routes/form');
const sequelize = require('./utils/database');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/form', formRoutes);

app.get((req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// app.post('/', function (req, res) {
//   res.redirect('/api/form');
// });

async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT);
    console.log(`Запущено на порту ${PORT}`);
  } catch (e) {
    console.log('Ошибка подключения к MySql', e);
  }
}

start();
