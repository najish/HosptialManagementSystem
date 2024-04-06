const dashboard = (req,res) => {
    res.send('receptionist : dashboard')
}

const addPatient = (req,res) => {
    // database store & validate
    console.log(req.body)
}

const viewPatient = (req,res) => {
    // database store & validate
    res.send('receptionist : view paitent : get')
}


module.exports = {dashboard ,addPatient, viewPatient}