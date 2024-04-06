const router = require('express').Router()
const {dashboard, addPatient, viewPatient, viewAvailableDoctors} = require('../../controllers/receptionistController/receptionistController')

router.get('/',dashboard)
router.post('/add-patient', addPatient)
router.get('/view-patient',viewPatient)
router.get('/view-available-doctors',viewAvailableDoctors)

module.exports = router
