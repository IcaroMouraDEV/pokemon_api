const express = require('express');
const move = require('../controllers/move.controller');

const router = express.Router();

router.get('/', move.getAllMoves);
router.get('/:id', move.getMoveById);

module.exports = router;