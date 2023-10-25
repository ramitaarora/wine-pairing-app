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

router.get('/pairing', async (req, res) => {
    const pairingData = await Pairing.findAll({
        include: [{model: Wine}, {model: Food}]
    });
    res.json(pairingData);
})

router.post('/update', async(req, res) => {
    try {
        const pairingId = req.body.id;
        console.log(req.body.id);
        const updatePairing = await Pairing.update({user_id: req.session.user_id}, {
            where: {
                pairing_id: pairingId
            }
        });
        res.status(200).json(updatePairing);
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;