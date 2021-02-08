const Sequelize = require('sequelize'); // подключаю библиотеку которая является конструктором. Конструктор нащываю с большой буквы

const DB_NAME = 'sampledb';
const USER_NAME = 'root';
const PASSWORD = '4343';

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
