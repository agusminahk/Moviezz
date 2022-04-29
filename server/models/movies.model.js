const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
class Movies extends Model {}

Movies.init(
    {
        titulo: { type: DataTypes.STRING, allowNull: false, notEmpty: true },
        genero: { type: DataTypes.STRING },
        año: { type: DataTypes.INTEGER },
        director: { type: DataTypes.STRING },
        actores: { type: DataTypes.STRING },
    },
    { sequelize, modelName: 'movies', timestamps: false }
);

module.exports = Movies;
