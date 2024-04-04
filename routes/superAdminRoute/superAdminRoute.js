const router = require('express').Router()
const {addDoctor, editDoctor, deleteDoctor, 
    getDoctors, getDoctor, addReceptionist, 
    editReceptionist, deleteReceptionist, getReceptionist, 
    getReceptionists} = require('../../controllers/superAdminController/superAdminController')

router.post('/add-receptionist',addReceptionist)
router.post('/edit-receptionist',editReceptionist)
router.post('/delete-receptionist',deleteReceptionist)
router.get('/receptionist',getReceptionists)
router.get('/receptionist/:id',getReceptionist)


// list of doctors routes

router.post('/add-doctor',addDoctor)
router.put('/edit-doctor',editDoctor)
router.post('/delete-doctor',deleteDoctor)
router.get('/doctors',getDoctors)
router.get('/doctor/:id',getDoctor)

module.exports = router