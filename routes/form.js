// routes/form.js
var express = require('express');
var router = express.Router();
// const uuid = require('uuid'); // генерирует уникальный id для сервера

const Form = require('../models/form');

let values = [{}];

router.get('/', function (req, res) {
  res.json(values);
});

router.get('/:id', (req, res) => {
  const valueId = parseInt(req.params.id, 10);
  const value = values.find((value) => value.id === valueId);

  if (value) {
    return res.json(value);
  } else {
    return res.status(404).json({
      status: `Значение id ${valueId} не найдено`,
    });
  }
});

router.post('/', (req, res) => {
  try {
    const newForm = Form.create({
      q1: req.body.q1 || `q1 = ${req.body.q1}`,
      q2: req.body.q2 || `q2 = ${req.body.q2}`,
      Т1: req.body.Т1 || `Т1 = ${req.body.Т1}`,
      Т2: req.body.Т2 || `Т2 = ${req.body.Т2}`,
      V1: req.body.V1 || `V1 = ${req.body.V1}`,
      V2: req.body.V2 || `V2 = ${req.body.V2}`,
      M1: req.body.M1 || `M1 = ${req.body.M1}`,
      M2: req.body.M2 || `M2 = ${req.body.M2}`,
      work_device:
        req.body.work_device || `work_device = ${req.body.work_device}`,
      work_device_error:
        req.body.work_device_error ||
        `work_device_error = ${req.body.work_device_error}`,
      exampleFormControlTextarea1:
        req.body.exampleFormControlTextarea1 ||
        `exampleFormControlTextarea1 = ${req.body.exampleFormControlTextarea1}`,
    });
    values.push(newForm);
    return res.status(201).json(newForm);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'Ошибка отправки данных',
    });
  }
});

module.exports = router;
