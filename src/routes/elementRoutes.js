const express = require('express');
const element = require('../controllers/element.controller');

const router = express.Router();

router.post('/', element.createElement);
router.get('/', element.getAllElements);
router.get('/:id', element.getElementByIdOrName);
router.put('/:id', element.updateElement);
router.delete('/:id', element.removeElement);

module.exports = router;
