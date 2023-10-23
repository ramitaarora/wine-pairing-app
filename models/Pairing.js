const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Food extends Model {}
Food.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'food',
});

class Wine extends Model {}
Wine.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'wine',
});

class Pairing extends Model {}
Pairing.init({
  foodId: {
    type: DataTypes.INTEGER,
    references: {
      model: Food,
      key: 'id',
    },
  },
  wineId: {
    type: DataTypes.INTEGER,
    references: {
      model: Wine,
      key: 'id',
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
  },
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'pairing',
});

Pairing.belongsTo(Food, { foreignKey: 'foodId' });
Pairing.belongsTo(Wine, { foreignKey: 'wineId' });

module.exports = Pairing;
