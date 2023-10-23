const sequelize = require('../config/connection');
const foodData = require('./foodData.json');
const wineData = require('./wineData.json');
const userData = require('./userData.json');

const { Food, Wine, User, Pairing } = require('../models');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      });
      // console.log(users);
    const foods = await Food.bulkCreate(foodData, {
      individualHooks: true,
      returning: true,
    });

    const wines = await Wine.bulkCreate(wineData, {
      individualHooks: true,
      returning: true,
    });
    
    for (let i=0; i < 20; i++) {
      await Pairing.create({
        food_id: foods[Math.floor(Math.random()*foods.length)].food_id,
        wine_id: wines[Math.floor(Math.random()*wines.length)].wine_id,
        // user_id: users[Math.floor(Math.random()*users.length)].user_id
      })
    }
    process.exit(0);
};

seedDatabase();
