const MoviesService = require('../services/movies.service.js');

class Movies {
    static async uploadMovies(req, res, next) {
        const { error } = await MoviesService.uploadMovies(req.file);

        return error ? res.status(404).send({ message: error }) : res.json({ message: 'Upload Successfully' });
    }

    static async editMovie(req, res, next) {
        const { data, error } = await MoviesService.editMovie(req.body, req.params.id);

        return error ? res.status(404).send({ message: error }) : res.json({ data });
    }
}

module.exports = Movies;
