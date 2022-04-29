const router = require('express').Router();
const moviesController = require('../controllers/movies.controller');
const upload = require('../middleware/multer');

// Get all Movies
router.get('/', moviesController.getMovies);

// Upload Movies
router.post('/upload', upload.single('file'), moviesController.uploadMovies);

// Edit a Movie
router.put('/edit/:id', moviesController.editMovie);

// Delete Movie
router.delete('/delete/:id', moviesController.deleteMovie);

module.exports = router;
