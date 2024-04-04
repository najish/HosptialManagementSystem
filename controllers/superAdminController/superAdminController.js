const Doctor = require('../../models/doctor')
const addDoctor = async (req,res) => {
    try {
        const doctorModel = req.body
        console.log(doctorModel)
        console.log(Doctor)
        const doctor = await Doctor.create(doctorModel)
        if(doctor) {
            return res.send(doctor)
        }
        else {
            return res.send('failed to create doctor record')
        }

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

const getDoctors = (req,res) => {
    res.send('get doctors')

}

const getDoctor = (req,res) => {
    res.send('get doctor with id')

}

const addReceptionist = (req,res) => {
    res.send('add Receptionist')

}

const editReceptionist = (req,res) => {
    res.send('edit Receptionist')
    

}

const deleteReceptionist = (req,res) => {
    res.send('delete Receptionist')

}

const getReceptionists = (req,res) => {
    res.send('get Receptionists')

}

const getReceptionist = (req,res) => {
    res.send('get Receptionist')

}


module.exports = {addDoctor, editDoctor, deleteDoctor, getDoctors, getDoctor, addReceptionist, editReceptionist, deleteReceptionist, getReceptionist, getReceptionists}