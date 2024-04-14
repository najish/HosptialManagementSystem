const router = require('express').Router()

const multerConfig = require('../../config/multerConfig')
const upload = multerConfig()

// receptionist required

const {addReceptionistValidation, deleteReceptionistValidation, editReceptionistValidation, getReceptionistValidation} = require('../../middlewares/superAdminMiddleware/receptionistMiddleware/receptionistValidation')

// doctor required

const {addDoctorValidation, editDoctorValidation, deleteDoctorValidation, getDoctorValidation} = require('../../middlewares/superAdminMiddleware/doctorMiddleware/doctorValidation')

const {addDoctor, editDoctor, deleteDoctor, 
    getDoctors, getDoctor, addReceptionist, 
    editReceptionist, deleteReceptionist, getReceptionist, 
    getReceptionists} = require('../../controllers/superAdminController/superAdminController')
    

// list of receptionist routes

router.post('/add-receptionist',upload.single('receptionistImage'),addReceptionistValidation,addReceptionist)
router.put('/edit-receptionist/:id',upload.single('receptionistImage'),editReceptionistValidation,editReceptionist)
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