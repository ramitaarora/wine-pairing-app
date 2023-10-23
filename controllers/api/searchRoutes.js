const router = require('express').Router();
const { Food, Wine, Pairing, User } = require('../../models');
// const withAuth = require('../utils/auth');

router.get('/search', (req, res) => {
    res.render('searchResults');
});

module.exports = router;