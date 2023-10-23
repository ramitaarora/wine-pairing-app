const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Wine extends Model {}

Wine.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  wine_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  wine_type: {
    type: DataTypes.STRING,
    allowNull: false,
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
    allowNull: true,
  },
  wine_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
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