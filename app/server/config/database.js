const { dialect, database, logging, host } = require('./config.json');
const Sequelize = require('sequelize');

module.exports = new Sequelize(database, null, null, {
    dialect,
    logging,
    host,
});
