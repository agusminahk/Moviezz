const router = require('express').Router();
const moviesController = require('../controllers/moviesController');
const setFile = require('../middleware/multer');

router.get('/', (req, res) => res.send('LLEGUE'));
router.post('/upload', setFile, moviesController.uploadMovies);

module.exports = router;
