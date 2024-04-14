const fs = require('fs')
const path = require('path')

function deleteImageFile(imagePath) {
    fs.unlink(imagePath,(err) => {
        if(err) console.log(err)
        console.log('file deleted')
    })
}


deleteImageFile('E:\\HospitalManagementSystem\\uploads\\1712988083282-Screenshot 2023-11-04 125753.png')