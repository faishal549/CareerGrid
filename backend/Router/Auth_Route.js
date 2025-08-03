const express = require("express")
const router = express.Router()
const upload = require('../Middleware/uploadMiddleware');
const authController = require("../Controllers/Auth_Controller")
const authMiddleware = require("../Middleware/Auth_Middleware")

router.route("/register").post(authController.register)
router.route("/login").post(authController.login)
router.route("/logout").post(authController.logout)
router.route("/user").get(authMiddleware, authController.userData)
router.route("/upload-photo").put(authMiddleware, upload.single('photo'), authController.uploadProfilePhoto)


module.exports = router