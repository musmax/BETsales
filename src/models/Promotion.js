const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/database');

exports.Promotion = sequelize.define('Promotion',{
promotion_name:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,    
},
promotion_description:
{
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
},
discount: {
    type: DataTypes.FLOAT,
    allowNull: false,
    unique: false,
},
start_date: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
},
end_date: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
}
})