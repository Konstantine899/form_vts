const { Router } = require('express');
// const Form = require('../models/form');
const router = Router();

router.get('/', (req, res) => {
  try {
    res.json({
      a: 1,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      massage: 'Ошибка сервера',
    });
  }
});

router.post('/', async (req, res) => {
  try {
    // const day = req.body.day;
    // const time = req.body.time;
    // const q1 = req.body.q1;
    // const q2 = req.body.q2;
    // const m1 = req.body.m1;
    // const m2 = req.body.m2;
    // const v1 = req.body.v1;
    // const v2 = req.body.v2;
    // const gM1 = req.body.gM1;
    // const gM2 = req.body.gM2;
    // const gV1 = req.body.gV1;
    // const gV2 = req.body.gV2;
    // const t1 = req.body.t1;
    // const t2 = req.body.t2;
    // const p1 = req.body.p1;
    // const p2 = req.body.p2;
    // const comment = req.body.comment;
    // const timeWork = req.body.timeWork;
    // const timeError = req.body.timeError;
    // const tColdWater = req.body.tColdWater;
    // const username = req.body.username;
    // const created_at = req.body.created_at;
    // const updated_at = req.body.updated_at;
  } catch (e) {
    console.log(e);
    res.status(500).json({
      massage: 'Ошибка сервера',
    });
  }
});

router.put('/:id', (req, res) => {
  try {
  } catch (e) {
    console.log(e);
    res.status(500).json({
      massage: 'Ошибка сервера',
    });
  }
});

router.delete('/:id', (req, res) => {
  try {
  } catch (e) {
    console.log(e);
    res.status(500).json({
      massage: 'Ошибка сервера',
    });
  }
});

module.exports = router;
