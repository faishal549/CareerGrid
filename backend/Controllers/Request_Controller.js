const CallbackRequest = require("../Models/CallbackRequest_Model")
const requestCallbackController = async (req, res) => {
    try {
        const RequestCallbackData = req.body
        await CallbackRequest.create(RequestCallbackData)
        return res.status(200).json({ message: "Callback Request Received" })



    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Server Error during request callback", Error: error })

    }
}

module.exports = requestCallbackController