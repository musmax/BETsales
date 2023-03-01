const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/database');

exports.VariationOption = sequelize.define('VariationOption',{
value: {
    type : DataTypes.STRING,
    allowNull: false,
    unique: false,
},
itemsavailable: {
    type : DataTypes.STRING,
    allowNull: false,
    
},

});