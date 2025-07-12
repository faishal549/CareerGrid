const User = require("../Models/User_Model")
const jwt = require("jsonwebtoken")
const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(400).json({ message: "Token Not Found" })
        }
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
        if (!verifyToken) {
            return res.status(400).json({ message: "Token Unauthorized" })
        }
        const userData = await User.findById(verifyToken.id).select("-password")

        req.user = userData
        req.token = token
        next()


    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" })
    }
}


module.exports = authMiddleware