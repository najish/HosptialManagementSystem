const Doctor = require('../../models/doctor')
const Receptionist = require('../../models/receptionist')
const addDoctor = async (req,res) => {
    try {
        const doctorModel = req.body
        console.log(doctorModel)
        const doctor = Doctor.create(doctorModel)
        return res.send(doctor)
    } catch(err) {
        console.log(err)
        return res.send("failed to create doctor record")
    }
}

const editDoctor = (req,res) => {

    res.send('edit doctor')
    

}

const deleteDoctor = (req,res) => {
    res.send('delete doctor')

}

const getDoctors = async (req,res) => {
    try {
        const doctors = await Doctor.findAll()
        return res.send(doctors)
    } catch(err) {
        return res.send(err)
    }

}

const getDoctor = (req,res) => {
    res.send('get doctor with id')

}

const addReceptionist = async (req,res) => {
    try {
        const model = req.body
        const receptionist = Receptionist.create(model)
        if(receptionist) {
            return res.send('reception record created')
        }
    } catch(err) {
        res.send('failed to create receptionist')
    }
}

const editReceptionist = (req,res) => {
    res.send('edit Receptionist')
    

}

const deleteReceptionist = (req,res) => {
    res.send('delete Receptionist')

}

const getReceptionists = async (req,res) => {
    try {
        const receptionists = await Receptionist.findAll()
        return res.send(receptionists)
    } catch(err) {

        return res.send('failed to fetch receptionists')
    }

}

const getReceptionist = (req,res) => {
    res.send('get Receptionist')

}


module.exports = {addDoctor, editDoctor, deleteDoctor, getDoctors, getDoctor, addReceptionist, editReceptionist, deleteReceptionist, getReceptionist, getReceptionists}