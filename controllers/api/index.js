const router = require('express').Router();

const userRoutes = require('./userRoutes');
// const homeRoutes = require('./homeRoutes');
// const searchRoutes = require('./searchRoutes');

router.use('/users', userRoutes);
// router.use('/home', homeRoutes);
// router.use('/search', searchRoutes);

module.exports = router;