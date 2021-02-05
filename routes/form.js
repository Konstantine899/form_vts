var express = require('express');
var router = express.Router();
// const uuid = require('uuid'); // генерирует уникальный id для сервера

let values = [
  {
    id: 1,
    day: '',
    time: '',
    q1: 1,
    q2: 2,
    m1: 3,
    m2: 4,
    v1: 5,
    v2: 6,
    gM1: 7,
    gM2: 8,
    gV1: 9,
    gV1: 10,
    t1: 11,
    t2: 12,
    p1: 13,
    p2: 14,
    timeWork: 15,
    timeError: 17,
    tColdWater: 18,
    created_at: 19,
    updated_at: 20,
  },
];

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
  // const value = {
  //   q1: req.body.q1 || `req.body.q1 = ${req.body.q1}`,
  // };
  // values.push(value);
  // return res.json(value);
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  res.send(`${req.body.q1}`);
});

module.exports = router;
