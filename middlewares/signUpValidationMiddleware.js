const {body} = require('express-validator')

const signupValidation = [
    body('name').trim().notEmpty().withMessage('name should not be empty').isLength({min:3}).withMessage('name should have atleast 3 characters'),
    body('email').trim().isEmail().withMessage('enter correct email').normalizeEmail(),
    body('password').trim().notEmpty().isLength({min:6}).withMessage('password must contains atleast 6 characters')
]



module.exports = signupValidation