const router = require('express').Router();
const { Food, Wine, Pairing, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    if (!req.session.logged_in) {
        res.render('landingPage', {logged_in: false});
    } else {
        document.location.replace('/home');
    }
});

router.get('/home', (req, res) => {
    if (req.session.logged_in) {
        res.render('homepage', {logged_in: true});
    } else {
        document.location.replace('/');
    }
});

router.get('/search', (req, res) => {
    if (req.session.logged_in) {
        res.render('searchResults', {logged_in: true});
    } else {
        document.location.replace('/');
    }
});

// router.get('/home', async (req, res) => {
//     try {
//         const pairingData = await Pairing.findAll({
//             attributes: ['pairing_id'],
//             include: [
//             { model: Wine, attributes: ['wine_name'] },
//             { model: Food, attributes: ['food_name'] },
//             { model: User, attributes: ['name'] }
//             ]
//             })

//         const pairings = pairingData.map((pairing) => pairing.get({ plain: true }));
//         // console.log(pairings);
//         res.json(pairings);
//         // res.render('homepage', { pairings, logged_in: req.session.logged_in });

//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

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