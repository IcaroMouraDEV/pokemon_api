module.exports = (sequelize, DataTypes) => {
  const Move = sequelize.define('Move', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    typeId: { type: DataTypes.INTEGER, foreignKey: true },
    categoryId: { type: DataTypes.INTEGER, foreignKey: true },
    power: DataTypes.INTEGER,
    accuracy: DataTypes.INTEGER,
    effect: DataTypes.STRING,
  },
  {
    timestamps: false, tableName: 'moves', underscored: true, 
  });

  Move.associate = (models) => {
    Move.belongsTo(models.Element, { foreignKey: 'typeId', as: 'elements' });
    Move.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'categories' });
  };

  return Move;
};
