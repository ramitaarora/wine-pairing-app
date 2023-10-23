const router = require('express').Router();

const wineRoutes = require('./wineRoutes');
const userRoutes = require('./userRoutes');
const aiRoutes = require('./aiSearchRoutes');
const foodRoutes = require('./foodRoutes');
const searchRoutes = require('./searchRoutes');

router.use('/users', userRoutes);
router.use('/ai-search', aiRoutes);
router.use('/wine', wineRoutes);
router.use('/food', foodRoutes);
router.use('/search', searchRoutes);

module.exports = router;
