const {body, validationResult} = require('express-validator')

const addReceptionistValidation = [
    body('name').trim().notEmpty().withMessage('name cant be empty'),
    body('phone').trim().notEmpty().withMessage('phone number cant be empty'),
    body('address').trim().notEmpty().withMessage('address cant be empty')
]


module.exports = addReceptionistValidation