const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

exports.User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  firstandlastname:{
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: 'Invalid email',
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  profile_image: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "user",
  },
});
