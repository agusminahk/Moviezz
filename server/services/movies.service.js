const csv = require('fast-csv');
const fs = require('fs');
const path = require('path');
const Op = require('sequelize').Op;

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
                    { genero: body.genero, año: body.año, actores: body.actores, director: body.director },
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

    static async getMovies(page, size, query) {
        try {
            const titulo = query.titulo || '';
            const año = query.year || '';
            const director = query.director || '';
            const actores = query.actores || '';
            const genero = query.genero || '';

            if (titulo || año || director || actores || genero) {
                const result = await MoviesModel.findAndCountAll({
                    where: {
                        titulo: { [Op.like]: '%' + titulo + '%' },
                        año: { [Op.like]: '%' + año + '%' },
                        director: { [Op.like]: '%' + director + '%' },
                        actores: { [Op.like]: '%' + actores + '%' },
                        genero: { [Op.like]: '%' + genero + '%' },
                    },
                    limit: size,
                    offset: page * size,
                });

                return { error: false, data: { content: result.rows, totalPages: Math.ceil(result.count / size) } };
            }

            const movies = await MoviesModel.findAndCountAll({ limit: size, offset: page * size });

            return { error: false, data: { content: movies.rows, totalPages: Math.ceil(movies.count / size) } };
        } catch (error) {
            return { error: true, data: error.message };
        }
    }
}

module.exports = MoviesService;
