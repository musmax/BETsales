const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/database');

exports.OrderStatus = sequelize.define('OrderStatus',{
value:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,    
},
})