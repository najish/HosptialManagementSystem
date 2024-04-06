const sequelize = require('../config/database')
const {Sequelize, DataTypes} = require('sequelize')

const Doctor = sequelize.define('Doctor',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    specialization: {
        type: DataTypes.STRING,
        allowNull: false
    },

    experience: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    licenseNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
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