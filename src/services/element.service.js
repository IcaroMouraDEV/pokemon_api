const { Element } = require('../models');
const { validationElementSchema } = require('./validations/validationsInputsValue');

const createElement = async (element) => {
  const validationResult = validationElementSchema(element);

  if (validationResult.type) return validationResult;

  const allElements = await Element.findAll();
  const elementExists = allElements.find((e) => e.element.includes(element));
  if (elementExists) return { type: 'error', message: 'element exist' };

  const { id } = await Element.create({ element });
  return { type: null, message: `element registry with id ${id}` };
};

const getAllElements = async () => {
  const message = await Element.findAll();

  return { type: null, message };
};

const getElementById = async (id) => {
  const message = await Element.findByPk(id);

  if (!message) return { type: 'not found', message: 'Element not found' };

  return { type: null, message };
};

const updateElement = async (element, id) => {
  const validationResult = validationElementSchema(element);

  if (validationResult.type) return validationResult;

  const result = await Element.findByPk(id);

  if (!result) return { type: 'not found', message: 'Element not found' };

  await Element.update(
    { element },
    { where: { id } },
  );

  const message = await Element.findByPk(id);

  return { type: null, message };
};

const deleteElement = async (id) => {
  const result = await Element.findByPk(id);

  if (!result) return { type: 'not found', message: 'Element not found' };

  await Element.destroy(
    { where: { id } },
  );

  return { type: null, message: [] };
};

module.exports = {
  createElement,
  getAllElements,
  getElementById,
  updateElement,
  deleteElement,
};
