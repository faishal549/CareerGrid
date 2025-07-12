const express = require("express")
const router = express.Router()
const authController = require("../Controllers/Auth_Controller")
const authMiddleware = require("../Middleware/Auth_Middleware")

router.route("/register").post(authController.register)
router.route("/login").post(authController.login)
router.route("/logout").post(authController.logout)
router.route("/user").get(authMiddleware, authController.userData)


module.exports = router