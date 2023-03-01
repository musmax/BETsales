const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/database');

exports.UserReview = sequelize.define('UserReview',{
rating_value:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,    
},
comment: {
    type : DataTypes.STRING,
    allowNull : true,
    unique:false,
}
});