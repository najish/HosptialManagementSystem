const router = require('express').Router()
const {dashboard, addPatient} = require('../../controllers/receptionistController/receptionistController')

router.get('/',dashboard)
router.post('/add-patient', addPatient)

module.exports = router
