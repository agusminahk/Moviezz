const router = require('express').Router();
const moviesRouter = require('./movies.js');
//

router.use('/movies', moviesRouter);

module.exports = router;
