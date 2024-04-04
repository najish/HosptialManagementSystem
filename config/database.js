const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('hospitalmanagementsystem','root','Zafer1998@',{
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

async function connection() {
    try {
        sequelize.authenticate().then(() => connection.log('connected to database')).catch(err => new Error(err))
    } catch(err) {
        console.log(err)
    }
}

connection()



module.exports = sequelize