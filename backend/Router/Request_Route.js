
const express = require('express')
const requestCallbackController = require('../Controllers/Request_Controller')
const router = express.Router()


router.route("/").post(requestCallbackController)


module.exports = router