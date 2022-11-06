const elementModel = (sequelize, DataTypes) => {
  const Element = sequelize.define('Element', {
    element: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'elements',
    underscored: true, 
  });

  Element.associate = (models) => {
    Element.hasOne(models.Move, { foreignKey: 'categoryId', as: 'categories' });
  };

  return Element;
};

module.exports = elementModel;