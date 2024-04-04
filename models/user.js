const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../config/database')

const User = sequelize.define('user',{
    userId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    }


},{
    freezeTableName: true,
    timestamps: false
})


async function createUser() {
    await User.sync({alter: true})
}

createUser()

module.exports = User