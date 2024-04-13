const {body, validationResult} = require('express-validator')

const addReceptionistValidation = [
    // body('receptionistName').trim().notEmpty().withMessage('receptionistName cant be empty'),
    // body('contactNumber').trim().notEmpty().withMessage('contactNumber number cant be empty'),
    // body('email').trim().notEmpty().withMessage('email cant be empty'),
    // body('totalRegisteredPatients').trim().notEmpty().withMessage('totalRegisteredPatients cant be empty'),
    // body('totalRegFeeCollected').trim().notEmpty().withMessage('totalRegFeeCollected number cant be empty'),
    // body('receptionistListId').trim().notEmpty().withMessage('receptionistListId cant be empty'),
    // body('username').trim().notEmpty().withMessage('username cant be empty'),
    // body('password').trim().notEmpty().withMessage('password number cant be empty'),
    // body('lastLoggedIn').trim().notEmpty().withMessage('lastLoggedIn cant be empty')
]


/*


    {
        "id": "07eb90d3-3b2e-4038-af40-cfd3e4ade419",
        "receptionistName": "Receptionist Name1",
        "username": "9993846107",
        "email": "receptionist1@gmail.com",
        "totalRegisteredPatients": 23,
        "totalRegFeeCollected": 5000,
        "receptionistListId": "receptionistlistid1",
        "username": "reusername",
        "password": "password@123",
        "receptionistImage": "image",
        "lastLoggedIn": "lastloggedin"
    }



*/

module.exports = addReceptionistValidation