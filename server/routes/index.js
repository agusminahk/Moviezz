const router = require('express').Router();
const moviesRouter = require('./movies.router.js');
//

router.use('/movies', moviesRouter);

module.exports = router;
