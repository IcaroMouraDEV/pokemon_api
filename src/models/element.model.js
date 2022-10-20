const elementModel = (sequelize, DataTypes) => {
  const Element = sequelize.define('Element', {
    element: DataTypes.STRING,
  });

  return Element;
};

module.exports = elementModel;