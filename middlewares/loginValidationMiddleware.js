
const {body, validationResult} = require('express-validator')


const loginValidation = [
    body('email').trim().isEmail().withMessage('invalid email address').normalizeEmail().withMessage('normalized'),
    body('password').trim().isLength({min:6}).withMessage('password should contain atleast 3 characters')
]



module.exports = loginValidation