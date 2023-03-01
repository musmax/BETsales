const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/database');

exports.Country = sequelize.define('Country',{
qty:{
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,    
},
price:{
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
},

});