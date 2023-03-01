const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/database');

exports.ShopOrder = sequelize.define('ShopOrder',{
    
    order_total:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,    
    },

});