const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/database');

exports.ShippingMethods = sequelize.define('ShippingMethods',{
shipping_name:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,    
},
shipping_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
},

})