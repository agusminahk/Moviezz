const { resolveSoa } = require('dns');
const csv = require('fast-csv');
const fs = require('fs');
const path = require('path');

const MoviesModel = require('../models/movies.model.js');
const MoviesService = require('../services/movies.service.js');

class Movies {
    static async uploadMovies(req, res, next) {
        const { error } = await MoviesService.uploadMovies(req.file);

        return error ? res.status(404).send({ message: error }) : res.json({ message: 'Upload Successfully' });
    }

    static async editMovies(req, res, next) {
        const { data, error } = await MoviesService.uploadMovies(req.body);

        return error ? res.status(404).send({ message: error }) : res.json({ data });
    }
}

module.exports = Movies;
