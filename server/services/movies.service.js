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
                .pipe(csv.parse({ delimiter: ';', headers: true }))
                .on('error', (error) => {
                    console.error(error);
                    throw error.message;
                })
                .on('data', (data) => movies.push(data))
                .on('end', async () => {
                    movies.forEach(async (movie) => {
                        const pelicula = await MoviesModel.findOne({ where: { titulo: movie.titulo } });
                        console.log(pelicula);
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

    static async editMovie(body, id) {
        try {
            const find = await MoviesModel.findOne({ where: { titulo: body.titulo } });

            if (find?.dataValues?.titulo === body.titulo) {
                const result = await MoviesModel.update(
                    { genero: body.genero, año: body.year, actores: body.actores, director: body.director },
                    {
                        where: { id: id },
                        returning: true,
                    }
                );

                return { error: false, data: result[1] };
            }

            const result = await MoviesModel.update(body, {
                where: { id: id },
                returning: true,
            });

            return { error: false, data: result[1] };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async deleteMovie(id) {
        try {
            await MoviesModel.destroy({ where: { id: id } });

            return { error: false, data: true };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }

    static async getMovies() {
        try {
            const movies = await MoviesModel.findAll({ raw: true });

            return { error: false, data: movies };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }
}

module.exports = MoviesService;
