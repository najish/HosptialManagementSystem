const Doctor = require('../../models/doctor')
const Receptionist = require('../../models/receptionist')
const {validationResult} = require('express-validator')
const fs = require('fs')
const path = require('path')
const bcrypt = require('bcrypt')
const { error } = require('console')
const { captureRejectionSymbol } = require('events')

// doctor handlers

const loginDoctor = async(req,res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res.send(errors.array())
    }

    const {username, password} = req.body

    const doctor = await Doctor.findOne({
        where: {
            username:username
        }
    })

    if(!doctor) {
        return res.send('doctor not found')
    }

    const valid = bcrypt.compareSync(password, doctor.password)

    if(!valid) {
        return res.send('invalid doctor credential')
    }
    else return res.json({
        message: "login sucessfully",
        doctor
    })

}

const addDoctor = async (req,res) => {
    try {
        const {body, file} = req
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            fs.unlink(file.path, err => {
                if(err) {
                    console.log('failed to unlink the newly added file becouse of either validation error or file path is not valid or not exisits')
                    return res.send(err)
                }
                else console.log('deleted newly added doctor image')
            })
            return res.status(400).send(errors.array())
        }

        const doctorModel = {
            ...body,
        }
        doctorModel.profile = file.path

        const salt = bcrypt.genSaltSync(10)
        const passwordHash = bcrypt.hashSync(doctorModel.password,salt)
        doctorModel.password = passwordHash

        console.log(doctorModel)
        const doctor = await Doctor.create(doctorModel)
        return res.send(doctor)
        
    } catch(err) {

        const {file} = req

        fs.unlink(file.path, err => {
            if(err) {
                console.log('failed to unlink the newly added file')
                return res.send(err)
            }
        })

        return res.json(err)
    }
}

const editDoctor = async (req,res) => {
    try {
        const errors = validationResult(req)
        const {body, file} = req
        const model = req.body

        if(!errors.isEmpty()) {
            fs.unlink(file.path, err => {
                if(err) {
                    console.log('failed to unlink the newly added file')
                    return res.send(err)
                }
                else console.log('deleted update doctor image becouse of validation error')
            })
            return res.send(errors.array())
        }

        const doctor = await Doctor.findByPk(req.params.id)

        if(!doctor) {
            fs.unlink(file.path, err => {
                if(err) {
                    console.log(err)                    
                    return res.send(err)
                }
                else console.log('doctor not found to update the image, so delete the image')
            })
            return res.send('doctor not found')
        }

        fs.unlink(doctor.profile, err => {
            if(err) {
                console.log(err)
                return res.send(err)
            }
            else console.log('deleted the previous image of the doctor')
        })


        const salt = bcrypt.genSaltSync(10)
        const passwordHash = bcrypt.hashSync(model.password, salt)
        
        model.password = passwordHash
        model.profile = file.path
        
        console.log(doctor)
        doctor.set(model)
        await doctor.save()
        res.send(doctor)
    } catch(err) {
        console.log(err)
        return res.send(err)
    }
}

const deleteDoctor = async (req,res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.send(errors.array())
        }

        const doctor = await Doctor.findByPk(req.params.id)
        

        if(!doctor) {
            return res.send('doctor not found')
        }

        fs.unlinkSync(doctor.profile)
        await doctor.destroy()
        res.send('deleted doctor')
    } catch(err) {
        return res.send(err)
    }

}

const getDoctors = async (req,res) => {
    try {
        const doctors = await Doctor.findAll()
        return res.send(doctors)
    } catch(err) {
        return res.send(err)
    }
}

const getDoctor = async (req,res) => {
    try {

        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.send(errors.array())
        }

        const doctor = await Doctor.findByPk(req.params.id)

        if(!doctor) {
            return res.send('doctor is not found')
        }
        return res.send(doctor)
    } catch(err) {
        return res.send('error');  
    }
}


// Receptionist handlers


