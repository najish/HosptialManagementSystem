const router = require('express').Router()
const {dashboard, addPatient, viewPatient} = require('../../controllers/receptionistController/receptionistController')

router.get('/',dashboard)
router.post('/add-patient', addPatient)
router.get('/view-patient',viewPatient)

module.exports = router
