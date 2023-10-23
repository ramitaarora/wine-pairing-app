const sequelize = require('../config/connection');
<<<<<<< HEAD
const { User } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
=======
const { Food } = require('../models');

// const userData = require('./userData.json');
const foodData = require('./foodData.json');
// const wineData = require('./wineData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    // await User.bulkCreate(userData, {
    //     individualHooks: true,
    //     returning: true,
    //   });

    await Food.bulkCreate(foodData);

    // await Wine.bulkCreate(wineData);
    
    process.exit(0);
};

seedDatabase();
>>>>>>> main
