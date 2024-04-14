const {body, param, validationResult} = require('express-validator')

const addDoctorValidation = [
    body('name').trim().notEmpty().withMessage('name cant be empty'),
    body('specialization').trim().notEmpty().withMessage('specialization cant be empty'),
    body('experience').trim().notEmpty().withMessage('experience cant be empty'),
    body('licenseNumber').notEmpty().withMessage('license error with nazish')
]


const deleteDoctorValidation = [
    param('id').trim().notEmpty().withMessage('param id cannot be empty').isUUID().withMessage('uuid is not valid')
]

const editDoctorValidation = [
    param('id').trim().notEmpty().withMessage('id cannot be empty').isUUID().withMessage('please provide uuid for the application'),
    body('name').trim().notEmpty().withMessage('name cannot be empty'),
    body('specialization').trim().notEmpty().withMessage('specilization cannot be empty'),
    body('experience').trim().notEmpty().withMessage('experience not cannot be empty'),
    body('licenseNumber').trim().notEmpty().withMessage('license number cannot be empty')
]


const getDoctorValidation = [

]


module.exports = {addDoctorValidation, editDoctorValidation, deleteDoctorValidation, getDoctorValidation}