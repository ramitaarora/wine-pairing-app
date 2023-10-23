const User = require('./User');
const Food = require('./Food');
const Wine = require('./Wine');
const Pairing = require('./Pairing');


User.hasMany(Pairing, {
  foreignKey: 'user_id',
});

Pairing.belongsTo(User, {
  foreignKey: 'user_id',
});

Food.belongsToMany(Pairing, {
  through: 'Pairing', 
  foreignKey: 'food_id',
});

Pairing.belongsTo(Food, {
  foreignKey: 'food_id',
});

Wine.belongsToMany(Pairing, {
  through: 'Pairing', 
  foreignKey: 'wine_id',
});

Pairing.belongsTo(Wine, {
  foreignKey: 'wine_id',
});

module.exports = { Food, Wine, User, Pairing };
