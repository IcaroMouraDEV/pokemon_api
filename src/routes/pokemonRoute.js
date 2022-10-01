const express = require('express');

const router = express.Router();

router.get('/pokemon', (_req, res) => {
  res.status(200).json({ message: 'tudo ok' });
});

router.get('/pokemon/:id', (_req, res) => {
  res.status(200).json({ message: 'bulbassaur' });
});

module.exports = router;
