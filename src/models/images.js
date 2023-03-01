const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/database');

exports.Image = sequelize.define('Image',{
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
      type: DataTypes.BLOB("long"),
      allowNull: false,
      unique: false, 
    },
    ProductId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false, 
    },
  });
