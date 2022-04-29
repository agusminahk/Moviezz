const csv = require('fast-csv');
const fs = require('fs');
const path = require('path');

const MoviesModel = require('../models/movies.model.js');

class MoviesService {
    static async uploadMovies(file) {
        const movies = [];
        let result;
        const direction = path.join('./uploads/', file.filename);

        try {
            fs.createReadStream(direction)
                .pipe(csv.parse({ headers: true }))
                .on('error', (error) => {
                    console.error(error);
                    throw error.message;
                })
                .on('data', (data) => movies.push(data))
                .on('end', async () => {
                    movies.forEach(async (movie) => {
                        const pelicula = await MoviesModel.findOne({ where: { title: movie.title } });
                        return !pelicula && (await MoviesModel.create(movie));
                    });
                });
            return {
                error: false,
            };
        } catch (error) {
            result = {
                status: 'error',
                filename: file.originalname,
                message: 'Upload Error = ' + error.message,
            };

            return { error: true, data: result };
        }
    }
}

module.exports = MoviesService;
