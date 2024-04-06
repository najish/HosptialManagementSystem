const Patient = require('../../models/patient')


const addPatient = async (req,res) => {
    try {
        console.log(req.body)
        const patient = Patient.create(req.body)
        res.send('add patient')
    } catch(err) {
        return res.json(err)
    }
}

const viewPatient = async (req,res) => {
    try {
        const patients = await Patient.findAll()
        res.send(patients)
    } catch(err) {
        console.log(err)
        return res.send(err)
    }
}


module.exports = {addPatient, viewPatient}