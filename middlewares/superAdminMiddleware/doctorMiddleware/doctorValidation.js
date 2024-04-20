const {body, param, validationResult} = require('express-validator')

const loginDoctorValidation = [
    body('username').trim().notEmpty().withMessage('username cannot hello empty'),
    body('password').trim().notEmpty().withMessage('password cannot empty')
]

const addDoctorValidation = [
    body('firstName').trim().notEmpty().withMessage('firstname cant be empty'),
    body('lastName').trim().notEmpty().withMessage('lastname cant be empty'),
    body('email').trim().notEmpty().withMessage('email cant be empty'),
    body('city').notEmpty().withMessage('city cannot be empty'),
    body('about').trim().notEmpty().withMessage('about cant be empty'),
    body('enabled').trim().notEmpty().withMessage('enabled cant be empty & it\'s boolean'),
    body('username').notEmpty().withMessage('username cannot be empty'),
    body('password').notEmpty().withMessage('password cannot be empty')
]


const deleteDoctorValidation = [
    param('id').trim().notEmpty().withMessage('param id cannot be empty').isUUID().withMessage('uuid is not valid')
]

const editDoctorValidation = [
    param('id').trim().notEmpty().withMessage('id cannot be empty').isUUID().withMessage('please provide uuid for the application'),
    body('firstName').trim().notEmpty().withMessage('firstname cant be empty'),
    body('lastName').trim().notEmpty().withMessage('lastname cant be empty'),
    body('email').trim().notEmpty().withMessage('email cant be empty'),
    body('city').notEmpty().withMessage('city cannot be empty'),
    body('about').trim().notEmpty().withMessage('about cant be empty'),
    body('enabled').trim().notEmpty().withMessage('enabled cant be empty & it\'s boolean'),
    body('username').notEmpty().withMessage('username cannot be empty'),
    body('password').notEmpty().withMessage('password cannot be empty'),
]


const getDoctorValidation = [
    param('id').trim().notEmpty().withMessage('id cannot be empty').isUUID().withMessage('id is not valid')
]


module.exports = {loginDoctorValidation, addDoctorValidation, editDoctorValidation, deleteDoctorValidation, getDoctorValidation}