const loginReceptionist = async (req,res) => {
    try {
        const {username, password} = req.body
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.send(errors.array())
        }

        const receptionist = await Receptionist.findOne({
            where: {
                username: username
            }
        })

        if(!receptionist) {
            return res.send('receptionist not found')
        }

        const valid = bcrypt.compareSync(password, receptionist.password)

        if(!valid) {
            return res.send('invalid credential')
        }
        else 
            return res.send('Logged Sucessfully')

    } catch(err) {
        console.log('failed')
        return res.send(err)
    }
}

const addReceptionist = async (req,res) => {

    try {
        const {body, file} = req
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            fs.unlink(file.path, err=> {
                if(err) {
                    console.log('failed to unlink the newly added receptionist image')
                    return res.send(err)
                }
                else console.log('failed to uplaod the file becous of validation error')
            })
            return res.send(errors.array())
        }

        const model = {
            ...req.body,
            receptionistImage: file.path
        }

        const salt = bcrypt.genSaltSync(10)
        const passHash = bcrypt.hashSync(model.password, salt)
        model.password = passHash


        const receptionist = await Receptionist.create(model)
        return res.send(receptionist)

    } catch(err) {
        const {file } = req
        fs.unlink(file.path, err => {
            if(err) {
                console.log('failed to unlink the file')
                return res.send(err)
            }
        })
        console.log('failed : add receptionist')
        return res.send(err)
    }

}

const editReceptionist = async (req,res) => {
    try {
        const errors = validationResult(req)
        const {body, file} = req
        const model = req.body


        if(!errors.isEmpty()) {
            fs.unlink(file.path, err => {
                if(err) {
                    console.log('failed to unlink the exisiting receptionist image becouse validation error')
                    return res.send(err)
                }
                else console.log('receptionist not found so deleted the newly added image')
            })
            return res.send(errors.array())
        }



        
        const receptionist = await Receptionist.findByPk(req.params.id)

        
        if(!receptionist) { 
            fs.unlink(file.path, err => {
                if(err) {
                    console.log('failed to unlink the exisiting receptionist image becouse or file.path is not valid or undefined')
                    return res.send(err)
                }
                else console.log('receptionist not found so deleted the newly added image')
            })
            return res.send('receptionist not found')
        }

        

        fs.unlinkSync(receptionist.receptionistImage)

        console.log("Hello ")
        const salt = bcrypt.genSaltSync(10)
        const passwordHash = bcrypt.hashSync(model.password,salt)
        model.password = passwordHash
        model.receptionistImage = file.path
        console.log(model)

        receptionist.set(model)
        await receptionist.save()
        return res.send("edit receptionist")

    } catch(err) {
        return res.send(err)
    }
}


const deleteReceptionist = async (req,res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.send(errors.array())
        }

        const id = req.params.id

        const receptionist = await Receptionist.findByPk(id)

        if(!receptionist) {
            return res.status(400).send('receptionist not found')
        }

        fs.unlink(receptionist.receptionistImage, err => {
            if(err) {
                console.log(err)
                return res.send(err)
            }
        })
        await receptionist.destroy()
        return res.send('deleted Receptionist')
    } catch(err) {
        return res.send(err)
    }

}

const getReceptionists = async (req,res) => {
    try {
        const receptionists = await Receptionist.findAll()
        return res.send(receptionists)
    } catch(err) {

        return res.send('failed to fetch receptionists')
    }

}

const getReceptionist = async (req,res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.send(errors.array())
        }
        
        const receptionist = await Receptionist.findByPk(req.params.id)
        
        if(!receptionist)
            return res.send('receptionist not found')

        return res.send(receptionist)
    
    } catch(err) {
        return res.send(err)
    }
}

module.exports = {loginDoctor,addDoctor, editDoctor, deleteDoctor, getDoctors, getDoctor,loginReceptionist, addReceptionist, editReceptionist, deleteReceptionist, getReceptionist, getReceptionists}