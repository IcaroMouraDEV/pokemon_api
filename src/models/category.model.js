module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    category: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'categories',
    underscored: true, 
  });
  
  Category.associate = (models) => {
    Category.hasOne(models.Move, { foreignKey: 'typeId', as: 'elements' });
  };

  return Category;
};
