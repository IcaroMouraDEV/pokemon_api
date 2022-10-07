const express = require('express');
const { elementModel } = require('../models');

const router = express.Router();

const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_NOT_FOUND_STATUS = 404;
const HTTP_INTERNAL_ERROR_STATUS = 500;

router.post('/', async (req, res) => {
  const { element } = req.body;
  try {
    const [result] = await elementModel.insert(element);
    console.log(result);
    res.status(HTTP_CREATED_STATUS).json({
      message: `create the ${element} element with id ${result.insertId}`,
    });
  } catch (err) {
    console.log(err);
    res.status(HTTP_INTERNAL_ERROR_STATUS).json({
      message: 'Error when registering a new element',
    });
  }
});

router.get('/', async (_req, res) => {
  try {
    const [result] = await elementModel.findAll();
    res.status(HTTP_OK_STATUS).json(result);
  } catch (err) {
    console.log(err);
    res.status(HTTP_INTERNAL_ERROR_STATUS).json({ message: err.sqlMessage });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await elementModel.findById(Number(id));
    if (result) {
      res.status(HTTP_OK_STATUS).json(result);
    } else {
      res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'Element Not Found' });
    }
  } catch (err) {
    console.log(err);
    res.status(HTTP_INTERNAL_ERROR_STATUS).json({ message: err.sqlMessage });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { element } = req.body;
  try {
    const [result] = await elementModel.update(Number(id), element);
    if (result) {
      res.status(HTTP_OK_STATUS).json({ message: `Element with id ${id} updated is successful` });
    } else {
      res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'Element Not Found' });
    }
  } catch (err) {
    console.log(err);
    res.status(HTTP_INTERNAL_ERROR_STATUS).json({ message: err.sqlMessage });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await elementModel.remove(Number(id));
    if (result.affectedRows > 0) {
      res.status(HTTP_OK_STATUS).json({ message: `Element with id ${id} deleted with success` });
    } else {
      res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'Element Not Found' });
    }
  } catch (err) {
    console.log(err);
    res.status(HTTP_INTERNAL_ERROR_STATUS).json({ message: err.sqlMessage });
  }
});

module.exports = router;
