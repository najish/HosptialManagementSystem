const express = require('express')
const app = express()
const PORT = 3000

const {body, param, check, query, cookie, header, validationResult, matchedData} = require('express-validator')
const { singularize } = require('sequelize/lib/utils')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.get('/',(req,res) => {
    return res.send('hello')
})

const signupValidate = [
    body('name').notEmpty().trim().isLength({min:3}).withMessage('name should be atleast of three characters')
    
]

app.post('/',signupValidate, (req,res) => {
    const body = req.body
    const model = matchedData(req)
    const result = validationResult(req)
    if(result.isEmpty())
        return res.send(model)
    return res.send(result.array())
})

app.listen(PORT,() => {
    console.log(`server running at port : ${PORT}`)
})