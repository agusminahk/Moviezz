const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
class Movies extends Model {}

Movies.init(
    {
        movieId: { type: DataTypes.INTEGER },
        title: { type: DataTypes.STRING },
        genre: { type: DataTypes.STRING },
    },
    { sequelize, modelName: 'movies' }
);

module.exports = Movies;
