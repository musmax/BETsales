const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/database');

exports.ProductImage = sequelize.define('ProductImage',{
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false, 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false, 
    },
    data: {
      type: DataTypes.BLOB('long'),
      allowNull: false,
      unique: false, 
    },
    productId: {
      type: DataTypes.STRING(),
      allowNull: false,
      unique: false, 
    },
  });



