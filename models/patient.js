const sequelize = require('../config/database')
const {Sequelize, DataTypes} = require('sequelize')

const Patient = sequelize.define('patient', {
    patientId: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    gender: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },

    location: {
        type: DataTypes.STRING,
        allowNull: false
    },

    doctorId: {
        type: DataTypes.UUID,
        allowNull: false
    },

    department: {
        type: DataTypes.STRING,
        allowNull: false
    },

    ratePlan: {
        type: DataTypes.STRING,
        allowNull: false
    },

    sponser: {
        type: DataTypes.STRING,
        allowNull: false
    },

    referredBy: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contactNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },

    consultingFee: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

},{
    freezeTableName: true,
    timestamps: false
})



async function createPatient() {
    await Patient.sync()
}

createPatient()
module.exports = Patient