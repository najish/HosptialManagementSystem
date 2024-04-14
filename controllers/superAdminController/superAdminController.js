const Doctor = require('../../models/doctor')
const Receptionist = require('../../models/receptionist')
const {validationResult} = require('express-validator')
const fs = require('fs')
const path = require('path')

// doctor handlers
const addDoctor = async (req,res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {

            return res.status(400).send(errors.array())
        }
        const doctorModel = req.body
        console.log(doctorModel)
        const doctor = await Doctor.create(doctorModel)

        if(doctor) {
            return res.send(doctor)
        }
        else {
            throw new Error('failed to created doctor record')
        }
    } catch(err) {
        return res.send("failed to create doctor record")
    }
}

const editDoctor = async (req,res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.send(errors.array())
        }

        const doctor = await Doctor.findOne({
            where: {
                id: req.params.id
            }
        })

        if(!doctor) {
            return res.send('doctor not found')
        }

        const model = req.body
        

        doctor.name = model.name
        doctor.specialization = model.specialization
        doctor.experience = model.experience
        doctor.licenseNumber = model.licenseNumber

        await doctor.save()

        res.send(doctor)
    } catch(err) {
        return res.send(err)
    }
}

const deleteDoctor = async (req,res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.send(errors.array())
        }

        const doctor = await Doctor.findOne({
            where: {
                id: req.params.id
            }
        })

        if(!doctor) {
            return res.send('doctor not found')
        }

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

        const doctor = await Doctor.findOne({
            where: {
                id: req.params.id
            }
        }) 

        if(!doctor) {
            return res.send('doctor is not found')
        }


        console.log(imagePath)


        return res.send(doctor)
    } catch(err) {
        return res.send('error');  
    }
}


// Receptionist handlers

const addReceptionist = async (req,res) => {
    try {
        const {body, file} = req

        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            fs.unlink(file.path, err=> {
                if(err) throw new Error('failed to unlink the new file')
                else console.log('failed to uplaod the file becous of validation error')
            })
            return res.send(errors.array())
        }

        const model = {
            ...req.body,
            receptionistImage: file.path
        }

        console.log(model)
        const receptionist = await Receptionist.create(model)
        return res.send(receptionist)

    } catch(err) {
        return res.send(err)
    }
}


const editReceptionist = async (req,res) => {
    try {
        const errors = validationResult(req)
        const {body, file} = req
        const model = req.body
        if(!errors.isEmpty()) {
            fs.unlink(file.path, err=> {
                if(err) throw new Error('failed to delete the newly added image file',err)
                else console.log('deleted the receptionist image becouse of validation error')
            })
            return res.send(errors.array())
        }

        
        const receptionist = await Receptionist.findByPk(req.params.id)

        
        if(!receptionist) { 
            fs.unlink(file.path, err => {
                if(err) throw new Error('user not found')
                else console.log('user not found so deleted the newly added image')
            })
            return res.send('receptionist not found')
        }

        console.log(receptionist.dataValues)
        
        fs.unlink(receptionist.receptionistImage,err => {
            if(err) throw new Error(err)
            else console.log('exisiting file deleted')
        })
        

        receptionist.receptionistName = model.receptionistName
        receptionist.contactNumber = model.contactNumber
        receptionist.email = model.email
        receptionist.totalRegisteredPatients = model.totalRegisteredPatients
        receptionist.totalRegFeeCollected = model.totalRegFeeCollected
        receptionist.receptionistListId = model.receptionistListId
        receptionist.username = model.username
        receptionist.password = model.password
        receptionist.receptionistImage = file.path
        receptionist.lastLoggedIn = model.lastLoggedIn
        receptionist.loginStatus = model.loginStatus
        
        await receptionist.save()
        return res.send(receptionist)
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




module.exports = {addDoctor, editDoctor, deleteDoctor, getDoctors, getDoctor, addReceptionist, editReceptionist, deleteReceptionist, getReceptionist, getReceptionists}