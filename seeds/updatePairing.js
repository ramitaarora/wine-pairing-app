const sequelize = require('../config/connection');
const { Pairing } = require('../models');

const updateDatabase = async(pairingId) => {
    await sequelize.sync({ force: true });

    const updateUser = await Pairing.update({user_id: pairingId}, {
        where: {
            pairing_id: pairingId
        },
        individualHooks: true,
        returning: true,
    });
};

modules.export = updateDatabase;