const router = require('express').Router();
const { Food, Wine, Pairing, User } = require('../../models');
// const withAuth = require('../utils/auth');

// router.post('/wine', async (req, res) => {
//     // console.log(req.body.wine);
//     const wineId = await Wine.findAll({ where: { wine_type: req.body.wine } });
//     const winePairing = await Pairing.findAll({where: {wine_id: wineId[0].id},  
//         include: [{ model: Food}, {model: Wine}]});
//     const winePairings = winePairing.map(wine => wine.get({ plain: true }));
//     console.log({winePairings})
//     res.render('searchResults', {winePairings})
//     // res.json(winePairing)
// })

module.exports = router;