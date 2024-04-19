const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../config/database')

const Receptionist = sequelize.define('receptionist',{
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },

    receptionistName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    contactNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    totalRegisteredPatients: {
        type: DataTypes.INTEGER,
        allowNull:false
    },


    totalRegFeeCollected: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    

    receptionistId: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    
    username: {
        type: DataTypes.STRING,
        allowNull:false
    },
    
    password: {
        type: DataTypes.STRING,
        allowNull:false
    },
    

    receptionistImage: {
        type: DataTypes.STRING,
        allowNull:false
    },

    lastLoggedIn: {
        type: DataTypes.STRING,
        allowNull: false
    },

    loginStatus: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
},{
    freezeTableName: true,
    timestamps: false
})


async function createReception() {
    await Receptionist.sync()
}

createReception()


module.exports = Receptionist