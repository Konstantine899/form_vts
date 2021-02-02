//models/form.js
const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const form = sequelize.define('Form', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false, // запрещаю ноль
    type: Sequelize.INTEGER, // Задаю тип с помощью Sequelize там куча опций sql
  },
  day: {
    allowNull: false, // запрещаю ноль
    type: Sequelize.DATE, // Задаю тип с помощью Sequelize там куча опций sql
    comment: 'Дата',
  },
  time: {
    allowNull: false,
    type: Sequelize.CHAR(5),
    defaultValue: '10:00',
    commentValue: 'Время',
  },
  q1: { allowNull: false, type: Sequelize.DOUBLE },
  q2: { allowNull: true, type: Sequelize.DOUBLE },
  m1: { allowNull: true, type: Sequelize.DOUBLE },
  m2: { allowNull: true, type: Sequelize.DOUBLE },
  v1: { allowNull: true, type: Sequelize.DOUBLE },
  v2: { allowNull: true, type: Sequelize.DOUBLE },
  gM1: { allowNull: true, type: Sequelize.DOUBLE },
  gM2: { allowNull: true, type: Sequelize.DOUBLE },
  gV1: { allowNull: true, type: Sequelize.DOUBLE },
  gV2: { allowNull: true, type: Sequelize.DOUBLE },
  t1: { allowNull: true, type: Sequelize.DOUBLE },
  t2: { allowNull: true, type: Sequelize.DOUBLE },
  p1: { allowNull: true, type: Sequelize.DOUBLE, comment: 'Давление подающий' },
  p2: { allowNull: true, type: Sequelize.DOUBLE, comment: 'Давление обратка' },
  comment: {
    allowNull: true,
    type: Sequelize.STRING,
    comment: 'Темп. холодной воды',
  },
  timeWork: {
    allowNull: false,
    type: Sequelize.FLOAT(10, 2),
  },
  timeError: {
    allowNull: true,
    type: Sequelize.FLOAT(10, 2),
  },
  tColdWater: {
    allowNull: true,
    type: Sequelize.FLOAT(4, 1),
    comment: 'Темп. холодной воды',
  },
  username: {
    allowNull: true,
    type: Sequelize.STRING,
    comment: 'Тот кто внёс показания',
  },
  created_at: {
    allowNull: true,
    type: Sequelize.INTEGER(11),
  },
  updated_at: {
    allowNull: true,
    type: Sequelize.INTEGER(11),
  },
  // timestamp: false,
});

module.exports = form;
