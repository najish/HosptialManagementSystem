const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../config/database')

const Receptionist = sequelize.define('receptionist',{
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },

    address: {
        type: DataTypes.STRING,
        allowNull: false
    }


},{
    freezeTableName: true,
    timestamps: false
})


async function createReception() {
    await Receptionist.sync({alter: true})
}

createReception()


module.exports = Receptionist