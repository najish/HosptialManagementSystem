const {body, param, validationResult} = require('express-validator')


const addReceptionistValidation = [
    body('receptionistName').trim().notEmpty().withMessage('receptionistName cant be empty'),
    body('contactNumber').trim().notEmpty().withMessage('contactNumber number cant be empty'),
    body('email').trim().notEmpty().withMessage('email cant be empty'),
    body('totalRegisteredPatients').trim().notEmpty().withMessage('totalRegisteredPatients cant be empty'),
    body('totalRegFeeCollected').trim().notEmpty().withMessage('totalRegFeeCollected number cant be empty'),
    body('receptionistListId').trim().notEmpty().withMessage('receptionistListId cant be empty'),
    body('username').trim().notEmpty().withMessage('username cant be empty'),
    body('password').trim().notEmpty().withMessage('password number cant be empty'),
    body('lastLoggedIn').trim().notEmpty().withMessage('lastLoggedIn cant be empty'),
    body('loginStatus').trim().notEmpty().withMessage('loginstatus cannot be empty')
]


const deleteReceptionistValidation = [
    param('id').trim().notEmpty().withMessage('id cannot be empty').isUUID().withMessage('uuid is required to fetch the receptionist details')
]


const editReceptionistValidation = [
    param('id').trim().notEmpty().withMessage('uuid cannot be empty').isUUID().withMessage('uuid is not given'),
    body('receptionistName').trim().notEmpty().withMessage('receptionistName cant be empty'),
    body('contactNumber').trim().notEmpty().withMessage('contactNumber number cant be empty'),
    body('email').trim().notEmpty().withMessage('email cant be empty'),
    body('totalRegisteredPatients').trim().notEmpty().withMessage('totalRegisteredPatients cant be empty'),
    body('totalRegFeeCollected').trim().notEmpty().withMessage('totalRegFeeCollected number cant be empty'),
    body('receptionistListId').trim().notEmpty().withMessage('receptionistListId cant be empty'),
    body('username').trim().notEmpty().withMessage('username cant be empty'),
    body('password').trim().notEmpty().withMessage('password number cant be empty'),
    body('lastLoggedIn').trim().notEmpty().withMessage('lastLoggedIn cant be empty'),
    body('loginStatus').trim().notEmpty().withMessage('loginstatus cannot be empty')
]


const getReceptionistValidation = [
    param('id').trim().notEmpty().withMessage('id cannot be empty').isUUID().withMessage('please provide the uuid')
]


module.exports = {addReceptionistValidation, editReceptionistValidation, deleteReceptionistValidation, getReceptionistValidation}