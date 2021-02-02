const { Router } = require('express');
const Form = require('../models/form');
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
