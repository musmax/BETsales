const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/database');

exports.UserPaymentMethod = sequelize.define('UserPaymentMethod',{
provider:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,    
},
account_number: {
    type: DataTypes.INTEGER,
    allowNull:false,
    unique:false,
},
expiry_date: {
    type : DataTypes.STRING,
    allowNull : false,
    unique: false,
},
is_default: {
    type : DataTypes.STRING,
    allowNull: true,
    unique: false,
},

})