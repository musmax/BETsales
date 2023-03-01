const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/database');

exports.Variation = sequelize.define('Variation',{
    variation_option: {
        type : DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
})