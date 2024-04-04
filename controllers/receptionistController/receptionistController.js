const dashboard = (req,res) => {
    res.send('receptionist : dashboard')

}

const addPatient = (req,res) => {

    res.send('receptionist : add paitent : post')

}

module.exports = {dashboard ,addPatient}