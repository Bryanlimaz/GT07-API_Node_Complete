const connection = require('../config/database/connection');
const { DataTypes } = require('sequelize');
const usersModel = require('./usersModel');

let adressModel = connection.define('adress', {
    user_id: {
        type: DataTypes.INTEGER, //Equivalente ao VARCHAR(50)
        allowNull:false, //Equivalente ao NOTNULL
        references: {
            model: usersModel,
           key: 'id' 
        },
    },
    street: {
        type: DataTypes.STRING(150),
        allowNull:false
    },
    number: {
        type: DataTypes.STRING(5),
        allowNull:false
    },
    numbers: {
        type: DataTypes.ENUM('text', 'color'),
        allowNull:false,
        defaultValue: 'text'
    }
});

module.exports = adressModel;