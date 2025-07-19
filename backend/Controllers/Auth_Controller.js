const User = require("../Models/User_Model")

const register = async (req, res) => {
    try {
        const { firstname, lastname, email, contact, password } = req.body;

        if (!firstname || !lastname || !email || !contact || !password) {
            return res.status(400).json({ message: "all fields are required" })
        }
        const isUserExist = await User.findOne({ email: email.toLowerCase() })
        if (isUserExist) {
            return res.status(400).json({ message: "User alreay exists !" })
        } else {
            const createUser = await User.create({ firstname, lastname, email, contact, password })
            const token = await createUser.generateToken()
            res.cookie("token", token, { expires: new Date(Date.now() + 3600000), httpOnly: true, })
            return res.status(200).json({
                message: "Registration Successfull",
                user: {
                    id: createUser._id.toString(),
                    firstname: createUser.firstname,
                    lastname: createUser.lastname,
                    email: createUser.email,
                    contact: createUser.contact
                },
                token: token
            })

        }

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "page not found" })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const isEmailExist = await User.findOne({ email })
        if (!isEmailExist) {
            return res.status(400).json({ message: "Invalid Credentials" })
        }
        const verifyPassword = await isEmailExist.comparePassword(password)
        if (verifyPassword) {
            const token = await isEmailExist.generateToken()
            res.cookie("token", token, { expires: new Date(Date.now() + 3600000), httpOnly: true, secure: true })
            return res.status(200).json(
                {
                    message: "Logged successfully!",
                    token: token,
                    id: isEmailExist._id.toString()

                })
        } else {
            return res.status(400).json({ message: "Invalid Credentials" })
        }

    } catch (error) {
        console.error(error.message)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

const logout = async (req, res) => {
    try {
        res.cookie("token", null, { expires: new Date(Date.now()) })
        return res.status(200).json({ message: "you are logout session expired" })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const userData = async (req, res) => {
    try {
        const data = req.user
        return res.status(201).json({ data: data })
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized User" })
    }
}



module.exports = { register, login, logout, userData }