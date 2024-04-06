const User = require('../../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {validationResult, matchedData} = require('express-validator')
const { markContent } = require('pdfkit')

const login = async(req,res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).send(errors.array())
        }
        const {email, password} = req.body
        const user = await User.findOne({where: {
            email: email
        }})
        if(!user) {
            return res.send('user not found')
        }

        const verify = bcrypt.compareSync(password, user.password)
        if(verify) {
            console.log(user)
            const token = jwt.sign(user.userId,process.env.JWT_SECRET)
            return res.json({user,token})
        }
        return res.send('password not matched')

    } catch(err) {
        console.log(err)
        return res.send(err)
    }
}   

const signup = async (req,res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).send(errors.array())
        }
        console.log(req.body)
        const model = matchedData(req)
        console.log(model)
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(model.password,salt)
        model.password = hash
        const user = await User.create(model)
        if(user) {
            return res.status(200).send(user)
        }
    } catch(err) {
        console.log(err)
        return res.send(err)
    }

}

module.exports = {login, signup}