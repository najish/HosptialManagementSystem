const multer = require('multer')



const storage = multer.diskStorage({
    destination: (req,file, cb) => {
        cb(null, './uploads/doctorImages')
    },

    filename: (req,file,cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})


function doctorMulterConfig() {
    return multer({storage: storage})
}


module.exports = doctorMulterConfig