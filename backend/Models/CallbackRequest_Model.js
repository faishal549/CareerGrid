
const mongoose = require("mongoose");
const { TbRuler2Off } = require("react-icons/tb");

const callbackRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxLength: 25
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    contact: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        maxLength: 300,
        default: ""
    },

}, { timestamps: true });

module.exports = mongoose.model("CallbackRequest", callbackRequestSchema);

