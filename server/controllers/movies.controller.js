const MoviesService = require('../services/movies.service.js');

class Movies {
    static async uploadMovies(req, res, next) {
        const { error } = await MoviesService.uploadMovies(req.file);

        return error ? res.status(404).send({ message: error }) : res.json({ message: 'Upload Successfully' });
    }

    static async editMovie(req, res, next) {
        const info = await MoviesService.editMovie(req.body, req.params.id);

        return info.error ? res.status(404).send(info) : res.json(info);
    }

    static async deleteMovie(req, res, next) {
        const { error, data } = await MoviesService.deleteMovie(req.params.id);

        return error ? res.status(404).send(error) : res.json({ deleted: data });
    }

    static async getMovies(req, res, next) {
        const { error, data } = await MoviesService.getMovies(req.query.page, req.query.size);

        return error ? res.status(404).send(error) : res.json(data);
    }
}

module.exports = Movies;
