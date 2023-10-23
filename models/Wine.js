const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Wine extends Model {}

Wine.init({
  id: {
    type: DataTypes.INTEGER,
    allownull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  wine_name: {
    type: DataTypes.STRING,
    allownull: false,
  },
  wine_type: {
    type: DataTypes.STRING,
    allownull: false,
  },
  wine_description: {
    type: DataTypes.STRING,
  },
  wine_red: {
    type: DataTypes.BOOLEAN,
  },
  wine_white: {
    type: DataTypes.BOOLEAN,
  },
  wine_sparkling: {
    type: DataTypes.BOOLEAN,
    allownull: true,
  },
  wine_price: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
  // food_pairings_id: {
  //     type: DataTypes.INTEGER,
  //     references: {
  //         model: 'pairing',
  //         key: 'id',
  //     },
  // }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'wine'
}
);

module.exports = Wine;