const Patient = require('../../models/patient')



const addPatient = async (req,res) => {

    console.log(req.body)
    res.send('add patient')
}



const viewPatient = (req,res) => {
    res.send('view patient')
}



module.exports = {addPatient, viewPatient}