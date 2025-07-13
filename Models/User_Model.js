const mongoose = require("mongoose")
const validator = require("validator")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")


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
        default: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
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

userRegistrationSchema.methods.generateToken = async function () {
    try {
        const token = jwt.sign({
            id: this._id,
            email: this.email
        },
            process.env.SECRET_KEY,
            {
                expiresIn: "30d"
            }
        )
        return token
    } catch (error) {
        console.error("Token not generated", error)
    }
}

userRegistrationSchema.pre("save", async function (next) {
    const salt = 10;
    if (!this.isModified("password")) {
        next()
    }
    const hash_password = await bcrypt.hash(this.password, salt)
    this.password = hash_password
    next();
})

userRegistrationSchema.methods.comparePassword = async function (userPassword) {

    return bcrypt.compare(userPassword, this.password)
}
const User = mongoose.model("User", userRegistrationSchema)


module.exports = User;