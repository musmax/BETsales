const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/database');

exports.Country = sequelize.define('ShoppingCartItem',{
qty:{
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,    
},
})