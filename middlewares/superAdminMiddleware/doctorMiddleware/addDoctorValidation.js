const {body} = require('express-validator')


/*

    name, specialization, experience, licenseNumber

*/

const addDoctorValidation = [
    body('name').trim().notEmpty().withMessage('name cant be empty'),
    body('specialization').trim().notEmpty().withMessage('specialization cant be empty'),
    body('experience').trim().notEmpty().withMessage('experience cant be empty'),
    body('licenseNumber').notEmpty().withMessage('license error with nazish')
]


module.exports = addDoctorValidation