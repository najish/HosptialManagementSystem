const router = require('express').Router()
const {login, signup} = require('../../controllers/authController/authController')
const signupValidation = require('../../middlewares/signUpValidationMiddleware')
const loginValidation = require('../../middlewares/loginValidationMiddleware')
router.post('/signup',signupValidation,signup);
router.post('/login',loginValidation,login);

module.exports = router