const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.json({
    a: 'Проверка работоспособности роута получения данных',
  });
});

router.post('/', (req, res) => {});

router.put('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

module.exports = router;
