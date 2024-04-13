require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')
const receptionistRouter = require('./routes/receptionistRoute/receptionistRoute')
const doctorRouter = require('./routes/doctorRoute/doctorRoute')
const superAdminRouter = require('./routes/superAdminRoute/superAdminRoute')
const authRouter = require('./routes/auth/authRoute')
const patientRouter = require('./routes/patientRoute/patientRoute')
const sequelize = require('./config/database')
const morgan = require('morgan')
const cors = require('cors')


app.use(express.static('public'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('combined'))



// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads/receptionistImages')
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
// })

// const upload = multer({storage: storage})

app.use('/receptionist',receptionistRouter)
app.use('/doctor',doctorRouter)
app.use('/super-admin',superAdminRouter)
app.use('/auth',authRouter)
app.use('/patient',patientRouter)



app.get('/',(req,res) => {
    res.send('hello from hospital app')
})

app.listen(PORT,() => console.log(`running at port : ${PORT}`))
