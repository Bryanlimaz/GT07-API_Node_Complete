const connection = require('../config/database/connection');
const { DataTypes } = require('sequelize');

let usersModel = connection.define('users', {
    first_name: {
        type: DataTypes.STRING(50), //Equivalente ao VARCHAR(50)
        allowNull:false //Equivalente ao NOTNULL
    },
    surname: {
        type: DataTypes.STRING(50),
        allowNull:false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull:false
    },
    password:{
        type: DataTypes.STRING(255),
        allowNull:false
    }
});

module.exports = usersModel;