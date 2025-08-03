const multer = require('multer');
const { storage } = require('../Utils/cloudinary');

const upload = multer({
    storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
});

module.exports = upload;
