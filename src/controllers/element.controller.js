const { elementService } = require('../services');

const createElement = async (req, res) => {
  const { element } = req.body;
  const { type, message } = await elementService.createElement(element);

  if (type) return res.status(422).json({ message });

  res.status(201).json({ message });
};

const getAllElements = async (_req, res) => {
  const { message } = await elementService.getAllElements();

  res.status(200).json(message);
};

const getElementByIdOrName = async (req, res) => {
  const { id } = req.params;

  if (id.length > 2) {
    const element = await elementService.getElementByName(id);
    
    if (element.type) return res.status(404).json({ message: element.message });
    
    return res.status(200).json(element.message);
  }

  const { type, message } = await elementService.getElementById(id);

  if (type) return res.status(404).json({ message });

  res.status(200).json(message);
};

const updateElement = async (req, res) => {
  const { id } = req.params;
  const { element } = req.body;
  const { type, message } = await elementService.updateElement(element, id);

  if (type === 'INVALID_VALUE') return res.status(422).json({ message });
  if (type === 'not found') return res.status(404).json({ message });

  res.status(200).json(message);
};

const removeElement = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await elementService.deleteElement(id);

  if (type) return res.status(404).json({ message });

  res.status(204).json(message);
};

module.exports = {
  createElement,
  getAllElements,
  getElementByIdOrName,
  updateElement,
  removeElement,
};