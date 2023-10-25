const router = require('express').Router();
const { Food, Wine, Pairing, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('landingPage', {logged_in: req.session.logged_in});
});

router.get('/search', (req, res) => {
    res.redirect('/home');
})

router.get('/search/wine/:wine_type', withAuth, async (req, res) => {
    const wineId = await Wine.findAll({ where: { wine_type: req.params.wine_type } });
    const winePairing = await Pairing.findAll({where: {wine_id: wineId[0].id},  
        include: [{ model: Food}, {model: Wine}]});
    const winePairings = winePairing.map(wine => wine.get({ plain: true }));
    res.render('searchResults', {winePairings, logged_in: req.session.logged_in})
});

router.get('/search/food/:food_name', withAuth, async (req, res) => {
    const foodId = await Food.findAll({ where: { food_name: req.params.food_name } });
    const foodIds = foodId.map(food => food.get({ plain: true }));
    const winePairing = await Pairing.findAll({where: {food_id: foodIds[0].id},  
        include: [{ model: Food}, {model: Wine}]});
    const winePairings = winePairing.map(wine => wine.get({ plain: true }));
    res.render('searchResults', {winePairings, logged_in: req.session.logged_in})
});

router.get('/home', withAuth, async (req, res) => {
    try {
        const pairingData = await Pairing.findAll({
            attributes: ['pairing_id'],
            include: [
            { model: Wine, attributes: ['wine_name'] },
            { model: Food, attributes: ['food_name'] },
            { model: User, attributes: ['name'] }
            ]
            })

        const pairings = pairingData.map((pairing) => pairing.get({ plain: true }));

        const userData = await User.findAll({where: {id : req.session.user_id }});
        const userNameData = userData.map((user) => user.get({plain:true}));
        
        const userPairingData = await Pairing.findAll({
             where: { user_id: req.session.user_id },
             include: [{model: Wine}, {model: Food}] 
            });
        const userPairings = userPairingData.map((pairings => pairings.get({plain:true})));
        
        res.render('homepage', { 
            pairings, 
            logged_in: req.session.logged_in, 
            userNameData: userNameData[0].name, 
            userPairings
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/pairing/:id', async (req, res) => { //??????
    try{
        const pairingData = await Pairing.findByPk(req.params.id, {
            include:[
            {
            model: User,
            attributes: ['name'],
            },
            {
            model: Wine,
            attributes: 
                        ['name']
                        ['type']
                        ['price']
                        ['description']
            },
            {
            model: Food,
            attributes: 
                        ['name']
                        ['type']
                        ['price']
                        ['description']
            },
            ],
        });

        const pairing = pairingData.get({ plain:true });
       
        res.json(pairing);
       
        // res.render('searchResults', {
        //     ...pairing,
        //     logged_in: req.session.logged_in
        // });
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/profile', withAuth, async (req, res) => {
    try{
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Pairing }],
        });

        const user = userData.get({ plain: true });

        res.json(user);
        
        // res.render('profile', {
        //     ...user,
        //     logged_in: true
        // });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    res.render('login');
})

module.exports = router;