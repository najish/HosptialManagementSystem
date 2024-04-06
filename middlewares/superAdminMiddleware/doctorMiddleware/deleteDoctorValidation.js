const {param} = require('express-validator')


const deleteDoctorValidation = [
    param('id').trim().notEmpty().withMessage('param id cannot be empty').isUUID().withMessage('uuid is not valid')
]

module.exports = deleteDoctorValidation