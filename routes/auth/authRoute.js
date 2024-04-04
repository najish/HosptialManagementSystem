const router = require('express').Router()
const {login, signup} = require('../../controllers/authController/authController')

router.post('/signup',signup);
router.post('/login',login);

module.exports = router