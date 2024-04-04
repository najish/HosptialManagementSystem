const router = require('express').Router()
const {addPatient, viewPatient} = require('../../controllers/patientController/patientController')

router.post('/add-patient',addPatient)
router.get('/view-patient',viewPatient)



module.exports = router