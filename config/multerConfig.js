const multer = require('multer');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,'./uploads/receptionistImages');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Function to configure Multer
function configureMulter() {
  return multer({ storage: storage });
}

module.exports = configureMulter;
