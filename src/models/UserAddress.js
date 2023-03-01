const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/database');

exports.UserAddress = sequelize.define('UserAddress',{

user_address:{
    type: DataTypes.STRING,
    allowNull: true,
    unique: {
        arg: true,
        msg: "Address must be unique"
    }    
},
city:{
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,    
},
country:{
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,    
},
postal_code:{
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,    
},
is_default:{
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
}
})
    
