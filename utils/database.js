//utils/database.js
const Sequelize = require('sequelize');

const DB_NAME = 'sampledb';
const USER_NAME = 'root';
const PASSWORD = '4343';

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
