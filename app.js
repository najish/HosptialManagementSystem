const express = require('express')
const app = express()
const PORT = 3000


const receptionistRouter = require('./routes/receptionistRoute/receptionistRoute')
const doctorRouter = require('./routes/doctorRoute/doctorRoute')
const superAdminRouter = require('./routes/superAdminRoute/superAdminRoute')
const sequelize = require('./config/database')
const morgan = require('morgan')


// app.set('strict routing', true)
app.use(express.json())
app.use(morgan('combined'))


app.use('/receptionist',receptionistRouter)
app.use('/doctor',doctorRouter)
app.use('/super-admin',superAdminRouter)




app.get('/',(req,res) => {
    res.send('hello from hospital app')
})





app.listen(PORT,() => console.log(`running at port : ${PORT}`))