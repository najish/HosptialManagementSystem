const {body,param, validationResult} = require('express-validator')

const editReceptionistValidation = [
    body('name').trim().notEmpty().withMessage('name cant be empty'),
    body('phone').trim().notEmpty().withMessage('phone number cant be empty'),
    body('address').trim().notEmpty().withMessage('address cant be empty'),
    param('id').trim().notEmpty().withMessage('params cant be empty')
]


module.exports = editReceptionistValidation