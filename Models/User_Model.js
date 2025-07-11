const mongoose = require("mongoose")
const validator = require("validator")

const userRegistrationSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 14,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        maxLength: 14,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: (value) => {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email", value)
            }
        }

    },
    photo: {
        type: String,
        default: ""
    },
    contact: {
        type: String,
        minLength: 10,
        maxLength: 14,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        maxLength: 18,
    }
}, { timestamps: true })

const User = mongoose.model("User", userRegistrationSchema)


module.exports = User;