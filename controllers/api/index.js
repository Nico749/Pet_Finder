const router = require('express').Router();
const userRoutes = require('./userRoute');
const petRoutes = require('./petRoute');

router.use('/users', userRoutes);
router.use('/pet', petRoutes);

module.exports = router;
