const sequelize = require('../config/connection');
const { Wine } = require('../models/Wine');

const wineData = require('./wineData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

    await Wine.bulkCreate(wineData)
    
    process.exit(0);
  }



seedDatabase();