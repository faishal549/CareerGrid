const express = require('express')
const authMiddleware = require('../Middleware/Auth_Middleware')
const resumeController = require("../Controllers/Resume_Controller")
const router = express.Router()

router.route("/resume").post(authMiddleware, resumeController.createOrUpdateResume)



module.exports = router