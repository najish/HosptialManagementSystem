const router = require('express').Router()

// receptionist required
const addReceptionistValidation = require('../../middlewares/superAdminMiddleware/receptionistMiddleware/addReceptionistValidation')
const editReceptionistValidation = require('../../middlewares/superAdminMiddleware/receptionistMiddleware/editReceptionistValidation')
const getReceptionistValidation = require('../../middlewares/superAdminMiddleware/receptionistMiddleware/getReceptionistValidation')
const deleteReceptionistValidation = require('../../middlewares/superAdminMiddleware/receptionistMiddleware/deleteReceptionistValidation')
// doctor required

const addDoctorValidation = require('../../middlewares/superAdminMiddleware/doctorMiddleware/addDoctorValidation')
const getDoctorValidation = require('../../middlewares/superAdminMiddleware/doctorMiddleware/getDoctorValidation')
const editDoctorValidation = require('../../middlewares/superAdminMiddleware/doctorMiddleware/editDoctorValidation')
const deleteDoctorValidation = require('../../middlewares/superAdminMiddleware/doctorMiddleware/deleteDoctorValidation')

const {addDoctor, editDoctor, deleteDoctor, 
    getDoctors, getDoctor, addReceptionist, 
    editReceptionist, deleteReceptionist, getReceptionist, 
    getReceptionists} = require('../../controllers/superAdminController/superAdminController')
    

// list of receptionist routes

router.post('/add-receptionist',addReceptionistValidation,addReceptionist)
router.put('/edit-receptionist/:id',editReceptionistValidation,editReceptionist)
router.delete('/delete-receptionist/:id',deleteReceptionistValidation,deleteReceptionist)
router.get('/receptionist',getReceptionists)
router.get('/receptionist/:id',getReceptionistValidation,getReceptionist)


// list of doctors routes

router.post('/add-doctor',addDoctorValidation,addDoctor)
router.put('/edit-doctor/:id',editDoctorValidation,editDoctor)
router.delete('/delete-doctor/:id',deleteDoctorValidation,deleteDoctor)
router.get('/doctors',getDoctors)
router.get('/doctor/:id',getDoctorValidation,getDoctor)

module.exports = router