const sequelize = require('../config/connection');
const foodData = require('./foodData.json');
const wineData = require('./wineData.json');
// const userData = require('./userData.json');


const { Food, Wine } = require('../models');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    // await User.bulkCreate(userData, {
    //     individualHooks: true,
    //     returning: true,
    //   });

    await Food.bulkCreate(foodData);

    await Wine.bulkCreate(wineData);
    
    process.exit(0);
};

seedDatabase();
