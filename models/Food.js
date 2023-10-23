const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Food extends Model {}

Food.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        food_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        food_type:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        food_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        food_description: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'food'
    }
);

module.exports = Food;