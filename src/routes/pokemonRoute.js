const express = require('express');

const router = express.Router();

const HTTP_OK_STATUS = 200;

router.get('/', (_req, res) => {
  res.status(HTTP_OK_STATUS).json({ message: 'tudo ok' });
});

router.get('/:id', (_req, res) => {
  res.status(HTTP_OK_STATUS).json({ message: 'bulbassaur' });
});

module.exports = router;
