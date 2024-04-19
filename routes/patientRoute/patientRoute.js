const router = require('express').Router()
const {addPatient, viewPatient} = require('../../controllers/patientController/patientController')

router.post('/add-patient',addPatient)
router.get('/view-patient',viewPatient)
// router.post('/add-patient',addPatient)
// router.get('/view-patient/:id',viewPatientWithId)


module.exports = router