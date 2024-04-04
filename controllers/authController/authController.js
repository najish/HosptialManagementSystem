const User = require('../../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const login = async(req,res) => {
    try {
        const {email, password} = req.body
        console.log(req.body)
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
    res.statusCode(400).send('login')
}   

const signup = async (req,res) => {
    try {
        const model = req.body
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(model.password,salt)
        model.password = hash
        const user = User.create(model)
        if(user) {
            return res.statusCode(200).send(user)
        }
    } catch(err) {
        console.log(err)
        return res.send(err)
    }

}

module.exports = {login, signup}