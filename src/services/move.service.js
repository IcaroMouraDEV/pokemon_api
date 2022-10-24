const { Move, Element, Category } = require('../models');

const getAllMoves = async () => {
  const data = await Move.findAll();
  const elements = await Element.findAll();
  const categories = await Category.findAll();

  const message = data.map((item) => {
    const { element } = elements.find((e) => item.typeId === e.id);
    const { category } = categories.find((e) => item.categoryId === e.id);

    return {
      id: item.id,
      name: item.name,
      type: element,
      category,
      power: item.power,
      accuracy: item.accuracy,
      effect: item.effect,
    };
  });

  return { type: null, message };
};

const getById = async (id) => {
  const data = await Move.findByPk(id);
  const { element } = await Element.findByPk(data.typeId);
  const { category } = await Category.findByPk(data.categoryId);

  const message = {
    id: data.id,
    name: data.name,
    type: element,
    category,
    power: data.power,
    accuracy: data.accuracy,
    effect: data.effect,
  };

  return { type: null, message };
};

module.exports = {
  getAllMoves,
  getById,
};