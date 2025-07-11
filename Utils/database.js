const mongoose = require("mongoose")

const URI = process.env.DATABASE_URI
const connectDatabase = async () => {
    try {
        await mongoose.connect(URI)
        console.log("DATABASE CONNECTED!")
    } catch (error) {
        console.error("CONNECTION FAILED!", error)
        process.exit(1)
    }
}

module.exports = connectDatabase