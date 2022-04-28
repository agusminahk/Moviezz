const multer = require('multer');

const multerStorage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage: multerStorage });

module.exports = upload;
