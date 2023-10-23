const User = require('./User');
const Food = require('./Food');
const Wine = require('./Wine');
const Pairing = require('./Pairing');

Wine.belongsToMany(Food, {
  through: {
    model: Pairing,
    foreignKey: 'wine_id'
  },
});

Food.belongsToMany(Wine, {
    through: {
        model: Pairing,
        foreignKey: 'food_id'
    },
});

// User.hasMany(Pairing, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Pairing.belongsTo(User, {
//     foreignKey: 'user_id'
// });

// Pairing.belongsTo(Food, { 
//     foreignKey: 'food_id' 
// });

// Pairing.belongsTo(Wine, { 
//     foreignKey: 'wine_id' 
// });

module.exports = { Food, Wine, User, Pairing };
