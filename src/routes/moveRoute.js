const express = require('express');
const move = require('../controllers/move.controller');

const router = express.Router();

router.get('/', move.getAllMoves);

module.exports = router;