const User = require('./User');
const Food = require('./Food');
const Wine = require('./Wine');
const Pairing = require('./Pairing');

Pairing.belongsTo(Wine, { foreignKey: 'wine_id' });
Pairing.belongsTo(Food, { foreignKey: 'food_id' });
Pairing.belongsTo(User, { foreignKey: 'user_id' });

module.exports = { Food, Wine, User, Pairing };
