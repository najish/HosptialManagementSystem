const {param, body} = require('express-validator')



const editDoctorValidation = [
    param('id').trim().notEmpty().withMessage('id cannot be empty').isUUID().withMessage('please provide uuid for the application'),
    body('name').trim().notEmpty().withMessage('name cannot be empty'),
    body('specialization').trim().notEmpty().withMessage('specilization cannot be empty'),
    body('experience').trim().notEmpty().withMessage('experience not cannot be empty'),
    body('licenseNumber').trim().notEmpty().withMessage('license number cannot be empty')
]



module.exports = editDoctorValidation