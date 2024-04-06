const {param} = require('express-validator')

const getReceptionistValidation = [
    param('id').trim().notEmpty().withMessage('id cannot be empty').isUUID().withMessage('please provide the uuid')
]


module.exports = getReceptionistValidation