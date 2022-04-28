const multer = require('multer');

const setFile = async (req, res, next) => {
    console.log('entre al multer');

    const multerStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __basedir + '/uploads/');
        },
        filename: (req, file, cb) => {
            cb(null, `${file.originalname} - ${Date.now()}`);
        },
    });

    const csvFilter = (req, file, cb) => {
        if (file.mimetype.includes('csv')) {
            cb(null, true);
        } else {
            cb('Solamente se aceptan archivos csv. ', false);
        }
    };

    const upload = multer({ storage: multerStorage, fileFilter: csvFilter }).single('file');

    try {
        upload(req, res, async (err) => {
            return next();
        });

        // res.send({ okey: 'okey' });

        // IMPORT CSV TO DATABASE
    } catch (error) {}
};

module.exports = setFile;
