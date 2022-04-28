const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
class Movies extends Model {}

Movies.init(
    {
        movieId: { type: DataTypes.INTEGER },
        title: { type: DataTypes.STRING },
        genres: { type: DataTypes.STRING },
    },
    { sequelize, modelName: 'movies', timestamps: false }
);

module.exports = Movies;
