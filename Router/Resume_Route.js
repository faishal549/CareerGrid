const express = require('express')
const authMiddleware = require('../Middleware/Auth_Middleware')
const resumeController = require("../Controllers/Resume_Controller")
const router = express.Router()

router.route("/resume").post(authMiddleware, resumeController.createOrUpdateResume)
router.route("/delete/resume").delete(authMiddleware, resumeController.deleteUserResume)
router.route("/resume/me").get(authMiddleware, resumeController.getMyResume)



module.exports = router