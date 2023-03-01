const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/database');

exports.PaymentMethod = sequelize.define('PaymentMethod',{
payment_type:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,    
},
})