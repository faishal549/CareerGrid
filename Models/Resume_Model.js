const mongoose = require("mongoose")
const validator = require("validator")

const resumeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
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
    contact: {
        type: String,
        minLength: 10,
        maxLength: 14,
        required: true
    },
    location: {
        type: String,
        required: true,
        maxLength: 18,
    },
    github: {
        type: String,
        trim: true

    },
    age: {
        type: String,
        maxLength: 3,
    },
    summary: {
        type: String,
        maxLength: 200,
        trim: true,
    },
    skills: {
        type: [String],
        trim: true,
    },
    experience: [
        {
            company: {
                type: String,
                maxLength: 18,
            },
            role: {
                type: String,
                maxLength: 18,
            },
            duration: {
                type: String,
                maxLength: 20,
            },
            description: {
                type: String,
                maxLength: 200,
            }
        }
    ],
    education: [
        {
            institution: {
                type: String,
                maxLength: 18,
            },
            degree: {
                type: String,
                maxLength: 18,
            },
            year: {
                type: String,
                maxLength: 6,
            },
        }
    ],
    projects: [
        {
            title: {
                type: String,
                maxLength: 18,
            },
            description: {
                type: String,
                maxLength: 50,
            },
            github: {
                type: String,

            },
            livelink: {
                type: String,
            },
        }
    ],
}, { timestamps: true })

const Resume = mongoose.model("Resume", resumeSchema)


module.exports = Resume