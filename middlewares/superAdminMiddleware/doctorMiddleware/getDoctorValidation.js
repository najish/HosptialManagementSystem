const {param} = require('express-validator')
const getDoctorValidation = [
    param('id').trim().notEmpty().withMessage('id cannot be empty').isUUID().withMessage('uuid is not valid')
]

module.exports = getDoctorValidation