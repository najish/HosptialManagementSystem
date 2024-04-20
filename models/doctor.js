const sequelize = require('../config/database')
const {Sequelize, DataTypes} = require('sequelize')

const Doctor = sequelize.define('Doctor',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },

    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    about: {
        type: DataTypes.STRING,
        allowNull: false
    },

    enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    profile: {
        type: DataTypes.STRING,
        allowNull: false
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }

},{
    freezeTableName: true,
    timestamps: false
})

async function createDoctor () {
    await Doctor.sync()
}

createDoctor()


module.exports = Doctor