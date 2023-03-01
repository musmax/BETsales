const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/database');

exports.Product = sequelize.define('Product',{
product_name:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
        arg : "true",
        msg : "Product name must be unique"
    }   
},
description:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,    
},
brand_name:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,    
},
category:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:false,
},
price:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:false,
},

})