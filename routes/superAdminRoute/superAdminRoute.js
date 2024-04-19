const router = require('express').Router()

const recpetionistMulter = require('../../utils/receptionistMulter/receptionistMulter')
const doctorMulterConfig = require('../../utils/doctorMulter/doctorMulter')

const upload = recpetionistMulter()
const uploadDoctor = doctorMulterConfig()


// receptionist required

const {addReceptionistValidation, deleteReceptionistValidation, editReceptionistValidation, getReceptionistValidation,loginReceptionistValidation} = require('../../middlewares/superAdminMiddleware/receptionistMiddleware/receptionistValidation')

// doctor required

const {addDoctorValidation, editDoctorValidation, deleteDoctorValidation, getDoctorValidation} = require('../../middlewares/superAdminMiddleware/doctorMiddleware/doctorValidation')

const {addDoctor, editDoctor, deleteDoctor, 
    getDoctors, getDoctor, addReceptionist, 
    editReceptionist, deleteReceptionist, getReceptionist, 
    getReceptionists,
    loginReceptionist} = require('../../controllers/superAdminController/superAdminController')
    

// list of receptionist routes

router.post('/add-receptionist',upload.single('receptionistImage'),addReceptionistValidation,addReceptionist)
router.put('/edit-receptionist/:id',upload.single('receptionistImage'),editReceptionistValidation,editReceptionist)
router.delete('/delete-receptionist/:id',deleteReceptionistValidation,deleteReceptionist)
router.get('/receptionist',getReceptionists)
router.get('/receptionist/login',upload.none(),loginReceptionistValidation,loginReceptionist)
router.get('/receptionist/:id',getReceptionistValidation,getReceptionist)

// list of doctors routesreceptionistImage

router.post('/add-doctor',uploadDoctor.single('profile'),addDoctorValidation,addDoctor)
router.put('/edit-doctor/:id',uploadDoctor.single('profile'),editDoctorValidation,editDoctor)
router.delete('/delete-doctor/:id',deleteDoctorValidation,deleteDoctor)
router.get('/doctors',getDoctors)
router.get('/doctor/:id',getDoctorValidation,getDoctor)

module.exports = router