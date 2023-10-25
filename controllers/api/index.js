const router = require('express').Router();

const wineRoutes = require('./wineRoutes');
const userRoutes = require('./userRoutes');
const wordCompareRoutes = require('./word-compare');
const foodRoutes = require('./foodroutes');
const searchRoutes = require('./searchRoutes');

router.use('/users', userRoutes);
router.use('/word-compare', wordCompareRoutes);
router.use('/wine', wineRoutes);
router.use('/food', foodRoutes);
router.use('/search', searchRoutes);

module.exports = router;