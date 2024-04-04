const dashboard = (req,res) => {
    res.send('receptionist : dashboard')

}

const addPatient = (req,res) => {

    // database store & validate

    

    res.send('receptionist : add paitent : post')

}

module.exports = {dashboard ,addPatient}