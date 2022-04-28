const csv = require('fast-csv');
const fs = require('fs');
const path = require('path');

const MoviesModel = require('../models/movies.model.js');

class Movies {
    static async uploadMovies(req, res, next) {
        const movies = [];
        const direction = path.join('./uploads/', req.file.filename);

        try {
            fs.createReadStream(direction)
                .pipe(csv.parse({ headers: true }))
                .on('error', (error) => {
                    console.error(error);
                    throw error.message;
                })
                .on('data', (data) => movies.push(data))
                .on('end', async () => {
                    await MoviesModel.bulkCreate(movies);

                    const result = {
                        status: 'ok',
                        filename: req.file.originalname,
                        message: 'Upload Successfully',
                    };

                    res.json(result);
                });
        } catch (error) {
            const result = {
                status: 'ok',
                filename: req.file.originalname,
                message: 'Upload Error = ' + error.message,
            };

            res.json(result);
        }
    }
}

module.exports = Movies;
