const router = require('express').Router();
const moviesController = require('../controllers/movies.controller');
const upload = require('../middleware/multer');

router.get('/', (req, res) => res.send('LLEGUE'));
router.post('/upload', upload.single('file'), moviesController.uploadMovies);
router.put('/edit/:id', moviesController.editMovie);

module.exports = router;
