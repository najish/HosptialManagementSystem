require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3000

const jwt = require('jsonwebtoken')
const receptionistRouter = require('./routes/receptionistRoute/receptionistRoute')
const doctorRouter = require('./routes/doctorRoute/doctorRoute')
const superAdminRouter = require('./routes/superAdminRoute/superAdminRoute')
const authRouter = require('./routes/auth/authRoute')
const patientRouter = require('./routes/patientRoute/patientRoute')
const sequelize = require('./config/database')
const morgan = require('morgan')
const cors = require('cors')
const {query, validator, validatorResult} = require('express-validator')
app.use(cors())
app.use(express.json())
app.use(morgan('combined'))


app.use('/receptionist',receptionistRouter)
app.use('/doctor',doctorRouter)
app.use('/super-admin',superAdminRouter)
app.use('/auth',authRouter)
app.use('/patient',patientRouter)



app.get('/',(req,res) => {
    res.send('hello from hospital app')
})


app.get('/hello',(req,res) => {
    let token = req.headers['authorization']
    token = token.split(' ')[1]
    console.log(`token : ${token}`)
    const valid = jwt.verify(token,process.env.JWT_SECRET)
    console.log('valid',valid)
    console.log(process.env.JWT_SECRET)
    if(valid) {
        console.log('authenticated',token)
        return res.send(`authenticated : , token : ${token}, valid : ${valid}`)
    }
    else 
    return res.send('un-authenticated')
})




app.listen(PORT,() => console.log(`running at port : ${PORT}`))