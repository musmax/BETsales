const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

exports.Classification = sequelize.define('Classification', {
  classification: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      arg : "true",
      msg : "Classification cannot be duplicated"
  }
}
})