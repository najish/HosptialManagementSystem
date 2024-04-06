const {param} = require('express-validator')

const deleteReceptionistValidation = [
    param('id').trim().notEmpty().withMessage('id cannot be empty').isUUID().withMessage('uuid is required to fetch the receptionist details')
]

module.exports = deleteReceptionistValidation