const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

exports.BillingAddress = sequelize.define('BillingAddress', {
  billing_address: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: {
      arg : "true",
      msg : "Billing address cannot be duplicated"
  },
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
  postal_code: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
});
