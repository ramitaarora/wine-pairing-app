const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pairing extends Model {}

Pairing.init({
  pairing_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  food_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'food',
      key: 'food_id',
    },
  },
  wine_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'wine',
      key: 'wine_id',
    },
  }
  // user_id: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'user',
  //     key: 'user_id',
  //   },
  // },
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'pairing',
});

module.exports = Pairing;
