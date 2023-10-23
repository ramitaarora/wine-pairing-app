const router = require('express').Router();
<<<<<<< HEAD

const userRoutes = require('./userRoutes');
// const homeRoutes = require('./homeRoutes');
// const searchRoutes = require('./searchRoutes');

router.use('/users', userRoutes);
// router.use('/home', homeRoutes);
// router.use('/search', searchRoutes);
=======
// const userRoutes = require('./userRoutes');
// const homeRoutes = require('../homeRoutes');
// const searchRoutes = require('./searchRoutes');
const foodRoutes = require('./foodroutes');

// router.use('/users', userRoutes);
// router.use('/home', homeRoutes);
// router.use('/search', searchRoutes);
router.use('/food', foodRoutes)
>>>>>>> main

module.exports = router;