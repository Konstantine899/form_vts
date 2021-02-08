const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const form = sequelize.define('Form', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false, // запрещаю что бы какое-то поле было потенциальным нулем
    type: Sequelize.INTEGER,
  },
  q1: {
    allowNull: false,
    type: Sequelize.DOUBLE,
  },
  q2: {
    allowNull: true,
    type: Sequelize.DOUBLE,
  },
  Т1: {
    allowNull: false,
    type: Sequelize.DOUBLE,
  },
  Т2: {
    allowNull: false,
    type: Sequelize.DOUBLE,
  },
  V1: {
    allowNull: false,
    type: Sequelize.DOUBLE,
  },
  V2: {
    allowNull: false,
    type: Sequelize.DOUBLE,
  },
  M1: {
    allowNull: false,
    type: Sequelize.DOUBLE,
  },
  M2: {
    allowNull: false,
    type: Sequelize.DOUBLE,
  },
  work_device: {
    allowNull: false,
    type: Sequelize.DOUBLE,
  },
  work_device_error: {
    allowNull: false,
    type: Sequelize.DOUBLE,
  },
  exampleFormControlTextarea1: {
    allowNull: true,
    type: Sequelize.STRING,
  },
});

module.exports = form;
