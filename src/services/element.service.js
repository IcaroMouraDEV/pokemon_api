const { elementModel } = require('../models');
const { validationElementSchema } = require('./validations/validationsInputsValue');

const createElement = async (element) => {
  const validationResult = validationElementSchema(element);

  if (validationResult.type) return validationResult;

  const allElements = await elementModel.findAll();
  console.log(allElements);
  const elementExists = allElements.find((e) => e.element.includes(element));
  if (elementExists) return { type: 'error', message: 'element exist' };

  const insertId = await elementModel.insert(element);
  return { type: null, message: `element registry with id ${insertId}` };
};

const getAllElements = async () => {
  const message = await elementModel.findAll();

  return { type: null, message };
};

const getElementById = async (id) => {
  const message = await elementModel.findById(id);

  if (!message) return { type: 'not found', message: 'Element not found' };

  return { type: null, message };
};

const updateElement = async (element, id) => {
  const validationResult = validationElementSchema(element);

  if (validationResult.type) return validationResult;

  const result = await elementModel.findById(id);

  if (!result) return { type: 'not found', message: 'Element not found' };

  await elementModel.update(element, id);

  const message = await elementModel.findById(id);

  return { type: null, message };
};

const deleteElement = async (id) => {
  const result = await elementModel.findById(id);

  if (!result) return { type: 'not found', message: 'Element not found' };

  await elementModel.remove(id);

  return { type: null, message: [] };
};

module.exports = {
  createElement,
  getAllElements,
  getElementById,
  updateElement,
  deleteElement,
};
