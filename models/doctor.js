const sequelize = require('../config/database')
const {Sequelize, DataTypes} = require('sequelize')

const getDoctorId = () => {

    return "dr-"
}
const Doctor = sequelize.define('Doctor',{
    doctorId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },

    doctorName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    doctorSpecialization: {
        type: DataTypes.STRING,
        allowNull: false
    },

    experience: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    licenseNumber: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamps: false
})

async function createDoctor () {
    await Doctor.sync({alter: true})
}

createDoctor()


module.exports = createDoctor