var express = require('express');
var router = express.Router();
var userRouter = require('../api-features/user/user.routes');
var artistDataRouter = require('../api-features/artist-data/artist-data.routes');

router.use('/user', userRouter);
router.use('/artist-data', artistDataRouter);

module.exports = router;
