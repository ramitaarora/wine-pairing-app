const router = require('express').Router();

const apiRoutes = require('./api');
// const landingRoutes = require('./landingRoutes')
const homeRoutes = require('./homeRoutes')

// router.use('/', landingRoutes);
router.use('/', homeRoutes)
router.use('/api', apiRoutes);

module.exports = router;